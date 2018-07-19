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
  createLocalityGrid = (localityId, localityName) => {
    return (
      <Grid.Column
        key={localityId}
        style={{
          marginTop: "0.5rem",
          marginBottom: "0.5rem"
        }}
      >
        <Label
          as="a"
          basic
          style={{ color: "rgba(101, 96, 96, 0.87)" }}
          className={classes.Label}
        >
          {localityName}
        </Label>
      </Grid.Column>
    );
  };

  logicPopularCard = filter => {
    return filter.map(obj => {
      return this.createLocalityGrid(obj.locality_id, obj.locality);
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
