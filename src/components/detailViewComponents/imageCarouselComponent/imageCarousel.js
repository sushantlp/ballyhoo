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

  logicCarousel = images => {
    this.createImageArray(images);
    return this.loopCarouselImage(images);
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    let imageData = [];

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
          _.isEmpty(
            this.props.newViewDetail.newViewDetail.offers.Offer_Basic_Details
              .Offer_Venue_Images
          )
        ) {
          return <div />;
        } else {
          imageData = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offer_Venue_Images;
        }
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

        if (_.isEmpty(this.props.oldViewDetail.oldViewDetail.deal.IMAGES)) {
          return <div />;
        } else {
          imageData = this.props.oldViewDetail.oldViewDetail.deal.IMAGES;
        }
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          _.isEmpty(this.props.history.location.state.offerData.data.IMAGES)
        ) {
          return <div />;
        } else {
          imageData = this.props.history.location.state.offerData.data.IMAGES;
        }
      } else {
        if (
          _.isEmpty(
            this.props.history.location.state.offerData.data.Offer_Basic_Details
              .Offer_Venue_Images
          )
        ) {
          return <div />;
        } else {
          imageData = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offer_Venue_Images;
        }
      }
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
          {this.logicCarousel(imageData)}
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
