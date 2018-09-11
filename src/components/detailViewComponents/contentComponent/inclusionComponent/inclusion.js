import React from "react";
import _ from "lodash";

import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/inclusion.css";

export default class Inclusion extends React.Component {
  render() {
    let inclusion = "";
    if (this.props.detailState.apiCall) {
      if (this.props.detailState.which === "new") {
        if (
          this.props.newViewDetail.newViewDetail === null ||
          this.props.newViewDetail.newViewDetail === undefined
        ) {
          return <div />;
        }

        if (_.isEmpty(this.props.newViewDetail.newViewDetail)) {
          return <div />;
        }

        if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.ACTIVITY)
            .length !== 0
        ) {
          inclusion = this.props.newViewDetail.newViewDetail.offers.ACTIVITY
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.EVENT)
            .length !== 0
        ) {
          inclusion = this.props.newViewDetail.newViewDetail.offers.EVENT
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.GETAWAY)
            .length !== 0
        ) {
          inclusion = this.props.newViewDetail.newViewDetail.offers.GETAWAY
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.SALOON)
            .length !== 0
        ) {
          inclusion = this.props.newViewDetail.newViewDetail.offers.SALOON
            .Offer_Synopsis;
        } else {
          return <div />;
        }
      } else {
        if (
          this.props.oldViewDetail.oldViewDetail === null ||
          this.props.oldViewDetail.oldViewDetail === undefined
        ) {
          return <div />;
        }

        if (_.isEmpty(this.props.oldViewDetail.oldViewDetail)) {
          return <div />;
        }

        if (
          this.props.oldViewDetail.oldViewDetail.deal.Inclusion === null ||
          this.props.oldViewDetail.oldViewDetail.deal.Inclusion === ""
        ) {
          return <div />;
        } else {
          inclusion = this.props.oldViewDetail.oldViewDetail.deal.Inclusion;
        }
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          this.props.history.location.state.offerData.data.Inclusion === null ||
          this.props.history.location.state.offerData.data.Inclusion === ""
        ) {
          return <div />;
        } else {
          inclusion = this.props.history.location.state.offerData.data
            .Inclusion;
        }
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.ACTIVITY)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.EVENT
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Synopsis;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          inclusion = this.props.history.location.state.offerData.data.SALOON
            .Offer_Synopsis;
        } else {
          return <div />;
        }
      }
    }

    if (inclusion === "" || inclusion === undefined || inclusion === null) {
      return <div />;
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>INCLUSIONS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
            {inclusion}
          </label>
        </Segment>
      </div>
    );
  }
}
