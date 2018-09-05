import React from "react";
import _ from "lodash";
import moment from "moment-timezone";

import { Label, Segment, Button } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/package.css";

export default class Package extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      package: []
    };
  }
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

  eventDateComponent = (stringDay, week, stringMonth, outside, key) => {
    return (
      <Button
        key={key}
        inverted
        color="red"
        onClick={() => this.clickStateChange(outside)}
      >
        <span style={{ display: "block" }}>{stringDay}</span>
        <span style={{ display: "block" }}>{week}</span>
        <span style={{ display: "block" }}>{stringMonth}</span>
      </Button>
    );
  };

  eventPackageComponent = (inside, key) => {
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

  clickStateChange = packages => {
    this.setState({
      open: true,
      package: packages
    });
  };

  clickEventDate = packages => {
    return packages.Offer_Package_List.map((inside, key) => {
      return this.eventPackageComponent(inside, key);
    });
  };

  // Month
  getMonth = month => {
    let stringMonth = undefined;

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

    return stringMonth;
  };

  // Week
  getWeek = week => {
    let stringWeek = undefined;
    if (week === 1) {
      stringWeek = "Mon";
    } else if (week === 2) {
      stringWeek = "Tue";
    } else if (week === 3) {
      stringWeek = "Wed";
    } else if (week === 4) {
      stringWeek = "Thu";
    } else if (week === 5) {
      stringWeek = "Fri";
    } else if (week === 6) {
      stringWeek = "Sat";
    } else if (week === 7) {
      stringWeek = "Sun";
    }

    return stringWeek;
  };

  logicPackage = (offers, status) => {
    if (status) {
      return offers.map((outside, key) => {
        // Variable
        let stringMonth = undefined;
        let stringWeek = undefined;

        const date = moment(outside.Start_Date, "YYYY/MM/DD");
        let days = date.format("D");
        let month = date.format("M");
        let week = date.day();
        //const year = date.format("YYYY");

        month = parseInt(month, 10);
        week = parseInt(week, 10);

        stringMonth = this.getMonth(month);
        stringWeek = this.getWeek(week);

        if (outside.End_Date !== null) {
        }

        if (days.toString().length === 1) {
          days = "0" + days;
        }

        return this.eventDateComponent(
          stringWeek,
          days,
          stringMonth,
          outside,
          key
        );
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

          <Segment>
            {this.logicPackage(offer, status)}
            {this.state.open ? this.clickEventDate(this.state.package) : null}
          </Segment>
        </div>
      );
    }
  }
}
