import React from "react";
import _ from "lodash";

import { Image } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/airImage.css";

export default class ImageSlider extends React.Component {
  // Back History
  airbnbImage = image => {
    return (
      <Image
        src={image}
        fluid
        style={{
          height: "370px",
          objectFit: "cover"
        }}
      />
    );
  };

  callLogic = image => {
    return this.airbnbImage(image);
  };
  render() {
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

        return this.callLogic(
          this.props.newViewDetail.newViewDetail.offers.Offer_Basic_Details
            .Offer_Image_Full
        );
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

        return this.callLogic(
          this.props.oldViewDetail.oldViewDetail.deal.full_img
        );
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        return this.callLogic(
          this.props.history.location.state.offerData.data.full_img
        );
      } else {
        return this.callLogic(
          this.props.history.location.state.offerData.data.Offer_Basic_Details
            .Offer_Image_Full
        );
      }
    }
  }
}
