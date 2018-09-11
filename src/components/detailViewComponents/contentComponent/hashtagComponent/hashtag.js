import React from "react";
import _ from "lodash";

import { Label, Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/hashtag.css";

export default class Hashtag extends React.Component {
  Hashtag = (tag, key) => {
    return (
      <Label
        key={key}
        as="a"
        basic
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "14px",
          marginBottom: "3px"
        }}
      >
        {tag}
      </Label>
    );
  };

  loopHashtag = tags => {
    return tags.map((tag, key) => {
      return this.Hashtag(tag, key);
    });
  };

  render() {
    let hashtag = [];

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
          _.isEmpty(
            this.props.newViewDetail.newViewDetail.offers.Merchant_Details
              .Merchant_Hash_Tags
          )
        ) {
          return <div />;
        } else {
          hashtag = this.props.newViewDetail.newViewDetail.offers
            .Merchant_Details.Merchant_Hash_Tags;
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

        if (_.isEmpty(this.props.oldViewDetail.oldViewDetail.deal.TAGS)) {
          return <div />;
        } else {
          hashtag = this.props.oldViewDetail.oldViewDetail.deal.TAGS;
        }
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (_.isEmpty(this.props.history.location.state.offerData.data.TAGS)) {
          return <div />;
        } else {
          hashtag = this.props.history.location.state.offerData.data.TAGS;
        }
      } else {
        if (
          _.isEmpty(
            this.props.history.location.state.offerData.data.Merchant_Details
              .Merchant_Hash_Tags
          )
        ) {
          return <div />;
        } else {
          hashtag = this.props.history.location.state.offerData.data
            .Merchant_Details.Merchant_Hash_Tags;
        }
      }
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>HASHTAG</h4>
          <div className={classes.UnderScore} />
        </div>

        <Segment>{this.loopHashtag(hashtag)}</Segment>
      </div>
    );
  }
}
