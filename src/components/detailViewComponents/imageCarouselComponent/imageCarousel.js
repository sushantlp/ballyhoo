import React from "react";
import _ from "lodash";

import { Container, Card } from "semantic-ui-react/dist/commonjs";

import Lightbox from "lightbox-react";

import classes from "./static/css/imageCarousel.css";

let globalImageArray = [];

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  carousel = (image, key) => {
    return (
      <Card raised image={image} style={{ cursor: "pointer" }} key={key} />
    );
  };

  loopCarouselImage = images => {
    return images.map((image, key) => {
      return this.carousel(image.Image_Url, key);
    });
  };

  createImageArray = images => {
    let imageArray = [];
    images.map(image => {
      imageArray.push(image.Image_Url);
    });

    globalImageArray = imageArray;
  };

  logicCarousel = () => {
    if (this.props.history.location.state.offerData.api_type === 1) {
      if (_.isEmpty(this.props.history.location.state.offerData.data.IMAGES)) {
        return <div />;
      }

      this.createImageArray(
        this.props.history.location.state.offerData.data.IMAGES
      );

      return this.loopCarouselImage(
        this.props.history.location.state.offerData.data.IMAGES
      );
    } else {
      if (
        _.isEmpty(
          this.props.history.location.state.offerData.data.Offer_Basic_Details
            .Offer_Venue_Images
        )
      ) {
        return <div />;
      }

      this.createImageArray(
        this.props.history.location.state.offerData.data.Offer_Basic_Details
          .Offer_Venue_Images
      );

      return this.loopCarouselImage(
        this.props.history.location.state.offerData.data.Offer_Basic_Details
          .Offer_Venue_Images
      );
    }
  };

  logicCreateImageArray = () => {
    if (this.props.history.location.state.offerData.api_type === 1) {
      if (_.isEmpty(this.props.history.location.state.offerData.data.IMAGES)) {
        return [];
      }

      return this.createImageArray(
        this.props.history.location.state.offerData.data.IMAGES
      );
    } else {
      if (
        _.isEmpty(
          this.props.history.location.state.offerData.data.Offer_Basic_Details
            .Offer_Venue_Images
        )
      ) {
        return [];
      }

      return this.createImageArray(
        this.props.history.location.state.offerData.data.Offer_Basic_Details
          .Offer_Venue_Images
      );
    }
  };

  render() {
    const { photoIndex, isOpen } = this.state;

    if (this.props.detailState.apiCall) {
    }

    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>IMAGES</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group
          itemsPerRow={8}
          doubling
          stackable
          onClick={() => this.setState({ isOpen: true })}
        >
          {this.logicCarousel()}
          {this.logicCreateImageArray()}
        </Card.Group>
        {isOpen && (
          <Lightbox
            mainSrc={globalImageArray[photoIndex]}
            nextSrc={
              globalImageArray[(photoIndex + 1) % globalImageArray.length]
            }
            prevSrc={
              globalImageArray[
                (photoIndex + globalImageArray.length - 1) %
                  globalImageArray.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + globalImageArray.length - 1) %
                  globalImageArray.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % globalImageArray.length
              })
            }
          />
        )}
      </Container>
    );
  }
}
