import React from "react";
import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/note.css";

export default class Note extends React.Component {
  render() {
    let note = "";
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
          this.props.newViewDetail.newViewDetail.offers.Offer_Basic_Details
            .Offer_Note === null ||
          this.props.newViewDetail.newViewDetail.offers.Offer_Basic_Details
            .Offer_Note === ""
        ) {
          return <div />;
        } else {
          note = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offer_Note;
        }
      } else {
        if (
          this.props.oldViewDetail.oldViewDetail.deal.NOTE === null ||
          this.props.oldViewDetail.oldViewDetail.deal.NOTE === ""
        ) {
          return <div />;
        } else {
          note = this.props.oldViewDetail.oldViewDetail.deal.NOTE;
        }
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          this.props.history.location.state.offerData.data.NOTE === null ||
          this.props.history.location.state.offerData.data.NOTE === ""
        ) {
          return <div />;
        } else {
          note = this.props.history.location.state.offerData.data.NOTE;
        }
      } else {
        if (
          this.props.history.location.state.offerData.data.Offer_Basic_Details
            .Offer_Note === null ||
          this.props.history.location.state.offerData.data.Offer_Basic_Details
            .Offer_Note === ""
        ) {
          return <div />;
        } else {
          note = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offer_Note;
        }
      }
    }

    if (note === "" || note === undefined || note === null) {
      return <div />;
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>NOTES</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
            {note}
          </label>
        </Segment>
      </div>
    );
  }
}
