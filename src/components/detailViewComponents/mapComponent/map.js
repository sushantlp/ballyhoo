import React from "react";
import { Container, Segment } from "semantic-ui-react/dist/commonjs";

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import classes from "./static/css/map.css";

export default class Map extends React.Component {
  render() {
    let latitude = 0;
    let longitude = 0;
    let address = "";

    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        latitude = this.props.history.location.state.offerData.data
          .MERCHANT_LOCATION.latitude;
        longitude = this.props.history.location.state.offerData.data
          .MERCHANT_LOCATION.longitude;
        address = this.props.history.location.state.offerData.data.MERCHANT
          .Address;
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.ACTIVITY)
            .length !== 0
        ) {
          address =
            this.props.history.location.state.offerData.data.ACTIVITY
              .Offer_Address +
            " " +
            this.props.history.location.state.offerData.data.ACTIVITY
              .Offer_Address_Locality +
            ", " +
            this.props.history.location.state.offerData.data.ACTIVITY
              .Offer_Address_City;
          latitude = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Location_Lat;
          longitude = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Location_Long;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          address =
            this.props.history.location.state.offerData.data.EVENT
              .Offer_Address +
            " " +
            this.props.history.location.state.offerData.data.EVENT
              .Offer_Address_Locality +
            ", " +
            this.props.history.location.state.offerData.data.EVENT
              .Offer_Address_City;
          latitude = this.props.history.location.state.offerData.data.EVENT
            .Offer_Location_Lat;
          longitude = this.props.history.location.state.offerData.data.EVENT
            .Offer_Location_Long;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          address =
            this.props.history.location.state.offerData.data.GETAWAY
              .Offer_Address +
            " " +
            this.props.history.location.state.offerData.data.GETAWAY
              .Offer_Address_Locality +
            ", " +
            this.props.history.location.state.offerData.data.GETAWAY
              .Offer_Address_City;
          latitude = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Location_Lat;
          longitude = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Location_Long;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          address =
            this.props.history.location.state.offerData.data.Merchant_Details
              .Merchant_Address +
            " " +
            this.props.history.location.state.offerData.data.Merchant_Details
              .Offer_Address_Locality +
            ", " +
            this.props.history.location.state.offerData.data.Merchant_Details
              .Offer_Address_City;
          latitude = this.props.history.location.state.offerData.data
            .Merchant_Details.Merchant_Latitude;
          longitude = this.props.history.location.state.offerData.data
            .Merchant_Details.Merchant_Longitude;
        } else {
          return <div />;
        }
      }
    }

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={13}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    ));
    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>WHERE?</h4>
          <div className={classes.UnderScore} />
        </div>

        <label style={{ color: "rgba(0,0,0,.6)" }}>{address}</label>

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
