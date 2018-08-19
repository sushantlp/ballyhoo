import React from "react";
import _ from "lodash";

import { Container, Card } from "semantic-ui-react/dist/commonjs";

import Lightbox from "lightbox-react";

import classes from "./static/css/imageCarousel.css";

const images = [
  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474443487/merchant/1111110524/1506.jpg"
];

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
      return this.carousel(image, key);
    });
  };

  logicCarousel = () => {
    if (this.props.history.location.state.offerData.api_type === 1) {
      return this.loopCarouselImage(
        this.props.history.location.state.offerData.data.full_img
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

      return this.loopCarouselImage(
        this.props.history.location.state.offerData.data.Offer_Basic_Details
          .Offer_Venue_Images
      );
    }
  };

  render() {
    const { photoIndex, isOpen } = this.state;

    if (this.props.detailState.apiCall) {
    } else {
      return this.logicCarousel();
    }

    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>IMAGES</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group
          itemsPerRow={8}
          onClick={() => this.setState({ isOpen: true })}
        >
          {this.logicCarousel()}
        </Card.Group>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </Container>
    );
  }
}
