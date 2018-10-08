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
          updateTime={this.props.updateTime}
        />

        <LocationComponent
          parentState={this.props.parentState}
          history={this.props.history}
        />

        <PaymentComponent
          parentState={this.props.parentState}
          history={this.props.history}
          paymentMode={this.props.paymentMode}
          onChangePayment={this.props.onChangePayment}
          updatePromoLabelState={this.props.updatePromoLabelState}
          errorMessage={this.props.errorMessage}
          promoCode={this.props.promoCode}
          verifyPromoCode={this.props.verifyPromoCode}
          getDeliveryAdditionalCharge={this.props.getDeliveryAdditionalCharge}
          getOtherAdditionalCharge={this.props.getOtherAdditionalCharge}
          changeStatePromoValue={this.props.changeStatePromoValue}
        />
      </div>
    );
  }
}
