import React from "react";
import moment from "moment-timezone";
import _ from "lodash";
import "react-dates/initialize";

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
      focused: false,
      quantity: 1,
      bookingPrice: 0
    };
  }

  componentWillMount() {
    console.log("Mount");
    console.log(this.props);
    // this.bookingDateState();
  }

  componentWillReceiveProps() {
    console.log("Receive");
    console.log(this.props);
  }

  intitalizeQuantity = (flag, limit) => {
    if (flag) {
      if (this.state.quantity <= limit) {
        this.setState({
          quantity: this.state.quantity + 1
        });
      }
    } else {
      if (this.state.quantity > 1) {
        this.setState({
          quantity: this.state.quantity - 1
        });
      }
    }
  };

  bookingDateState = bookingPrice => {
    if (bookingPrice !== 0) {
      this.setState({
        bookingPrice: bookingPrice
      });
    }
  };

  bookingComponent = (
    limit,
    calendar,
    currencySymbol,
    bookingPrice,
    object
  ) => {
    return (
      <div>
        <span
          style={{
            fontSize: "20px",
            marginLeft: "5px",
            color: "rgba(0,0,0,.68)",
            display: bookingPrice === 0 ? "none" : "inline"
          }}
        >
          {currencySymbol}
        </span>

        <label
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "rgba(0,0,0,.9)",
            display: bookingPrice === 0 ? "none" : "inline"
          }}
        >
          {bookingPrice}
        </label>
        <Divider style={{ display: bookingPrice === 0 ? "none" : "intital" }} />
        <div
          style={{
            marginLeft: "24px",
            marginRight: "24px"
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
            marginTop: "20px",
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
      </div>
    );
  };

  bookingLogic = (limit, calendar, currencySymbol, bookingPrice, obj) => {
    return this.bookingComponent(
      limit,
      calendar,
      currencySymbol,
      bookingPrice,
      obj
    );
  };
  render() {
    let bookingPrice = 0;
    let obj = {};
    let hex = 0;
    let calendar = true;
    let limit = 0;

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
      }
    } else {
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
            bookingPrice =
              (this.props.history.location.state.offerData.data.DISCOUNT
                .ActualPrice *
                discount) /
              100;
            bookingPrice = _.round(
              this.props.history.location.state.offerData.data.DISCOUNT
                .ActualPrice - bookingPrice
            );
          } else {
            bookingPrice = this.props.history.location.state.offerData.data
              .DISCOUNT.ActualPrice;
          }
        } else {
          bookingPrice = this.props.history.location.state.offerData.data
            .DISCOUNT.ActualPrice;
        }

        obj = this.props.history.location.state.offerData.data;
        hex = this.props.history.location.state.offerData.data.currency_text.replace(
          REG_HEX,
          "$1"
        );

        if (
          obj.Offering === "Lunch Buffet" ||
          obj.Offering === "Dinner Buffet"
        ) {
          calendar = false;
        }

        limit = obj.DISCOUNT.OrderLimit;
      } else {
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
            bookingPrice,
            obj
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
