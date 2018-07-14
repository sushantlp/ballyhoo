import React from "react";

import {
  Card,
  Container,
  Dimmer,
  Loader
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/category.css";

export default class Category extends React.Component {
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

    if (
      Object.keys(this.props.categoryFilter).length === 0 ||
      Object.keys(this.props.categoryFilter).length === 0
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <Container className={classes.CategoryContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>CATEGORY</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={3} doubling stackable>
          {this.logicCategoryCard(this.props.categoryFilter)}
        </Card.Group>
      </Container>
    );
  }
}
