import React from "react";
import { Image } from "semantic-ui-react/dist/commonjs";

// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

import classes from "./static/css/airImage.css";

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Image
        src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_1300/v1457670910/ballyhoo/WALK-IN/13.jpg"
        fluid
        style={{
          height: "370px",
          objectFit: "cover"
        }}
      />
    );
  }
}
