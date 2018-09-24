import React from "react";
import "react-dates/initialize";
import moment from "moment-timezone";
import _ from "lodash";

import { DateInput } from "semantic-ui-calendar-react";
import TimePicker from "react-times";

import { SingleDatePicker } from "react-dates";

import {
  Segment,
  Button,
  Divider,
  Icon,
  Input
} from "semantic-ui-react/dist/commonjs";

import { REG_HEX, STORAGE } from "../../../constants.js";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz("Asia/Kolkata"),
      newDate: moment()
        .tz("Asia/Kolkata")
        .format("DD-MM-YYYY"),
      time: moment().format("HH:mm A"),
      focused: false,
      quantity: 1,
      bookingPrice: 0,
      initialPrice: 0
    };
  }

  componentWillMount() {
    if (this.props.history.location.state !== undefined) {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          this.props.history.location.state.offerData.data.DISCOUNT.Type ===
          "flat"
        ) {
          const discount = parseInt(
            this.props.history.location.state.offerData.data.DISCOUNT.Value,
            10
          );
          if (
            this.props.history.location.state.offerData.data.DISCOUNT
              .ActualPrice !== 0 &&
            discount !== 0
          ) {
            const bookingPrice =
              (this.props.history.location.state.offerData.data.DISCOUNT
                .ActualPrice *
                discount) /
              100;

            this.bookingDateState(
              _.round(
                this.props.history.location.state.offerData.data.DISCOUNT
                  .ActualPrice - bookingPrice
              )
            );
          } else {
            this.bookingDateState(
              this.props.history.location.state.offerData.data.DISCOUNT
                .ActualPrice
            );
          }
        } else {
          this.bookingDateState(
            this.props.history.location.state.offerData.data.DISCOUNT
              .ActualPrice
          );
        }
      } else {
        this.bookingDateState(
          this.props.history.location.state.offerData.data.Offer_Basic_Details
            .Offer_Min_Price
        );
      }
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.detailState.which === "old") {
      if (newProps.oldViewDetail.oldViewDetail.deal.DISCOUNT.Type === "flat") {
        const discount = parseInt(
          newProps.oldViewDetail.oldViewDetail.deal.DISCOUNT.Value,
          10
        );
        if (
          newProps.oldViewDetail.oldViewDetail.deal.DISCOUNT.ActualPrice !==
            0 &&
          discount !== 0
        ) {
          const bookingPrice =
            (newProps.oldViewDetail.oldViewDetail.deal.DISCOUNT.ActualPrice *
              discount) /
            100;
          this.bookingDateState(
            _.round(
              newProps.oldViewDetail.oldViewDetail.deal.DISCOUNT.ActualPrice -
                bookingPrice
            )
          );
        } else {
          this.bookingDateState(
            newProps.oldViewDetail.oldViewDetail.deal.DISCOUNT.ActualPrice
          );
        }
      } else {
        this.bookingDateState(
          newProps.oldViewDetail.oldViewDetail.deal.DISCOUNT.ActualPrice
        );
      }
    } else {
      // this.bookingDateState(
      //   newProps.oldViewDetail.oldViewDetail.offer.Offer_Basic_Details
      //     .Offer_Min_Price
      // );
    }
  }

  intitalizeQuantity = (flag, limit) => {
    if (flag) {
      if (this.state.quantity <= limit) {
        if (this.state.bookingPrice !== 0) {
          this.setState({
            quantity: this.state.quantity + 1,
            bookingPrice: this.state.bookingPrice + this.state.initialPrice
          });
        } else {
          this.setState({
            quantity: this.state.quantity + 1
          });
        }
      }
    } else {
      if (this.state.quantity > 1) {
        if (this.state.bookingPrice !== 0) {
          this.setState({
            quantity: this.state.quantity - 1,
            bookingPrice: this.state.bookingPrice - this.state.initialPrice
          });
        } else {
          this.setState({
            quantity: this.state.quantity - 1
          });
        }
      }
    }
  };

  bookingDateState = bookingPrice => {
    if (bookingPrice !== 0) {
      this.setState({
        bookingPrice: bookingPrice,
        initialPrice: bookingPrice
      });
    }
  };

  onTimeChange(timeObject) {
    const time =
      timeObject.hour + ":" + timeObject.minute + " " + timeObject.meridiem;

    this.setState({ time: time });
  }

  // Dob Update
  dobHandleChange = (event, data) => {
    this.setState({
      newDate: data.value
    });
  };

  oldBookingComponent = (limit, calendar, currencySymbol, object) => {
    return (
      <div>
        <span
          style={{
            fontSize: "20px",
            marginLeft: "5px",
            color: "rgba(0,0,0,.68)",
            display: this.state.bookingPrice === 0 ? "none" : "inline"
          }}
        >
          {currencySymbol}
        </span>

        <label
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgba(0,0,0,.9)",
            display: this.state.bookingPrice === 0 ? "none" : "inline"
          }}
        >
          {this.state.bookingPrice}
        </label>
        <Divider
          style={{
            display: this.state.bookingPrice === 0 ? "none" : "intital"
          }}
        />

        <div
          style={{
            marginLeft: "24px",
            marginRight: "24px",
            marginBottom: calendar ? "20px" : "none"
          }}
        >
          <label
            style={{
              fontSize: "22px",
              color: "rgba(0,0,0,.6)"
            }}
          >
            Quantity
          </label>

          <Icon
            disabled
            name="minus square outline"
            style={{
              fontSize: "25px",
              marginLeft: "20px"
            }}
            onClick={() => this.intitalizeQuantity(false, limit)}
          />
          <label
            style={{
              fontSize: "22px",
              paddingLeft: "10px",
              paddingRight: "10px"
            }}
          >
            {this.state.quantity}
          </label>
          <Icon
            disabled
            name="plus square outline"
            style={{
              fontSize: "25px"
            }}
            onClick={() => this.intitalizeQuantity(true, limit)}
          />
        </div>

        <div
          style={{
            marginLeft: "24px",
            // marginRight: "24px",
            display: calendar ? "inline" : "none"
          }}
        >
          <label
            style={{
              fontSize: "22px",
              color: "rgba(0,0,0,.6)",
              display: calendar ? "inline" : "none"
            }}
          >
            Date
          </label>

          <span
            style={{
              marginLeft: "60px",
              marginRight: "60px",
              display: calendar
                ? object.Offering === "Event"
                  ? "none"
                  : "inline"
                : "none"
            }}
          >
            <SingleDatePicker
              displayFormat="DD-MM-YYYY"
              date={this.state.date}
              onDateChange={date => this.setState({ date })}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              id="date_input"
            />
          </span>

          <span
            style={{
              marginLeft: "60px",

              display: calendar
                ? object.Offering === "Event"
                  ? "inline"
                  : "none"
                : "none"
            }}
          >
            <Input
              placeholder="Date..."
              value={object.EVENTS.event_date}
              disabled={true}
            />
          </span>
        </div>

        {/* <br style={{ display: calendar ? "inline" : "none" }} />
        <br style={{ display: calendar ? "inline" : "none" }} /> */}

        {/* <div style={{ display: calendar ? "inline" : "none" }}>
          <TimePicker
            time={this.state.time}
            withoutIcon={true}
            timeMode="12"
            timezone="Asia/Kolkata"
            onTimeChange={this.onTimeChange.bind(this)}
          />
        </div> */}
      </div>
    );
  };

  newBookingComponent = (limit, calendar, currencySymbol, object, endDate) => {
    return (
      <div>
        <label
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgba(0,0,0,.9)",
            display: this.state.bookingPrice === 0 ? "none" : "inline"
          }}
        >
          Book Now
        </label>
        <Divider
          style={{
            display: this.state.bookingPrice === 0 ? "none" : "intital"
          }}
        />

        <label
          style={{
            fontSize: "22px",
            color: "rgba(0,0,0,.6)",
            marginLeft: "24px"
          }}
        >
          Date
        </label>

        <span
          style={{
            display: endDate != null ? "-webkit-inline-box" : "none",
            marginLeft: "20px"
          }}
        >
          <DateInput
            name="userDob"
            placeholder="Date"
            value={this.state.newDate}
            iconPosition="left"
            onChange={this.dobHandleChange}
            minDate={this.state.newDate}
            maxDate={endDate}
          />
        </span>

        <span
          style={{
            display: endDate == null ? "-webkit-inline-box" : "none",
            marginLeft: "20px"
          }}
        >
          <DateInput
            name="userDob"
            placeholder="Date"
            value={this.state.newDate}
            iconPosition="left"
            onChange={this.dobHandleChange}
          />
        </span>
      </div>
    );
  };

  bookingLogic = (limit, calendar, currencySymbol, obj, status, endDate) => {
    if (status) {
      return this.newBookingComponent(
        limit,
        calendar,
        currencySymbol,
        obj,
        endDate
      );
    } else {
      return this.oldBookingComponent(limit, calendar, currencySymbol, obj);
    }
  };

  checkoutLogic = (object, status) => {
    let newObject = {};
    if (status) {
      newObject = {
        detailObject: object,
        detailFlag: status
      };
    } else {
      newObject = {
        detailObject: object,
        detailFlag: status,
        detailBookingPrice: this.state.bookingPrice,
        detailQuantity: this.state.quantity
      };
    }

    // Check Session Storage Support by Browser
    if (window.sessionStorage) {
      const auth = sessionStorage.getItem(STORAGE);
      if (auth === null) {
        this.props.history.push("/web/auth", {
          checkoutData: newObject
        });
      } else {
        if (auth === "SUCCESS") {
          this.props.history.push("/web/checkout", {
            checkoutData: newObject
          });
        } else {
          this.props.history.push("/web/auth", {
            checkoutData: newObject
          });
        }
      }
    } else {
      if (this.props.authentication.auth) {
        this.props.history.push("/web/checkout", {
          checkoutData: newObject
        });
      } else {
        this.props.history.push("/web/auth", {
          checkoutData: newObject
        });
      }
    }
  };

  render() {
    let obj = {};
    let hex = 0;
    let calendar = true;
    let limit = 0;
    let status = false;
    let endDate = "";

    if (this.props.detailState.apiCall) {
      if (this.props.detailState.which === "new") {
        if (
          this.props.newViewDetail.newViewDetail === null ||
          this.props.newViewDetail.newViewDetail === undefined
        ) {
          return <div />;
        }

        if (_.isEmpty(this.props.newViewDetail.newViewDetail)) {
          return <div />;
        }

        obj = this.props.newViewDetail.newViewDetail.offers;
        hex = obj.Offer_Basic_Details.Currency_Text.replace(REG_HEX, "$1");

        if (Object.keys(obj.ACTIVITY).length !== 0) {
          endDate = obj.ACTIVITY.Offer_Buy_End_Date;
        } else if (Object.keys(obj.EVENT).length !== 0) {
          endDate = obj.EVENT.Offer_Buy_End_Date;
        } else if (Object.keys(obj.GETAWAY).length !== 0) {
          endDate = obj.GETAWAY.Offer_Buy_End_Date;
        } else if (Object.keys(obj.SALOON).length !== 0) {
          if (obj.Offer_Basic_Details.Offering_Name === "Appointment") {
            endDate = null;
          } else {
            endDate = moment(obj.SALOON.Offer_Buy_End_Date)
              .tz("Asia/Kolkata")
              .format("DD-MM-YYYY");
          }
        } else {
          return;
        }

        status = true;
      } else {
        if (
          this.props.oldViewDetail.oldViewDetail === null ||
          this.props.oldViewDetail.oldViewDetail === undefined
        ) {
          return <div />;
        }

        if (_.isEmpty(this.props.oldViewDetail.oldViewDetail)) {
          return <div />;
        }

        obj = this.props.oldViewDetail.oldViewDetail.deal;
        hex = obj.currency_text.replace(REG_HEX, "$1");

        if (obj.DISCOUNT.ActualPrice !== 0) {
          calendar = false;
        }

        limit = obj.DISCOUNT.OrderLimit;
        console.log(obj);
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        obj = this.props.history.location.state.offerData.data;
        hex = obj.currency_text.replace(REG_HEX, "$1");

        if (obj.DISCOUNT.ActualPrice !== 0) {
          calendar = false;
        }

        limit = obj.DISCOUNT.OrderLimit;
      } else {
        obj = this.props.history.location.state.offerData.data;
        hex = obj.Offer_Basic_Details.Currency_Text.replace(REG_HEX, "$1");

        if (Object.keys(obj.ACTIVITY).length !== 0) {
          endDate = moment(obj.ACTIVITY.Offer_Buy_End_Date)
            .tz("Asia/Kolkata")
            .format("DD-MM-YYYY");
        } else if (Object.keys(obj.EVENT).length !== 0) {
          endDate = moment(obj.EVENT.Offer_Buy_End_Date)
            .tz("Asia/Kolkata")
            .format("DD-MM-YYYY");
        } else if (Object.keys(obj.GETAWAY).length !== 0) {
          endDate = moment(obj.GETAWAY.Offer_Buy_End_Date)
            .tz("Asia/Kolkata")
            .format("DD-MM-YYYY");
        } else if (Object.keys(obj.SALOON).length !== 0) {
          if (obj.Offer_Basic_Details.Offering_Name === "Appointment") {
            endDate = null;
          } else {
            endDate = moment(obj.SALOON.Offer_Buy_End_Date)
              .tz("Asia/Kolkata")
              .format("DD-MM-YYYY");
          }
        } else {
          return;
        }

        status = true;
        console.log(obj);
      }
    }

    const dec = parseInt(hex, 16);

    return (
      <div>
        <Segment style={{ width: "400px" }}>
          {this.bookingLogic(
            limit,
            calendar,
            String.fromCharCode(dec),
            obj,
            status,
            endDate
          )}

          <Button
            style={{
              backgroundColor: "#FF5A5F",
              color: "white",
              opacity: "1",
              width: "320px",
              height: "50px",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "20px",
              marginLeft: "24px",
              marginRight: "24px"
            }}
            onClick={() => this.checkoutLogic(obj, status)}
          >
            Procced
          </Button>
          <p
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: "5px"
            }}
          >
            You won’t be charged yet
          </p>
        </Segment>
      </div>
    );
  }
}
