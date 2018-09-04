import React from "react";

import { Label, Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/business.css";

export default class Business extends React.Component {
  businessHour = (hour, key) => {
    return (
      <Label
        key={key}
        as="a"
        basic
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "15px"
        }}
      >
        {hour.Business_Hour + " - " + hour.From_Time + " - " + hour.To_Time}
      </Label>
    );
  };

  loopBusinessHour = hours => {
    return hours.map((hour, key) => {
      return this.businessHour(hour, key);
    });
  };

  render() {
    let businessHour = [];

    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        businessHour = this.props.history.location.state.offerData.data
          .BUSINESS_HOUR;
      } else {
        businessHour = this.props.history.location.state.offerData.data
          .Merchant_Details.Merchant_Business_Hours;
      }
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>BUSINESS HOUR</h4>
          <div className={classes.UnderScore} />
        </div>

        <Segment>{this.loopBusinessHour(businessHour)}</Segment>
      </div>
    );
  }
}
