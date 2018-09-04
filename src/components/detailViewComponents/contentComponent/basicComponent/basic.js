import React from "react";
import _ from "lodash";

import { Label, Segment, Icon, Image } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/basic.css";

export default class Basic extends React.Component {
  basicComponent = (
    femaleVeg,
    maleNonveg,
    labelName,
    discount,
    discountPrice,
    actualPrice,
    onward,
    remaining,
    popularity,
    eventDate,
    eventDay,
    startTime,
    endTime
  ) => {
    return (
      <div>
        <Label
          as="a"
          basic
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "14px",
            display: "inline",
            lineHeight: "40px"
          }}
        >
          {labelName}
        </Label>

        <Image
          style={{
            display: "inline",
            marginLeft: "10px",
            marginBottom: "2px"
          }}
          src={femaleVeg}
        />
        <Image
          style={{
            display: "inline",
            marginLeft: "5px",
            marginBottom: "2px"
          }}
          src={maleNonveg}
        />

        <Label
          as="a"
          basic
          style={{
            marginLeft: "20px",
            color: "rgba(0,0,0,.6)",
            fontSize: "14px",
            lineHeight: "40px",
            display: remaining === 0 ? "none" : "inline"
          }}
        >
          Popularity :
          <span
            className={classes.Heart}
            style={{
              display: popularity === 0 ? "none" : "intial"
            }}
          >
            <img
              src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_20/v1532419222/ballyhoo/EMAIL/heart.png"
              alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
              style={{
                display: popularity === 0 ? "none" : "intial",
                marginTop: "10px"
              }}
            />
          </span>
          <strong
            className={classes.HeartPercent}
            style={{
              display: popularity === 0 ? "none" : "intial",
              fontSize: "14px"
            }}
          >
            {popularity + "%"}
          </strong>
        </Label>
        <Label
          as="a"
          basic
          style={{
            marginLeft: "20px",
            lineHeight: "40px",
            color: "rgba(0,0,0,.6)",
            fontSize: "14px",

            display: remaining === 0 ? "none" : "inline"
          }}
        >
          Offers-Remaining :
          <strong
            style={{
              fontSize: "14px",
              display: remaining === 0 ? "none" : "inline",
              marginLeft: "5px"
            }}
          >
            {remaining}
          </strong>
        </Label>
        <br />

