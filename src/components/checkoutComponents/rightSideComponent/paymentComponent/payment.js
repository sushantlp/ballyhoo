import React from "react";

import {
  Segment,
  Input,
  Dropdown,
  Button
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/payment.css";

import { PAYMENT_MODE } from "../../../../constants";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoInputFlag: false,
      promoInputDisabled: false,
      promoCode: undefined,
      buttonLoading: false,
      promoApply: false
    };
  }

  componentWillReceiveProps(nextProp) {
    if (
      this.props.promoCode.status !== nextProp.promoCode.status &&
      nextProp.promoCode.status !== "START"
    ) {
      if (nextProp.promoCode.status === "FAIL") {
        this.props.errorMessage(true, nextProp.promoCode.msg);
        this.changeStatePromoInputDisabled(false);
        this.changeStateButtonLoading(false);
      } else {
        this.changeStateButtonLoading(false);
        this.changeStatePromoApply(true);
        if (nextProp.promoCode.promo.hasOwnProperty("discount_value")) {
          if (this.props.parentState.delivery) {
            // Get Delivery Additional Charge
            this.props.getDeliveryAdditionalCharge(
              nextProp.promoCode.promo.pay_price,
              this.props.parentState.key.token
            );
          } else {
            // Get Additional Charge
            this.props.getOtherAdditionalCharge(
              nextProp.promoCode.promo.pay_price,
              this.props.parentState.key.token
            );
          }

          this.props.changeStatePromoValue(
            nextProp.promoCode.promo,
            true,
            "CASH_DISCOUNT"
          );
        } else {
          this.props.changeStatePromoValue(
            nextProp.promoCode.promo,
            true,
            "CASH_BACK"
          );
        }
      }
    }
  }

  changeStatePromoApply = value => {
    this.setState({
      promoApply: value
    });
    return;
  };

  changeStateButtonLoading = value => {
    this.setState({
      buttonLoading: value
    });
    return;
  };

  changeStatePromoInputDisabled = value => {
    this.setState({
      promoInputDisabled: value
    });
    return;
  };

  onClickPromoLabel = () => {
    this.props.updatePromoLabelState();
    this.setState({
      promoInputFlag: true
    });
  };

  onChangePromoInput = (event, data) => {
    if (this.props.parentState.errorMessage) {
      this.props.errorMessage(false, "");
    }

    if (data.value === "") {
      this.setState({
        promoCode: undefined
      });
    } else {
      this.setState({
        promoCode: data.value
      });
    }
  };

  onClickPromoInput = () => {
    if (!this.props.promoInputDisabled) {
      this.changeStatePromoInputDisabled(true);
    }

    if (!this.props.buttonLoading) {
      this.changeStateButtonLoading(true);
    }

    const object = this.props.history.location.state.checkoutData;
    if (object.categoryFlag === "NEW") {
      this.props.verifyPromoCode(
        this.props.parentState.userData.userMobile,
        object.detailObject.offer_id,
        object.detailBookingPrice,
        1,
        this.state.promoCode,
        object.detailObject.offering_id,
        this.props.parentState.key.token
      );
    } else {
      this.props.verifyPromoCode(
        this.props.parentState.userData.userMobile,
        object.detailObject.id,
        object.detailBookingPrice,
        object.detailQuantity,
        this.state.promoCode,
        object.detailObject.Offering_Id,
        this.props.parentState.key.token
      );
    }
  };

  paymentComponent = paymentMode => {
    return (
      <Segment>
        <Dropdown
          style={{ width: "450px", display: "block" }}
          selection
          options={paymentMode}
          onChange={(event, data) => this.props.onChangePayment(event, data)}
          defaultValue={this.props.parentState.paymentOption}
        />

        <label
          style={{
            display: this.props.parentState.promoLabelFlag ? "block" : "none",
            lineHeight: "16px",
            fontSize: "12px",
            paddingTop: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#7a52c0"
          }}
          onClick={() => this.onClickPromoLabel()}
        >
          Add promo code
        </label>

        <div style={{ marginTop: "20px" }}>
          <Input
            style={{
              marginTop: "20px",
              display: this.state.promoInputFlag ? "inline" : "none"
            }}
            disabled={this.state.promoInputDisabled}
            onChange={(event, data) => this.onChangePromoInput(event, data)}
          />
          <Button
            loading={this.state.buttonLoading}
            disabled={
              this.state.promoInputDisabled
                ? true
                : this.state.promoCode === undefined
                  ? true
                  : false
            }
            style={{
              display: this.state.promoInputFlag ? "inline" : "none",
              width: "100px",
              height: "40px",
              marginLeft: "10px",
              backgroundColor: "#7a52c0",
              color: "white"
            }}
            onClick={() => this.onClickPromoInput()}
          >
            Apply
          </Button>

          <label
            style={{
              marginLeft: "10px",
              display: this.state.promoApply ? "inline" : "none",
              color: "#60b246",
              fontSize: "15px"
            }}
          >
            Promo Code Applied !!!
          </label>
        </div>
      </Segment>
    );
  };

  paymentLogic = (payAtVenue, online, wallet) => {
    let paymentMode = PAYMENT_MODE;

    if (!payAtVenue) {
      paymentMode = paymentMode.filter(
        mode => mode.value !== "Online payment" && "Ballyhoo wallet"
      );
    }

    if (!online) {
      paymentMode = paymentMode.filter(
        mode => mode.value !== "Pay at venue" && "Ballyhoo wallet"
      );
    }

    if (!wallet) {
      paymentMode = paymentMode.filter(
        mode => mode.value !== "Pay at venue" && "Online payment"
      );
    }

    return this.paymentComponent(paymentMode);
  };

  render() {
    if (this.props.paymentMode.status === "START") {
      return <div />;
    }

    // Variable
    let payAtVenue = true;
    let online = true;
    let wallet = true;

    if (this.props.paymentMode.status === "SUCCESS") {
      if (this.props.paymentMode.paymentMode.online_payment === 0) {
        online = false;
        wallet = false;
      }

      if (this.props.paymentMode.paymentMode.pay_at_venue === 0) {
        payAtVenue = false;
      }
    }

    return (
      <div>
        <Segment.Group>
          <Segment>
            <label style={{ fontSize: "20px" }}>Payment</label>
          </Segment>

          {this.paymentLogic(payAtVenue, online, wallet)}
        </Segment.Group>
      </div>
    );
  }
}
