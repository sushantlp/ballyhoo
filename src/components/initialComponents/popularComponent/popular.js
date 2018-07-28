import React from "react";

import {
  Card,
  Container,
  Image,
  Button,
  Dimmer,
  Loader
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/popular.css";

// Default Number of Items for View More Button
const MAX_ITEMS = 4;

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false
    };
  }

  createPopularCard = (key, catgory, bname, address, image, alt, object) => {
    return (
      <Card className={classes.TrendingCard} raised key={key}>
        <Image src={image} alt={alt} />
        <Card.Content>
          <Card.Header
            style={{
              fontWeight: "500",
              color: "#7a52c0"
            }}
          >
            {catgory}
          </Card.Header>
          <Card.Meta>
            <span
              style={{
                color: "#F79F6D"
              }}
            >
              {bname}
            </span>
          </Card.Meta>
          <Card.Description>{address}</Card.Description>
        </Card.Content>
      </Card>
    );
  };

  logicPopularCard = filter => {
    return filter.map((obj, key) => {
      return this.createPopularCard(
        key,
        obj.category,
        obj.bname,
        obj.address,
        obj.image_path,
        obj.description,
        obj.api_type,
        obj
      );
    });
  };

  toggle = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };

  readPopularFilter = () => {
    if (this.state.isMore) {
      return this.props.popularFilter;
    }
    return this.props.popularFilter.slice(0, MAX_ITEMS);
  };

  render() {
    if (
      this.props.popularFilter === null ||
      this.props.popularFilter === undefined
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (Object.keys(this.props.popularFilter).length === 0) {
      return <div />;
    }
    const { isMore } = this.state;

    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>MOST POPULAR</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={4} doubling stackable>
          {this.logicPopularCard(this.readPopularFilter())}
        </Card.Group>

        <Button
          onClick={this.toggle}
          disabled={
            Object.keys(this.props.popularFilter).length < MAX_ITEMS
              ? true
              : false
          }
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
