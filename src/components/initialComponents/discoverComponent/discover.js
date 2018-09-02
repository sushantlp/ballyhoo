import React from "react";
import _ from "lodash";

import { Card, Container, Button } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/discover.css";
import DiscoverLoader from "../../loaderComponents/discoverLoader";

// Default Number of Items for View More Button
const MAX_ITEMS = 4;

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false
    };
  }
  createDiscoverCard = (index, header, image, alt, obj) => {
    return (
      <Card
        className={classes.DiscoverCard}
        raised
        key={index}
        onClick={() => this.clickDiscoverIndex(obj)}
      >
        <div className="ui fluid image">
          <img src={image} alt={alt} />
          <span className={classes.DiscoverHeader}>{header}</span>
        </div>
      </Card>
    );
  };

  clickDiscoverIndex = object => {
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

      newObject.flag = 2;
      newObject.city_id = city.c_key;
      newObject.api_type = object.api_type;
      newObject.status = object.status;
      newObject.tab_id = object.t_id;
      newObject.offering_id = object.o_id;
      newObject.category_id = object.c_id;
      newObject.key = object.t_id;

      const locality2 = this.props.readLocalityIndex(
        this.props.match.params.locality,
        this.props.cityLocality
      );

      newObject.locality_id = locality2.l_key;

      this.props.history.push(
        this.props.match.params.locality + "/discover/" + url,
        {
          offerData: newObject
        }
      );
    }
  };

  logicDiscoverCard = filter => {
    return filter.map((obj, key) => {
      return this.createDiscoverCard(
        obj.t_id,
        obj.title,
        obj.image,
        obj.title,
        obj
      );
    });
  };

  toggle = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };

  readDiscoverFilter = () => {
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
      return <DiscoverLoader />;
    }

    if (!_.isArray(this.props.discoverFilter)) {
      return <DiscoverLoader />;
    }

    if (_.isEmpty(this.props.discoverFilter)) {
      return <div />;
    }

    const { isMore } = this.state;

    return (
      <Container className={classes.DiscoverContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>DISCOVER</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group itemsPerRow={4} doubling stackable>
          {this.logicDiscoverCard(this.readDiscoverFilter())}
        </Card.Group>

        <Button
          onClick={this.toggle}
          disabled={
            Object.keys(this.props.discoverFilter).length < MAX_ITEMS
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