        <Label
          as="a"
          basic
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "14px",
            lineHeight: "40px",
            display: actualPrice === 0 ? "none" : "inline"
          }}
        >
          Actual-Price :
          <Icon
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginLeft: "10px",
              color: "rgba(0,0,0,.68)",
              display: actualPrice === 0 ? "none" : "intial"
            }}
            name="rupee"
          >
            <label
              style={{
                fontSize: "14px",
                lineHeight: "25px",
                paddingLeft: "1px",
                color: "rgba(0,0,0,.68)",
                display: actualPrice === 0 ? "none" : "intial"
              }}
            >
              {actualPrice}
              <span
                style={{
                  fontSize: "14px",
                  paddingLeft: "2px",
                  color: "rgba(0,0,0,.68)",
                  display: onward === 0 ? "none" : "intial"
                }}
              >
                Onwards
              </span>
            </label>
          </Icon>
        </Label>

        <label
          style={{
            marginLeft: "70px",
            display: onward === 0 ? "none" : "intial"
          }}
        />

        <Label
          as="a"
          basic
          style={{
            marginLeft: "20px",
            fontSize: "14px",
            lineHeight: "40px",
            color: "rgba(0,0,0,.6)",
            display: discountPrice === 0 ? "none" : "inline"
          }}
        >
          Discount :
          <strong
            style={{
              marginLeft: "5px",
              fontSize: "14px",
              color: "rgba(0,0,0,.68)",
              display: discountPrice === 0 ? "none" : "intial"
            }}
          >
            {discount}
          </strong>
        </Label>

        <Label
          as="a"
          basic
          style={{
            marginLeft: "20px",
            fontSize: "14px",
            lineHeight: "40px",
            color: "rgba(0,0,0,.6)",
            display: discountPrice === 0 ? "none" : "inline"
          }}
        >
          Pay-Only :
          <Icon
            name="rupee"
            style={{
              fontSize: "14px",
              marginLeft: "5px",
              textDecoration: "line-through",
              color: "rgba(0,0,0,.68)",
              display: discountPrice === 0 ? "none" : "intial"
            }}
          >
            <span style={{ display: discountPrice === 0 ? "none" : "intial" }}>
              <strong
                style={{
                  textDecoration: "line-through",
                  fontSize: "14px",
                  color: "rgba(0,0,0,.68)"
                }}
              >
                {actualPrice}
              </strong>
            </span>
          </Icon>
          <Icon
            name="rupee"
            style={{
              fontSize: "14px",
              color: "rgba(0,0,0,.68)",
              marginLeft: "5px",
              color: "rgba(0,0,0,.68)",
              display: discountPrice === 0 ? "none" : "intial"
            }}
          >
            <span>
              <strong
                style={{
                  fontSize: "14px",
                  paddingLeft: "1px",
                  display: discountPrice === 0 ? "none" : "intial"
                }}
              >
                {discountPrice}
              </strong>
            </span>
          </Icon>
        </Label>

        <br />

        <Label
          as="a"
          basic
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(0,0,0,.6)",
            display: eventDate === undefined ? "none" : "intial"
          }}
        >
          Event-Date :
          <strong
            style={{
              marginLeft: "5px",
              fontSize: "14px",
              color: "rgba(0,0,0,.68)",
              display: eventDate === undefined ? "none" : "intial"
            }}
          >
            {eventDate}
          </strong>
        </Label>

        <Label
          as="a"
          basic
          style={{
            marginLeft: "5px",
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(0,0,0,.6)",
            display: eventDay === undefined ? "none" : "intial"
          }}
        >
          Event-Day :
          <strong
            style={{
              marginLeft: "5px",
              fontSize: "14px",
              color: "rgba(0,0,0,.68)",
              display: eventDay === undefined ? "none" : "intial"
            }}
          >
            {eventDay}
          </strong>
        </Label>

        <Label
          as="a"
          basic
          style={{
            marginLeft: "5px",
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(0,0,0,.6)",
            display: startTime === undefined ? "none" : "intial"
          }}
        >
          Start-Time :
          <strong
            style={{
              marginLeft: "5px",
              fontSize: "14px",
              color: "rgba(0,0,0,.68)",
              display: startTime === undefined ? "none" : "intial"
            }}
          >
            {startTime}
          </strong>
        </Label>

        <Label
          as="a"
          basic
          style={{
            marginLeft: "5px",
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(0,0,0,.6)",
            display: endTime === undefined ? "none" : "intial"
          }}
        >
          End-Time :
          <strong
            style={{
              marginLeft: "5px",
              fontSize: "14px",
              color: "rgba(0,0,0,.68)",
              display: endTime === undefined ? "none" : "intial"
            }}
          >
            {endTime}
          </strong>
        </Label>
      </div>
    );
  };

  logicBasicComponent = () => {
    if (this.props.history.location.state.offerData.api_type === 1) {
      let femaleVeg = undefined;
      let maleNonveg = undefined;
      let labelName = undefined;
      let discount = 0;
      let discountPrice = 0;
      let onward = 0;
      let eventDate = undefined;
      let eventDay = undefined;
      let startTime = undefined;
      let endTime = undefined;

      if (
        this.props.history.location.state.offerData.data.DISCOUNT.Type ===
        "flat"
      ) {
        discount = parseInt(
          this.props.history.location.state.offerData.data.DISCOUNT.Value,
          10
        );
        if (
          this.props.history.location.state.offerData.data.DISCOUNT
            .ActualPrice !== 0 &&
          discount !== 0
        ) {
          discountPrice =
            (this.props.history.location.state.offerData.data.DISCOUNT
              .ActualPrice *
              discount) /
            100;
          discountPrice = _.round(
            this.props.history.location.state.offerData.data.DISCOUNT
              .ActualPrice - discountPrice
          );
          discount = discount + "%" + " OFF";
        } else if (discount !== 0) {
          discount = discount + "%" + " OFF";
        }
      } else if (
        this.props.history.location.state.offerData.data.DISCOUNT.Type ===
        "combo1,1"
      ) {
        discount = "1 + 1";
      } else {
        discount = "2 + 1";
      }

      if (
        this.props.history.location.state.offerData.data.Offering !== "Event"
      ) {
        if (
          this.props.history.location.state.offerData.data.foodpreference ===
          "veg"
        ) {
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg";
        } else if (
          this.props.history.location.state.offerData.data.foodpreference ===
          "nonveg"
        ) {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png";
        } else {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png";
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg";
        }

        labelName = "Food-Type :";
      } else {
        if (
          this.props.history.location.state.offerData.data.EVENTS
            .gender_preference === 1
        ) {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_24,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
        } else if (
          this.props.history.location.state.offerData.data.EVENTS
            .gender_preference === 2
        ) {
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_24,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
        } else {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_24,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_24,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
        }

        labelName = "Gender :";
        eventDate = this.props.history.location.state.offerData.data.EVENTS
          .event_date;
        eventDay = this.props.history.location.state.offerData.data.EVENTS
          .event_day;
        startTime = this.props.history.location.state.offerData.data.EVENTS
          .event_start_time;
        endTime = this.props.history.location.state.offerData.data.EVENTS
          .event_end_time;
      }

      return this.basicComponent(
        femaleVeg,
        maleNonveg,
        labelName,
        discount,
        discountPrice,
        this.props.history.location.state.offerData.data.DISCOUNT.ActualPrice,
        onward,
        this.props.history.location.state.offerData.data.DISCOUNT.OrderLimit,
        this.props.history.location.state.offerData.data.Popularity,
        eventDate,
        eventDay,
        startTime,
        endTime
      );
    } else {
    }
  };

  render() {
    if (this.props.detailState.apiCall) {
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>BASIC</h4>
          <div className={classes.UnderScore} />
        </div>

        <Segment>{this.logicBasicComponent()}</Segment>
      </div>
    );
  }
}
