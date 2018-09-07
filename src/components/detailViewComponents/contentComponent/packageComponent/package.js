import React from "react";
import _ from "lodash";
import moment from "moment-timezone";

import {
  Segment,
  Button,
  Modal,
  Header
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/package.css";

const REG_HEX = /&#x([a-fA-F0-9]+);/;

export default class Package extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      door: false,
      packageList: [],
      priceList: [],
      open: false,
      dimmer: "blurring",
      size: "small",
      currencySymbol: undefined
    };
  }

  show = list => {
    this.setState({
      open: true,
      priceList: list
    });
  };

  close = () => this.setState({ open: false });

  packageModel = currencySymbol => {
    const hex = currencySymbol.replace(REG_HEX, "$1");
    const dec = parseInt(hex, 16);
    const currency = String.fromCharCode(dec);
    return (
      <div>
        <Modal
          dimmer={this.state.dimmer}
          open={this.state.open}
          onClose={this.close}
          size={this.state.size}
        >
          <Modal.Header style={{ textAlign: "center" }}>
            Select your Category
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {this.state.priceList.Package_Price_List.map((priceList, key) => {
                return (
                  <Segment key={key}>
                    <Button
                      size="small"
                      basic
                      color="violet"
                      style={{
                        float: "right"
                      }}
                    >
                      ADD
                    </Button>

                    <h3
                      style={{
                        fontWeight: "500",
                        color: "#ff695e",
                        margin: "0px"
                      }}
                    >
                      {priceList.Price_Caption}
                    </h3>

                    <span
                      style={{
                        color: "rgba(0,0,0,.6)"
                      }}
                    >
                      {currency}
                    </span>

                    <label
                      style={{
                        color: "rgba(0,0,0,.6)"
                      }}
                    >
                      {priceList.Price}
                    </label>

                    <br />

                    <label
                      style={{
                        color: "rgba(0,0,0,.6)",
                        whiteSpace: "pre-line"
                      }}
                    >
                      {priceList.Price_Inclusion}
                    </label>
                  </Segment>
                );
              })}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <label
              style={{
                fontSize: "23px",
                marginRight: "80px"
              }}
            >
              Total
              <span
                style={{
                  fontSize: "23px",
                  marginLeft: "10px"
                }}
              >
                {currency}0
              </span>
            </label>
            <Button
              style={{
                backgroundColor: "rgb(122, 82, 192)",
                color: "white",
                opacity: "1",
                width: "280px",
                height: "56px",
                fontSize: "20px",
                fontWeight: "500",
                marginRight: "180px"
              }}
            >
              Procced
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };

  packageComponent = (offer, key) => {
    return (
      <Segment key={key}>
        <Button
          size="small"
          style={{
            float: "right",
            backgroundColor: "rgb(122, 82, 192)",
            color: "white"
          }}
          onClick={() => this.show(offer)}
        >
          Book
        </Button>

        <h3
          style={{
            fontWeight: "500",
            color: "#ff695e",
            margin: "0px"
          }}
        >
          {offer.Package_Caption}
        </h3>

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
        <span style={{ display: "block", paddingBottom: "3px" }}>
          {stringMonth}
        </span>
        <span style={{ display: "block", paddingBottom: "3px" }}>{week}</span>
        <span style={{ display: "block", paddingBottom: "3px" }}>
          {stringDay}
        </span>
      </Button>
    );
  };

  eventPackageComponent = (inside, packages, key) => {
    return (
      <Segment key={key}>
        <Button
          size="small"
          style={{
            float: "right",
            backgroundColor: "rgb(122, 82, 192)",
            color: "white"
          }}
          onClick={() => this.show(inside)}
        >
          Book
        </Button>

        <h3
          style={{
            fontWeight: "500",
            color: "#ff695e",
            margin: "0px"
          }}
        >
          {inside.Package_Caption}
        </h3>

        <label
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "14px"
          }}
        >
          {moment(packages.Event_Start_Time, ["HH:mm"]).format("h:mm A")}-
          {moment(packages.Event_End_Time, ["HH:mm"]).format("h:mm A")}
        </label>

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
      door: true,
      packageList: packages
    });
  };

  clickEventDate = packages => {
    return packages.Offer_Package_List.map((inside, key) => {
      return this.eventPackageComponent(inside, packages, key);
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

        if (days.toString().length === 1) {
          days = "0" + days;
        }

        if (outside.End_Date !== null) {
          const endDate = moment(outside.End_Date, "YYYY/MM/DD");
          let endDays = endDate.format("D");
          let endMonth = endDate.format("M");
          let endWeek = endDate.day();
          endMonth = parseInt(endMonth, 10);
          endWeek = parseInt(endWeek, 10);

          const endStringMonth = this.getMonth(endMonth);
          const EndStringWeek = this.getWeek(endWeek);

          stringWeek = stringWeek + "-" + EndStringWeek;

          if (endDays.toString().length === 1) {
            endDays = "0" + endDays;
          }

          days = days + "-" + endDays;
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
    const { door, packageList, open, dimmer } = this.state;
    let offer = [];
    let status = false;
    let currencySymbol = undefined;

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
          currencySymbol = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Currency_Text;

          this.currencyState(
            this.props.history.location.state.offerData.data.Offer_Basic_Details
              .Currency_Text
          );
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.EVENT
            .Offer_Date_List;
          currencySymbol = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Currency_Text;
          status = true;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Package_List;
          currencySymbol = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Currency_Text;
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
            currencySymbol = this.props.history.location.state.offerData.data
              .Offer_Basic_Details.Currency_Text;
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
            {door ? this.clickEventDate(packageList) : null}
            {open ? this.packageModel(currencySymbol) : null}
          </Segment>
        </div>
      );
    }
  }
}
