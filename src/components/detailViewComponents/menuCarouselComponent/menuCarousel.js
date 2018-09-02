import React from "react";
import { Container, Card, Segment } from "semantic-ui-react/dist/commonjs";

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

  logicCreateMenuArray = () => {
    if (this.props.history.location.state.offerData.api_type === 1) {
      if (
        _.isEmpty(this.props.history.location.state.offerData.data.MENU_PIC)
      ) {
        return [];
      }

      return this.createImageArray(
        this.props.history.location.state.offerData.data.MENU_PIC
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
          {this.logicCarousel()}
          {this.logicCreateMenuArray()}
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
