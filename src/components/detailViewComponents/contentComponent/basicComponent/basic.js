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
    popularity
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
        </Label>

        <span
          className={classes.Heart}
          style={{
            display: popularity === 0 ? "none" : "intial"
          }}
        >
          <img
            src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_22/v1532419222/ballyhoo/EMAIL/heart.png"
            alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
            style={{
              display: popularity === 0 ? "none" : "intial",
              marginTop: "10px"
            }}
          />
        </span>

        <label
          className={classes.HeartPercent}
          style={{
            display: popularity === 0 ? "none" : "intial",
            fontSize: "14px"
          }}
        >
          {popularity + "%"}
        </label>

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
        </Label>
        <label
          style={{
            color: "rgba(0,0,0,.68)",
            fontSize: "14px",
            display: remaining === 0 ? "none" : "inline",
            marginLeft: "10px"
          }}
        >
          {remaining}
        </label>

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
        </Label>

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
          Pay-Only :
        </Label>

        <Icon
          name="rupee"
          style={{
            fontSize: "14px",
            marginLeft: "10px",
            textDecoration: "line-through",
            color: "rgba(0,0,0,.68)",
            display: discountPrice === 0 ? "none" : "intial"
          }}
        >
          <span style={{ display: discountPrice === 0 ? "none" : "intial" }}>
            <label
              style={{
                textDecoration: "line-through",
                fontSize: "14px",
                color: "rgba(0,0,0,.68)"
              }}
            >
              {actualPrice}
            </label>
          </span>
        </Icon>

        <Icon
          name="rupee"
          style={{
            fontSize: "14px",
            color: "rgba(0,0,0,.68)",
            marginLeft: "20px",
            color: "rgba(0,0,0,.68)",
            display: discountPrice === 0 ? "none" : "intial"
          }}
        >
          <span>
            <label
              style={{
                fontSize: "14px",
                paddingLeft: "1px",
                display: discountPrice === 0 ? "none" : "intial"
              }}
            >
              {discountPrice}
            </label>
          </span>
        </Icon>

        <label
          style={{
            marginLeft: "20px",
            fontSize: "14px",
            color: "rgba(0,0,0,.68)",
            display: discountPrice === 0 ? "none" : "intial"
          }}
        >
          {discount}
        </label>
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
        10
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
