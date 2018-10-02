import React from "react";

import TimeComponent from "./timeComponent/time";
import PaymentComponent from "./paymentComponent/payment";
import LocationComponent from "./locationComponent/location";

export default class Right extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TimeComponent
          parentState={this.props.parentState}
          history={this.props.history}
        />
        <br />
        <LocationComponent
          parentState={this.props.parentState}
          history={this.props.history}
        />
        <br />
        <PaymentComponent
          parentState={this.props.parentState}
          history={this.props.history}
          paymentMode={this.props.paymentMode}
        />
      </div>
    );
  }
}
