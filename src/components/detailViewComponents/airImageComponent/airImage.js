import React from "react";
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

  callLogic = () => {
    if (this.props.history.location.state.offerData.api_type === 1) {
      return this.airbnbImage(
        this.props.history.location.state.offerData.data.full_img
      );
    } else {
      return this.airbnbImage(
        this.props.history.location.state.offerData.data.Offer_Basic_Details
          .Offer_Image_Full
      );
    }
  };
  render() {
    if (this.props.detailState.apiCall) {
    } else {
      return this.callLogic();
    }
  }
}
