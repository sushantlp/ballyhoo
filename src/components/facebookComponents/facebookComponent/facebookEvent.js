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
const MAX_TITLE_LENGTH = 50;

export default class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      disabled: false,
      cityId: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.facebookSeo) {
      this.setState({
        cityId: nextProps.history.location.state.cityId
      });
    } else {
      if (
        Object.keys(nextProps.cityLocality).length !== 0 &&
        Object.keys(nextProps.facebookEvent.facebookEvent).length === 0
      ) {
        this.findCity(nextProps, this.props.match.params.city);
      }
    }
  }

  componentDidUpdate(nextProps, nextSate) {
    if (nextProps.facebookEvent.skip !== this.props.facebookEvent.skip) {
      this.loadingStop();
      return false;
    } else if (nextProps.facebookEvent.end !== this.props.facebookEvent.end) {
      this.loadingStop();
      this.disabledButon();
      return false;
    }
  }

  findCity = (props, cityParam) => {
    for (let i = 0; i < props.cityLocality.city.length; i++) {
      if (
        cityParam
          .replace(/-/g, " ")
          .replace(/ /g, "")
          .toLowerCase() ===
        props.cityLocality.city[i].c_text.replace(/ /g, "").toLowerCase()
      ) {
        this.setState(
          {
            cityId: props.cityLocality.city[i].c_key
          },
          function() {
            this.props.parentLoadFacebookEvent(this.state.cityId, 0);
          }
        );
        break;
      }
    }
  };

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

        return this.createFacebookEventCard(
          key,
          obj.b_name,
          obj.img_url,
          content,
          content,
          obj.target_url,
          obj.content
        );
      }
    });
  };

  loadingStart = () => {
    this.setState({
      loading: true
    });

    this.props.parentLoadFacebookEvent(
      this.state.cityId,
      this.props.facebookEvent.skip
    );
  };

  loadingStop = () => {
    this.setState({
      loading: false
    });
  };

  disabledButon = () => {
    this.setState({
      disabled: true
    });
  };

  render() {
    const { loading, disabled } = this.state;
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

    return (
      <Container className={classes.FacebookContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>TRENDING</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group itemsPerRow={4} doubling stackable>
          {this.logicFacebookEventCard(this.props.facebookEvent.facebookEvent)}
        </Card.Group>

        <Button
          size="large"
          color="violet"
          loading={loading}
          disabled={disabled}
          onClick={() => this.loadingStart()}
          style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            marginLeft: "45%"
          }}
        >
          Load More
        </Button>
      </Container>
    );
  }
}
