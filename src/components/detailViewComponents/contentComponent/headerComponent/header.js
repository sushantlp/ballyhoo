import React from "react";
import _ from "lodash";

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

        if (
          Number.isInteger(
            this.props.newViewDetail.newViewDetail.offers.Merchant_Details
              .Merchant_Ratings
          )
        ) {
          rating =
            this.props.newViewDetail.newViewDetail.offers.Merchant_Details
              .Merchant_Ratings + ".0";
        } else {
          rating = this.props.newViewDetail.newViewDetail.offers
            .Merchant_Details.Merchant_Ratings;
        }

        offering = this.props.newViewDetail.newViewDetail.offers
          .Offer_Basic_Details.Offering_Title;
        businessName = this.props.newViewDetail.newViewDetail.offers
          .Merchant_Details.Merchant_Bname;
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

        if (
          Number.isInteger(
            this.props.oldViewDetail.oldViewDetail.deal.MERCHANT.merchant_rating
          )
        ) {
          rating =
            this.props.oldViewDetail.oldViewDetail.deal.MERCHANT
              .merchant_rating + ".0";
        } else {
          rating = this.props.oldViewDetail.oldViewDetail.deal.MERCHANT
            .merchant_rating;
        }

        offering = this.props.oldViewDetail.oldViewDetail.deal.offering_title;
        businessName = this.props.oldViewDetail.oldViewDetail.deal.MERCHANT
          .Business;
      }
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
