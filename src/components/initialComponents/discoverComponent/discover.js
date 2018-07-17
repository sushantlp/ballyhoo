import React from "react";

import {
  Card,
  Container,
  Button,
  Dimmer,
  Loader
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/discover.css";

// Default Number of Items for View More Button
const MAX_ITEMS = 4;

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false
    };
  }
  createDiscoverCard = (index, header, image, alt) => {
    return (
      <Card className={classes.DiscoverCard} raised key={index}>
        <div className="ui fluid image">
          <img src={image} alt={alt} />
          <span className={classes.DiscoverHeader}>{header}</span>
        </div>
      </Card>
    );
  };

  logicDiscoverCard = filter => {
    return filter.map((obj, key) => {
      return this.createDiscoverCard(obj.t_id, obj.title, obj.image, obj.title);
    });
  };

  toggle = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };

  getDiscoverFilter = () => {
    if (this.state.isMore) {
      return this.props.discoverFilter;
    }
    return this.props.discoverFilter.slice(0, MAX_ITEMS);
  };

  render() {
    if (
      this.props.discoverFilter === null ||
      this.props.discoverFilter === undefined
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (
      Object.keys(this.props.discoverFilter).length === 0 ||
      Object.keys(this.props.discoverFilter).length === 0
    ) {
      return;
    }

    const { isMore } = this.state;

    return (
      <Container className={classes.DiscoverContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>DISCOVER</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group itemsPerRow={4} doubling stackable>
          {this.logicDiscoverCard(this.getDiscoverFilter())}
        </Card.Group>

        <Button
          onClick={this.toggle}
          size="large"
          basic
          color="violet"
          style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            marginLeft: "45%"
          }}
        >
          {isMore ? "View Less" : "View More"}
        </Button>
      </Container>
    );
  }
}
