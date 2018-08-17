import React from "react";
import { Container, Segment } from "semantic-ui-react/dist/commonjs";

import { withGoogleMap, GoogleMap } from "react-google-maps";

import classes from "./static/css/map.css";

export default class Map extends React.Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      />
    ));
    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>WHERE?</h4>
          <div className={classes.UnderScore} />
        </div>

        <label style={{ color: "rgba(0,0,0,.6)" }}>
          Las Vegas Motor Speedway, 7000 Las Vegas Blvd N., Las Vegas
        </label>

        <Segment>
          <GoogleMapExample
            containerElement={
              <div style={{ height: `400px`, width: "auto" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Segment>
      </Container>
    );
  }
}
