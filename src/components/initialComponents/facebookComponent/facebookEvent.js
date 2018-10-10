import React from "react";
import _ from "lodash";

import {
  Card,
  Container,
  Image,
  Button,
  Popup
} from "semantic-ui-react/dist/commonjs";

import FacebookLoader from "../../loaderComponents/facebookLoader";

import classes from "./static/css/facebook.css";

// Default Number of Items for View More Button
const MAX_ITEMS = 4;
const MAX_TITLE_LENGTH = 50;

export default class Trending extends React.Component {
  logicClickFacebookEvent(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }

  createFacebookEventCard = (
    index,
    header,
    image,
    content,
    alt,
    targetUrl,
    fullContent
  ) => {
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
            width: "512px",
            height: "180px"
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

          <Popup trigger={<Card.Description>{content} </Card.Description>}>
            {fullContent}
          </Popup>
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
      }

      return this.createFacebookEventCard(
        key,
        obj.b_name,
        obj.img_url,
        content,
        content,
        obj.target_url,
        obj.content
      );
    });
  };

  readFacebookEvent = () => {
    return this.props.facebookEvent.facebookEvent.slice(0, MAX_ITEMS);
  };

  redirectRoute = () => {
    const cityName = this.props.cityName.replace(/ /g, "-").toLowerCase();
    this.props.history.push("/web/" + cityName + "/trending/", {
      cityId: this.props.cityId
    });
  };

  render() {
    if (
      this.props.facebookEvent.facebookEvent === null ||
      this.props.facebookEvent.facebookEvent === undefined
    ) {
      return <FacebookLoader />;
    }

    if (!_.isArray(this.props.facebookEvent.facebookEvent)) {
      return <FacebookLoader />;
    }

    if (_.isEmpty(this.props.facebookEvent.facebookEvent)) {
      return <div />;
    }

    // if (Object.keys(this.props.facebookEvent.facebookEvent).length === 0) {
    //   return <div />;
    // }
    const hide = this.props.facebookEvent.facebookEvent;

    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>TRENDING</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group itemsPerRow={4} doubling stackable>
          {this.logicFacebookEventCard(this.readFacebookEvent())}
        </Card.Group>

        <Button
          onClick={() => this.redirectRoute()}
          disabled={Object.keys(hide).length <= MAX_ITEMS ? true : false}
          size="large"
          basic
          color="black"
          style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            marginLeft: "45%"
          }}
        >
          View More
        </Button>
      </Container>
    );
  }
}
