import React from "react";
import "react-dates/initialize";
import moment from "moment-timezone";
import _ from "lodash";

import TimePicker from "react-times";

import { SingleDatePicker } from "react-dates";

import {
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/book.css";

const REG_HEX = /&#x([a-fA-F0-9]+);/;

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz("Asia/Kolkata"),
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

  // handleChange = (event, { name, value }) => {
  //   if (this.state.hasOwnProperty(name)) {
  //     this.setState({ [name]: value });
  //   }
  // };

  onTimeChange(timeObject) {
    const time =
      timeObject.hour + ":" + timeObject.minute + " " + timeObject.meridiem;

    this.setState({ time: time });
  }

  bookingComponent = (limit, calendar, currencySymbol, object) => {
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
            marginRight: "24px",
            display: calendar ? "inline" : "none",
            marginBottom: "20px"
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
              display: calendar ? "inline" : "none"
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
        </div>
        <div style={{ display: calendar ? "inline" : "none" }}>
          <TimePicker
            time={this.state.time}
            timeMode="12"
            timezone="Asia/Kolkata"
            onTimeChange={this.onTimeChange.bind(this)}
          />
        </div>
      </div>
    );
  };

  bookingLogic = (limit, calendar, currencySymbol, obj, status) => {
    if (status) {
      return;
    } else {
      return this.bookingComponent(limit, calendar, currencySymbol, obj);
    }
  };
  render() {
    let obj = {};
    let hex = 0;
    let calendar = true;
    let limit = 0;
    let status = false;

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

        if (
          obj.Offering === "Lunch Buffet" ||
          obj.Offering === "Dinner Buffet"
        ) {
          calendar = false;
        }

        limit = obj.DISCOUNT.OrderLimit;
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        obj = this.props.history.location.state.offerData.data;
        hex = obj.currency_text.replace(REG_HEX, "$1");

        if (
          obj.Offering === "Lunch Buffet" ||
          obj.Offering === "Dinner Buffet"
        ) {
          calendar = false;
        }

        limit = obj.DISCOUNT.OrderLimit;
      } else {
        // obj = this.props.history.location.state.offerData.data;
        // hex = obj.Offer_Basic_Details.Currency_Text.replace(REG_HEX, "$1");

        // if (obj.Offer_Basic_Details.Offering_Name === "Activities") {
        //   // calendar = ;
        // }

        // limit = obj.DISCOUNT.OrderLimit;
        console.log(obj);
        status = true;
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
            status
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
