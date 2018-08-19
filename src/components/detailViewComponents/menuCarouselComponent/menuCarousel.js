import React from "react";
import { Container, Card, Segment } from "semantic-ui-react/dist/commonjs";

import Lightbox from "lightbox-react";

import classes from "./static/css/menuCarousel.css";

const images = [
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1518178439/ballyhoo/MENU_IMAGES/1111110004_1.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1518178466/ballyhoo/MENU_IMAGES/1111110004_2.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1518178546/ballyhoo/MENU_IMAGES/1111110004_3.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1518178692/ballyhoo/MENU_IMAGES/1111110004_4.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369028/ballyhoo/MENU_IMAGES/1111110004_5.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369029/ballyhoo/MENU_IMAGES/1111110004_6.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369030/ballyhoo/MENU_IMAGES/1111110004_7.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369030/ballyhoo/MENU_IMAGES/1111110004_8.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369031/ballyhoo/MENU_IMAGES/1111110004_9.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369032/ballyhoo/MENU_IMAGES/1111110004_10.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369033/ballyhoo/MENU_IMAGES/1111110004_11.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369034/ballyhoo/MENU_IMAGES/1111110004_12.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369035/ballyhoo/MENU_IMAGES/1111110004_13.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369036/ballyhoo/MENU_IMAGES/1111110004_14.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/v1533369037/ballyhoo/MENU_IMAGES/1111110004_15.jpg"
];

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

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
          onClick={() => this.setState({ isOpen: true })}
        >
          <Card raised image={images[0]} style={{ cursor: "pointer" }} />
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
