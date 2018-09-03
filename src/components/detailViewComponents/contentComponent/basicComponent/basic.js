import React from "react";

import {
  Label,
  Segment,
  Icon,
  Grid,
  Image
} from "semantic-ui-react/dist/commonjs";

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
        <Grid>
          <Grid.Row>
            <Grid.Column width={12} style={{ marginBottom: "8px" }}>
              <label
                style={{
                  color: "rgba(0,0,0,.6)",
                  fontSize: "18px",
                  display: "inline"
                }}
              >
                {labelName}
              </label>

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
            </Grid.Column>

            <Grid.Column width={12} style={{ marginBottom: "8px" }}>
              <label
                style={{
                  color: "rgba(0,0,0,.6)",
                  fontSize: "18px",
                  display: remaining === 0 ? "none" : "inline"
                }}
              >
                Popularity :
              </label>

              <span
                className={classes.Heart}
                style={{
                  display: popularity === 0 ? "none" : "intial"
                }}
              >
                <img
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_20/v1532419222/ballyhoo/EMAIL/heart.png"
                  alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
                />
              </span>

              <label className={classes.HeartPercent}>{popularity + "%"}</label>
            </Grid.Column>

            <Grid.Column width={12} style={{ marginBottom: "8px" }}>
              <label
                style={{
                  color: "rgba(0,0,0,.6)",
                  fontSize: "18px",
                  display: actualPrice === 0 ? "none" : "inline"
                }}
              >
                Actual-Price :
              </label>

              <Icon
                style={{
                  fontSize: "18px",
                  lineHeight: "25px",
                  marginLeft: "10px",
                  color: "rgba(0,0,0,.68)",
                  display: actualPrice === 0 ? "none" : "intial"
                }}
                name="rupee"
              >
                <label
                  style={{
                    fontSize: "18px",
                    lineHeight: "25px",
                    paddingLeft: "1px",
                    color: "rgba(0,0,0,.68)",
                    display: actualPrice === 0 ? "none" : "intial"
                  }}
                >
                  {actualPrice}
                  <span
                    style={{
                      fontSize: "16px",
                      paddingLeft: "2px",
                      color: "rgba(0,0,0,.68)",
                      display: onward === 0 ? "none" : "intial"
                    }}
                  >
                    Onwards
                  </span>
                </label>
              </Icon>
            </Grid.Column>

            <Grid.Column
              width={12}
              style={{
                marginBottom: "8px",
                display: discountPrice === 0 ? "none" : "intial"
              }}
            >
              <label
                style={{
                  color: "rgba(0,0,0,.6)",
                  fontSize: "18px",
                  display: "inline",
                  display: discountPrice === 0 ? "none" : "intial"
                }}
              >
                Pay-Only :
              </label>

              <Icon
                name="rupee"
                style={{
                  marginLeft: "10px",
                  fontSize: "18px",
                  textDecoration: "line-through",
                  color: "rgba(0,0,0,.68)",
                  display: discountPrice === 0 ? "none" : "intial"
                }}
              >
                <span
                  style={{ display: discountPrice === 0 ? "none" : "intial" }}
                >
                  <label
                    style={{
                      textDecoration: "line-through",
                      fontSize: "18px",
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
                  fontSize: "18px",
                  color: "rgba(0,0,0,.68)",
                  marginLeft: "30px",
                  color: "rgba(0,0,0,.68)",
                  display: discountPrice === 0 ? "none" : "intial"
                }}
              >
                <span>
                  <label
                    style={{
                      fontSize: "18px",
                      paddingLeft: "1px",
                      display: discountPrice === 0 ? "none" : "intial"
                    }}
                  >
                    {discountPrice}
                  </label>
                </span>
              </Icon>

              <Label
                as="a"
                basic
                style={{
                  marginLeft: "35px",
                  fontSize: "12px",
                  color: "rgba(0,0,0,.68)",
                  display: discountPrice === 0 ? "none" : "intial"
                }}
              >
                {discount}
              </Label>
            </Grid.Column>

            <Grid.Column width={12} style={{ marginBottom: "8px" }}>
              <label
                style={{
                  color: "rgba(0,0,0,.6)",
                  fontSize: "18px",
                  display: remaining === 0 ? "none" : "inline"
                }}
              >
                Offers-Remaining :
              </label>

              <label
                style={{
                  color: "rgba(0,0,0,.68)",
                  fontSize: "18px",
                  display: remaining === 0 ? "none" : "inline",
                  marginLeft: "10px"
                }}
              >
                {remaining}
              </label>
            </Grid.Column>  
          </Grid.Row>
        </Grid>
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
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
        } else if (
          this.props.history.location.state.offerData.data.EVENTS
            .gender_preference === 2
        ) {
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
        } else {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
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
