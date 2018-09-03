import React from "react";
import _ from "lodash";

import { Container, Card } from "semantic-ui-react/dist/commonjs";

import Lightbox from "lightbox-react";

import classes from "./static/css/menuCarousel.css";

let globalMenuArray = [];

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
      return this.carousel(image.Menu_Url, key);
    });
  };

  createImageArray = images => {
    let imageArray = [];
    images.map(image => {
      imageArray.push(image.Menu_Url);
    });

    globalMenuArray = imageArray;
  };

  logicCarousel = menuData => {
    this.createImageArray(menuData);
    return this.loopCarouselImage(menuData);
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    let menuData = [];

    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          _.isEmpty(this.props.history.location.state.offerData.data.MENU_PIC)
        ) {
          return <div />;
        } else {
          menuData = this.props.history.location.state.offerData.data.MENU_PIC;
        }
      } else {
        return <div />;
      }
    }

    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>MENUS</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group
          itemsPerRow={8}
          doubling
          stackable
          onClick={() => this.setState({ isOpen: true })}
        >
          {this.logicCarousel(menuData)}
        </Card.Group>
        {isOpen && (
          <Lightbox
            mainSrc={globalMenuArray[photoIndex]}
            nextSrc={globalMenuArray[(photoIndex + 1) % globalMenuArray.length]}
            prevSrc={
              globalMenuArray[
                (photoIndex + globalMenuArray.length - 1) %
                  globalMenuArray.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + globalMenuArray.length - 1) %
                  globalMenuArray.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % globalMenuArray.length
              })
            }
          />
        )}
      </Container>
    );
  }
}
