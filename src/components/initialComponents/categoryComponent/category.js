import React from "react";

import {
  Card,
  Container,
  Dimmer,
  Loader,
  Button
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/category.css";

// Default Number of Items for View More Button
const MAX_ITEMS = 9;

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false
    };
  }

  createCategoryCard = (index, header, image, alt) => {
    return (
      <Card className={classes.CategoryCard} raised key={index}>
        <div className="ui fluid image">
          <img src={image} alt={alt} />
          <span className={classes.CategoryHeader}>{header}</span>
        </div>
      </Card>
    );
  };

  logicCategoryCard = filter => {
    return filter.map((obj, key) => {
      return this.createCategoryCard(key, obj.title, obj.image, obj.title);
    });
  };

  toggle = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };

  getCategoryFilter = () => {
    if (this.state.isMore) {
      return this.props.categoryFilter;
    }
    return this.props.categoryFilter.slice(0, MAX_ITEMS);
  };

  render() {
    if (
      this.props.categoryFilter === null ||
      this.props.categoryFilter === undefined
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (Object.keys(this.props.categoryFilter).length === 0) {
      return <div />;
    }

    const { isMore } = this.state;

    return (
      <Container className={classes.CategoryContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>COLLECTION</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={3} doubling stackable>
          {this.logicCategoryCard(this.getCategoryFilter())}
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
