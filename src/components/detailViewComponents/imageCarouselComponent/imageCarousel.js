import React from "react";
import { Container, Card } from "semantic-ui-react/dist/commonjs";

import Lightbox from "lightbox-react";

import classes from "./static/css/imageCarousel.css";

const images = [
  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474443487/merchant/1111110524/1506.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474443487/merchant/1111110524/1508.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474443487/merchant/1111110524/1510.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474443487/merchant/1111110524/1511.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474443487/merchant/1111110524/1512.jpg",
  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474443487/merchant/1111110524/1514.jpg"
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
          <h4 className={classes.HeaderName}>IMAGES</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group
          itemsPerRow={8}
          onClick={() => this.setState({ isOpen: true })}
        >
          <Card raised image={images[0]} style={{ cursor: "pointer" }} />
          <Card raised image={images[1]} style={{ cursor: "pointer" }} />
          <Card raised image={images[2]} style={{ cursor: "pointer" }} />
          <Card raised image={images[3]} style={{ cursor: "pointer" }} />
          <Card raised image={images[4]} style={{ cursor: "pointer" }} />
          <Card raised image={images[5]} style={{ cursor: "pointer" }} />
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
