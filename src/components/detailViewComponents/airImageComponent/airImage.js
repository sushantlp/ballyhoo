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

  callLogic = image => {
    return this.airbnbImage(image);
  };
  render() {
    console.log(this.props);
    if (this.props.detailState.apiCall) {
      console.log("HI");
    } else {
      console.log("HEllo");
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
