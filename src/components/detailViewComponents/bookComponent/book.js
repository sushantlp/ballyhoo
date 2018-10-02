import React from "react";
// import "react-dates/initialize";
import moment from "moment-timezone";
import _ from "lodash";

import SweetAlert from "sweetalert2-react";
import { DateInput } from "semantic-ui-calendar-react";


// import { SingleDatePicker } from "react-dates";

import {
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react/dist/commonjs";

import { REG_HEX, STORAGE } from "../../../constants.js";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
        .tz("Asia/Kolkata")
        .format("DD-MM-YYYY"),
      minDate: moment()
        .tz("Asia/Kolkata")
        .format("DD-MM-YYYY"),

      time: moment().format("HH:mm A"),
      focused: false,
      quantity: 1,
      bookingPrice: 0,
      initialPrice: 0,
      alert: false,
      tempDate: moment()
        .tz("Asia/Kolkata")
        .format("DD-MM-YYYY")
    };
    this.props.updateBookingDate(this.state.date);
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
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState || this.props !== nextProps) {
      return true;
    } else {
      return false;
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
    }
  }

  intitalizeCartQuantity = (priceId, available, quantity, bool) => {
    const copyBookingDetail = this.props.detailState.bookingDetail;

    for (let i = 0; i < copyBookingDetail.packageList.length; i++) {
      for (
        let j = 0;
        j < copyBookingDetail.packageList[i].priceList.length;
        j++
      ) {
        if (
          priceId === copyBookingDetail.packageList[i].priceList[j].price_id
        ) {
          if (bool) {
            if (quantity < available) {
              copyBookingDetail.packageList[i].priceList[j].quantity =
                copyBookingDetail.packageList[i].priceList[j].quantity + 1;
            }
          } else {
            if (quantity === 1) {
              copyBookingDetail.packageList[i].priceList.splice(j, 1);
            } else {
              copyBookingDetail.packageList[i].priceList[j].quantity =
                copyBookingDetail.packageList[i].priceList[j].quantity - 1;
            }
          }
        }
      }
    }

    this.props.updateBookingDetail(copyBookingDetail);
  };

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

  // Old Date Update
  oldDateHandleChange = (event, data, object, status) => {
    if (status) {
      // if (Object.keys(object.ACTIVITY).length !== 0) {
      const bookingStatus = this.checkBookingDetailLength(
        this.props.detailState.bookingDetail
      );

      if (bookingStatus) {
        this.setState({
          date: data.value
        });

        this.props.updateBookingDate(data.value);
      } else {
        this.setState({
          alert: true,
          tempDate: data.value
        });
      }
      // } else {
      //   this.setState({
      //     date: data.value
      //   });

      //   this.props.updateBookingDate(data.value);
      // }
    } else {
      this.setState({
        date: data.value
      });

      this.props.updateBookingDate(data.value);
    }
  };

  updateActivityDate = status => {
    if (status) {
      this.setState({
        date: this.state.tempDate,
        alert: false
      });

      this.props.updateBookingDate(this.state.tempDate);
      this.props.updateBookingDetail({});
    } else {
      this.setState({
        alert: false
      });
    }
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

        <label
          style={{
            fontSize: "22px",
            marginLeft: "24px",
            color: "rgba(0,0,0,.6)",
            display: calendar ? "inline" : "none"
          }}
        >
          Date
        </label>

        <span
          style={{
            marginLeft: "50px",
            display: calendar
              ? object.Offering === "Event"
                ? "none"
                : "-webkit-inline-box"
              : "none"
          }}
        >
          <DateInput
            name="userDob"
            placeholder="Date"
            value={this.state.date}
            iconPosition="left"
            onChange={(event, data) =>
              this.oldDateHandleChange(event, data, object, false)
            }
          />
        </span>

        <span
          style={{
            marginLeft: "50px",
            display: calendar
              ? object.Offering === "Event"
                ? "-webkit-inline-box"
                : "none"
              : "none"
          }}
        >
          <DateInput
            disabled={true}
            name="userDob"
            placeholder="Date"
            value={object.EVENTS.event_date}
            iconPosition="left"
            onChange={(event, data) =>
              this.oldDateHandleChange(event, data, object, false)
            }
          />
        </span>

     
      </div>
    );
  };

  newBookingComponent = (object, endDate) => {
    return (
      <div>
        <label
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgba(0,0,0,.9)"
          }}
        >
          Book Now
        </label>
        <Divider />

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
            value={this.state.date}
            iconPosition="left"
            onChange={(event, data) =>
              this.oldDateHandleChange(event, data, object, true)
            }
            minDate={this.state.minDate}
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
            value={this.state.date}
            iconPosition="left"
            onChange={(event, data) =>
              this.oldDateHandleChange(event, data, object, true)
            }
          />
        </span>
      </div>
    );
  };

  bookingLogic = (limit, calendar, currencySymbol, obj, status, endDate) => {
    if (status) {
      return this.newBookingComponent(obj, endDate);
    } else {
      return this.oldBookingComponent(limit, calendar, currencySymbol, obj);
    }
  };

  checkoutLogic = (object, status) => {
    let newObject = {};
    if (status) {
      newObject = {
        detailObject: this.props.detailState.bookingDetail,
        categoryFlag: "NEW",
        detailBookingPrice: this.calculateFinalAmount(
          this.props.detailState.bookingDetail
        )
      };
    } else {
      newObject = {
        detailObject: object,
        categoryFlag: "OLD",
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

  cartItemDisplay = (packages, currencySymbol, key) => {
    return (
      <div key={key}>
        <h3
          style={{
            fontWeight: "500",
            color: "rgb(122, 82, 192)",
            margin: "0px",
            display: packages.priceList.length > 0 ? "inline" : "none"
          }}
        >
          {packages.package_caption}
        </h3>

        {packages.priceList.map((price, key) => {
          let totalAmount = 0;
          if (price.quantity === 1) {
            totalAmount = price.price;
          } else {
            totalAmount = price.quantity * price.price;
          }

          return (
            <Segment key={key} style={{ marginBottom: "10px" }}>
              <span
                style={{
                  display: "inline",
                  float: "right"
                }}
              >
                <Icon
                  name="minus square outline"
                  style={{
                    color: "rgb(43, 0, 119)",
                    fontSize: "18px",
                    display: "inline",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    this.intitalizeCartQuantity(
                      price.price_id,
                      price.available,
                      price.quantity,
                      false
                    )
                  }
                />
                <label
                  style={{
                    fontSize: "16px",
                    paddingLeft: "5px",
                    paddingRight: "7px",
                    display: "inline"
                  }}
                >
                  {price.quantity}
                </label>
                <Icon
                  name="plus square outline"
                  style={{
                    color: "rgb(43, 0, 119)",
                    fontSize: "18px",
                    display: "inline",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    this.intitalizeCartQuantity(
                      price.price_id,
                      price.available,
                      price.quantity,
                      true
                    )
                  }
                />
              </span>

              <h4
                style={{
                  fontWeight: "500",
                  color: "#ff695e",
                  display: "inline"
                }}
              >
                {price.price_caption}
              </h4>

              <span
                style={{
                  position: "absolute",
                  left: "150px"
                }}
              >
                <label
                  style={{
                    color: "rgba(0,0,0,.6)",
                    fontSize: "16px"
                  }}
                >
                  {currencySymbol}
                </label>

                <label
                  style={{
                    color: "rgba(0,0,0,.6)",
                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                >
                  {totalAmount}
                </label>
              </span>
              <div />
              <span
                style={{
                  color: "rgba(0,0,0,.6)",
                  fontSize: "11px"
                }}
              >
                {currencySymbol}
              </span>

              <label
                style={{
                  color: "rgba(0,0,0,.6)",
                  fontSize: "11px"
                }}
              >
                {price.price} per head
              </label>
            </Segment>
          );
        })}
      </div>
    );
  };

  cartItemLogic = item => {
    return item.packageList.map((packages, key) => {
      if (packages.priceList.length > 0) {
        return this.cartItemDisplay(packages, item.currency_symbol, key);
      }
    });
  };

  calculateFinalAmount = item => {
    let finalAmount = 0;
    item.packageList.map((packages, key) => {
      packages.priceList.map((price, key) => {
        finalAmount = price.price * price.quantity + finalAmount;
      });
    });

    return finalAmount;
  };

  checkBookingDetailLength = item => {
    if (item.hasOwnProperty("packageList")) {
      for (let i = 0; i < item.packageList.length; i++) {
        if (item.packageList[i].priceList.length > 0) {
          return false;
        }
      }

      return true;
    } else {
      return true;
    }
  };
  render() {
    let obj = {};
    let hex = 0;
    let calendar = true;
    let limit = 0;
    let status = false;
    let endDate = "";
    let finalAmount = 0;

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
      }
    }

    const dec = parseInt(hex, 16);

    const bookingStatus = this.checkBookingDetailLength(
      this.props.detailState.bookingDetail
    );

    if (!bookingStatus) {
      finalAmount = this.calculateFinalAmount(
        this.props.detailState.bookingDetail
      );
    }
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

          <Divider style={{ display: finalAmount === 0 ? "none" : "block" }} />
          {bookingStatus
            ? null
            : this.cartItemLogic(this.props.detailState.bookingDetail)}

          <Divider style={{ display: finalAmount === 0 ? "none" : "block" }} />
          <label
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "20px",
              fontWeight: "bold",
              display: finalAmount === 0 ? "none" : "inline"
            }}
          >
            Total :
          </label>

          <span
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "22px",
              marginLeft: "10px",
              fontWeight: "bold",
              display: finalAmount === 0 ? "none" : "inline"
            }}
          >
            {String.fromCharCode(dec)}
          </span>

          <label
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "22px",
              fontWeight: "bold",
              display: finalAmount === 0 ? "none" : "inline"
            }}
          >
            {finalAmount}
          </label>

          <Divider style={{ display: finalAmount === 0 ? "none" : "block" }} />
          <Button
            disabled={status ? bookingStatus : false}
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

        {this.state.alert ? (
          <SweetAlert
            show={true}
            title="Ballyhoo"
            imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
            text="They are still items in your cart. changing date will be clear your cart."
            showCancelButton
            onConfirm={() => this.updateActivityDate(true)}
            onCancel={() => this.updateActivityDate(false)}
            onClose={() => this.updateActivityDate(false)}
          />
        ) : null}
      </div>
    );
  }
}
