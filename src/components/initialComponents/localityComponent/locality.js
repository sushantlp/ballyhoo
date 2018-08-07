import React from "react";

import {
  Segment,
  Container,
  Grid,
  Label,
  Dimmer,
  Loader
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/locality.css";

export default class Discover extends React.Component {
  createLocalityGrid = (localityId, localityName, obj) => {
    return (
      <Label
        key={localityId}
        onClick={() => this.clickLocalityIndex(obj)}
        as="a"
        basic
        style={{
          color: "rgba(101, 96, 96, 0.87)",
          marginLeft: "0.5rem",
          marginBottom: "0.5rem"
        }}
        className={classes.Label}
      >
        {localityName}
      </Label>
    );
  };

  clickLocalityIndex = object => {
    let newObject = {};
    const localityUrl = object.locality.replace(/ /g, "-").toLowerCase();
    const cityUrl = this.props.cityName.replace(/ /g, "-").toLowerCase();

    newObject.flag = 3;
    newObject.api_type = 1;
    newObject.city_id = this.props.cityId;
    newObject.locality_id = object.locality_id;

    this.props.history.push("/web");
    this.props.history.push(
      "/web/" + cityUrl + "/" + localityUrl + "/popular-location",
      {
        offerData: newObject
      }
    );
  };

  logicPopularCard = filter => {
    return filter.map(obj => {
      return this.createLocalityGrid(obj.locality_id, obj.locality, obj);
    });
  };

  render() {
    if (
      this.props.popularLocality === null ||
      this.props.popularLocality === undefined
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (Object.keys(this.props.popularLocality).length === 0) {
      return <div />;
    }

    return (
      <Container className={classes.LocalityContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>LOCALITY</h4>
          <div className={classes.UnderScore} />
        </div>

        <Segment raised>
          <Grid doubling stackable columns={9}>
            <Grid.Row>
              {this.logicPopularCard(this.props.popularLocality)}
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}
