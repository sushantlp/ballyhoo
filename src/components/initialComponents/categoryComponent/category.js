import React from "react";
import _ from "lodash";

import { Card, Container, Button } from "semantic-ui-react/dist/commonjs";

import CategoryLoader from "../../loaderComponents/categoryLoader";

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

  createCategoryCard = (index, header, image, alt, obj) => {
    return (
      <Card
        className={classes.CategoryCard}
        raised
        key={index}
        onClick={() => this.clickCollectionIndex(obj)}
        // onClick={this.clickCollectionIndex.bind(this, obj)}
      >
        <div className="ui fluid image">
          <img src={image} alt={alt} />
          <span className={classes.CategoryHeader}>{header}</span>
        </div>
      </Card>
    );
  };

  clickCollectionIndex = object => {
    if (
      this.props.match.params.hasOwnProperty("city") &&
      this.props.match.params.hasOwnProperty("locality")
    ) {
      let newObject = {};

      const url = object.title.replace(/ /g, "-").toLowerCase();

      const city = this.props.readCityIndex(
        this.props.match.params.city,
        this.props.cityLocality
      );

      newObject.flag = 1;
      newObject.city_id = city.c_key;
      newObject.api_type = object.Api_Type;
      newObject.status = object.status;
      newObject.offering_id = object.o_id;
      newObject.category_id = object.c_id;
      newObject.hashtag_id = object.h_id;
      newObject.key = object.key;
      newObject.filter = object.filter;
      newObject.scr_id = object.scr_id;

      if (object.status === 4) {
        const locality1 = this.props.readLocalityIndex(
          object.title,
          this.props.cityLocality
        );
        this.props.history.push(locality1.l_text + "/collection/" + url, {
          offerData: newObject
        });
      } else {
        const locality2 = this.props.readLocalityIndex(
          this.props.match.params.locality,
          this.props.cityLocality
        );

        newObject.locality_id = locality2.l_key;

        this.props.history.push(
          this.props.match.params.locality + "/collection/" + url,
          {
            offerData: newObject
          }
        );
      }
    }
  };

  logicCategoryCard = filter => {
    return filter.map((obj, key) => {
      return this.createCategoryCard(key, obj.title, obj.image, obj.title, obj);
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
      return <CategoryLoader />;
    }

    if (!_.isArray(this.props.categoryFilter)) {
      return <CategoryLoader />;
    }

    if (_.isEmpty(this.props.categoryFilter)) {
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
          disabled={
            Object.keys(this.props.categoryFilter).length < MAX_ITEMS
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
