import React from "react";
import { Image } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/airImage.css";

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Image
        src={this.props.history.location.state.offerData.data.full_img}
        fluid
        style={{
          height: "370px",
          objectFit: "cover"
        }}
      />
    );
  }
}
