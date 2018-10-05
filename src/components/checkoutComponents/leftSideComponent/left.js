import React from "react";
import _ from "lodash";

import {
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/left.css";

export default class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  firstHalfComponent = merchantBname => {
    return (
      <div>
        <label
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "14px",
            lineHeight: "20px"
          }}
        >
          Your order from
        </label>
        <div>
          <label
            style={{
              fontSize: "22px",
              lineHeight: "26px"
            }}
          >
            {merchantBname}
          </label>
        </div>
        <Button
          style={{
            backgroundColor: "#FF5A5F",
            color: "white",
            opacity: "1",
            width: "320px",
            height: "50px",
            fontSize: "20px",
            fontWeight: "500",
            marginTop: "20px",
            marginLeft: "24px",
            marginRight: "24px"
          }}
        >
          Place Order
        </Button>
      </div>
    );
  };

  secondHalfQuantityComponent = () => {
    return (
      <span
        style={{
          position: "absolute",
          left: "190px"
        }}
      >
        <Icon
          name="minus square outline"
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "18px",
            display: "inline",
            cursor: "pointer"
          }}
        />
        <label
          style={{
            fontSize: "16px",
            paddingLeft: "5px",
            paddingRight: "7px",
            display: "inline"
          }}
        >
          2
        </label>
        <Icon
          name="plus square outline"
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "18px",
            display: "inline",
            cursor: "pointer"
          }}
        />
      </span>
    );
  };

  secondHalfComponent = promoApply => {
    return (
      <div>
        <label
          style={{
            fontSize: "20px"
          }}
        >
          Lunch Buffet
        </label>

        {promoApply ? null : this.secondHalfQuantityComponent()}
        <span
          style={{
            float: "right"
          }}
        >
          <label
            style={{
              fontSize: "20px"
            }}
          >
            $200
          </label>
        </span>
      </div>
    );
  };

  thirdHalfComponent = (Subtotal, currencySymbol) => {
    return (
      <div
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "14px",
          lineHeight: "10px",
          justifyContent: "space-between"
        }}
      >
        <label>Subtotal</label>

        <label
          style={{
            float: "right"
          }}
        >
          {currencySymbol} {Subtotal}
        </label>
      </div>
    );
  };

  fourthHalfPromoCodeDisplay = () => {
    return (
      <div
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "14px",
          lineHeight: "22px",
          justifyContent: "space-between"
        }}
      >
        <label>Promocode</label>

        <label
          style={{
            float: "right"
          }}
        >
          $200
        </label>

        <span
          style={{
            color: "rgba(65,228,13,1)",
            fontSize: "14px",
            float: "right"
          }}
        >
          &#8722;
        </span>
      </div>
    );
  };
  fourthHalfAdditionalCharge = () => {
    return (
      <div
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "14px",
          lineHeight: "22px",
          justifyContent: "space-between"
        }}
      >
        <label>Service Charge</label>

        <label
          style={{
            float: "right"
          }}
        >
          $50
        </label>

        <span
          style={{
            color: "rgba(241,19,58,1)",
            fontSize: "14px",
            float: "right"
          }}
        >
          &#x2b;
        </span>
      </div>
    );
  };

  fourthHalfTotalAmount = () => {
    return (
      <div
        style={{
          fontSize: "14px",
          lineHeight: "10px",
          fontWeight: "bold",
          justifyContent: "space-between",
          paddingTop: "10px"
        }}
      >
        <label>Total</label>

        <label
          style={{
            float: "right"
          }}
        >
          $269
        </label>
      </div>
    );
  };

  fourthHalfComponent = (promoApply, promoType) => {
    return (
      <div>
        {promoApply
          ? promoType === "CASH_DISCOUNT"
            ? this.fourthHalfPromoCodeDisplay()
            : null
          : null}
        {this.fourthHalfAdditionalCharge()}
        <Divider />
        {this.fourthHalfTotalAmount()}
      </div>
    );
  };
  render() {
    let merchantBname = undefined;

    if (this.props.parentState.delivery) {
      if (this.props.deliveryAdditionalCharge.status === "START") {
        return <Segment style={{ width: "400px", height: "400px" }} />;
      }
    } else {
      if (this.props.otherAdditionalCharge.status === "START") {
        return <Segment style={{ width: "400px", height: "400px" }} />;
      }
    }

    console.log(this.props);

    if (this.props.parentState.oldCategory) {
      merchantBname = this.props.history.location.state.checkoutData
        .detailObject.MERCHANT.Business;
    } else {
      merchantBname = this.props.history.location.state.checkoutData
        .detailObject.merchant_bname;
    }

    return (
      <div>
        <Segment style={{ width: "400px" }}>
          {this.firstHalfComponent(merchantBname)}
          <Divider />
          {this.secondHalfComponent(this.props.parentState.promoApply)}
          <Divider />
          {this.thirdHalfComponent(
            this.props.history.location.state.checkoutData.detailBookingPrice,
            this.props.history.location.state.checkoutData.currencySymbol
          )}
          <Divider />
          {this.fourthHalfComponent(
            this.props.parentState.promoApply,
            this.props.parentState.promoType
          )}
        </Segment>
      </div>
    );
  }
}
