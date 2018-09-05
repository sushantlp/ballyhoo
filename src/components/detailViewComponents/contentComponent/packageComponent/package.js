import React from "react";
import _ from "lodash";

import { Label, Segment, Button } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/package.css";

export default class Package extends React.Component {
  packageComponent = (offer, key) => {
    return (
      <Segment key={key}>
        <Label as="a" basic style={{ color: "rgba(0, 0, 0, 0.6)" }}>
          {offer.Package_Caption}
        </Label>
        <Button
          size="small"
          style={{
            float: "right",
            backgroundColor: "rgb(122, 82, 192)",
            color: "white"
          }}
        >
          Book
        </Button>
        <br />
        <br />
        <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
          {offer.Package_Inclusion}
        </label>
      </Segment>
    );
  };

  eventPackageComponent = (outside, inside, key) => {
    return (
      <Segment key={key}>
        <Label as="a" basic style={{ color: "rgba(0, 0, 0, 0.6)" }}>
          {inside.Package_Caption}
        </Label>
        <Button
          size="small"
          style={{
            float: "right",
            backgroundColor: "rgb(122, 82, 192)",
            color: "white"
          }}
        >
          Book
        </Button>
        <br />
        <br />
        <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
          {inside.Package_Inclusion}
        </label>
      </Segment>
    );
  };

  logicPackage = (offers, status) => {
    if (status) {
      return offers.map((outside, key) => {
        return outside.Offer_Package_List.map((inside, key) => {
          return this.eventPackageComponent(outside, inside, key);
        });
      });
    } else {
      return offers.map((offer, key) => {
        return this.packageComponent(offer, key);
      });
    }
  };

  render() {
    let offer = [];
    let status = false;

    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        return <div />;
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.ACTIVITY)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Package_List;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.EVENT
            .Offer_Date_List;
          status = true;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Package_List;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          if (
            this.props.history.location.state.offerData.data.SALOON
              .Offer_Type === 1
          ) {
            offer = this.props.history.location.state.offerData.data.SALOON
              .Offer_Package_List;
          } else {
            return <div />;
          }
        } else {
          return <div />;
        }
      }

      if (offer === "" || offer === undefined || offer === null) {
        return <div />;
      }

      return (
        <div>
          <div className={classes.HeaderContainer}>
            <h4 className={classes.HeaderName}>PACKAGES</h4>
            <div className={classes.UnderScore} />
          </div>

          <Segment>{this.logicPackage(offer, status)}</Segment>
        </div>
      );
    }
  }
}
