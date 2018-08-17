import React from "react";
import { Image } from "semantic-ui-react/dist/commonjs";

// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

import classes from "./static/css/airImage.css";

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Image
        src="https://cdn-imgix.headout.com/tour/15628/TOUR-IMAGE/5d3e7c9c-0de0-4636-aaac-405defddf764-8789-budapest-danube-bend-tour-02.jpg?auto=compress&fm=pjpg&w=1200&h=400&crop=faces&fit=min"
        fluid
      />
    );
  }
}
