import React from "react";
import _ from "lodash";
import moment from "moment-timezone";

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
        // Variable
        const date = moment(outside.Start_Date, "YYYY/MM/DD");
        let month = date.format("M");
        let day = date.format("D");
        const year = date.format("YYYY");
        let stringMonth = undefined;
        month = parseInt(month, 10);

        if (month === 1) {
          stringMonth = "Jan";
        } else if (month === 2) {
          stringMonth = "Feb";
        } else if (month === 3) {
          stringMonth = "Mar";
        } else if (month === 4) {
          stringMonth = "Apr";
        } else if (month === 5) {
          stringMonth = "May";
        } else if (month === 6) {
          stringMonth = "Jun";
        } else if (month === 7) {
          stringMonth = "Jul";
        } else if (month === 8) {
          stringMonth = "Aug";
        } else if (month === 9) {
          stringMonth = "Sep";
        } else if (month === 10) {
          stringMonth = "Oct";
        } else if (month === 11) {
          stringMonth = "Nov";
        } else if (month === 12) {
          stringMonth = "Dec";
        }

        // if (obj.EVENT.Offer_Date_List.length > 1) {
        //   if (day.toString().length === 1) {
        //     day = "0" + day;
        //   }
        //   calendar = stringMonth + " " + day;
        // } else {
        //   if (day.toString().length === 1) {
        //     day = "0" + day;
        //   }
        //   calendar = stringMonth + " " + day;
        // }

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
