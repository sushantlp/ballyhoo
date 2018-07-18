import React from "react";

import {
  Card,
  Container,
  Image,
  Button,
  Dimmer,
  Loader
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/facebook.css";

// Default Number of Items for View More Button
const MAX_TITLE_LENGTH = 90;

export default class Trending extends React.Component {
  constructor(props) {
    super(props);
  }

  logicClickFacebookEvent(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }

  createFacebookEventCard = (index, header, image, content, alt, targetUrl) => {
    return (
      <Card
        className={classes.FacebookCard}
        raised
        key={index}
        onClick={this.logicClickFacebookEvent.bind(this, targetUrl)}
      >
        <Image
          src={image}
          alt={alt}
          style={{
            width: "266px",
            height: "159px"
          }}
        />
        <Card.Content>
          <Card.Header
            style={{
              fontWeight: "500",
              color: "#7a52c0"
            }}
          >
            {header}
          </Card.Header>
          <Card.Description>{content}</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  logicFacebookEventCard = filter => {
    let content = undefined;
    return filter.map((obj, key) => {
      content = obj.content;

      if (content !== undefined && content !== "" && content !== null) {
        if (content.length > MAX_TITLE_LENGTH) {
          content = content.substring(0, MAX_TITLE_LENGTH) + "... ";
        }

        return this.createFacebookEventCard(
          key,
          obj.b_name,
          obj.img_url,
          content,
          content,
          obj.target_url
        );
      }
    });
  };

  render() {
    if (
      this.props.facebookEvent === null ||
      this.props.facebookEvent === undefined
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (
      Object.keys(this.props.facebookEvent).length === 0 ||
      Object.keys(this.props.facebookEvent).length === 0
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>FACEBOOK EVENT</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group itemsPerRow={4} doubling stackable>
          {this.logicFacebookEventCard(this.props.facebookEvent )}
        </Card.Group>
      </Container>
    );
  }
}
