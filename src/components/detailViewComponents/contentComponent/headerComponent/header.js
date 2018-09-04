import React from "react";

import { Label, Icon } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/header.css";

export default class Header extends React.Component {
  headerComponent = (rating, offering, businessName) => {
    return (
      <div>
        <Label
          style={{
            float: "right",
            backgroundColor: "#fa4a4d",
            color: "white",
            marginTop: "4px"
          }}
        >
          <Icon name="star" style={{ padding: "0px" }} />
          {rating}
        </Label>

        <h2
          style={{
            fontWeight: "500",
            color: "rgb(122, 82, 192)",
            margin: "0px"
          }}
        >
          {offering}
        </h2>
        <label
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "18px"
          }}
        >
          {businessName}
        </label>
      </div>
    );
  };

  render() {
    let rating = 0;
    let offering = undefined;
    let businessName = undefined;

    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          Number.isInteger(
            this.props.history.location.state.offerData.data.MERCHANT
              .merchant_rating
          )
        ) {
          rating =
            this.props.history.location.state.offerData.data.MERCHANT
              .merchant_rating + ".0";
        } else {
          rating = this.props.history.location.state.offerData.data.MERCHANT
            .merchant_rating;
        }

        offering = this.props.history.location.state.offerData.data
          .offering_title;
        businessName = this.props.history.location.state.offerData.data.MERCHANT
          .Business;
      } else {
        if (
          Number.isInteger(
            this.props.history.location.state.offerData.data.Merchant_Details
              .Merchant_Ratings
          )
        ) {
          rating =
            this.props.history.location.state.offerData.data.Merchant_Details
              .Merchant_Ratings + ".0";
        } else {
          rating = this.props.history.location.state.offerData.data
            .Merchant_Details.Merchant_Ratings;
        }

        offering = this.props.history.location.state.offerData.data
          .Offer_Basic_Details.Offering_Title;
        businessName = this.props.history.location.state.offerData.data
          .Merchant_Details.Merchant_Bname;
      }
    }

    return <div>{this.headerComponent(rating, offering, businessName)} </div>;
  }
}
