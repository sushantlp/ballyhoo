import React from "react";

import Sticky from "react-stickynode";
import Left from "./leftSideComponent/left";
import Right from "./rightSideComponent/right";
import Header from "../header/header";
import Footer from "../footer/footer";
import Message from "../authComponents/messageComponent/message";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

import { USER_DATA, BALLY_KEY } from "../../constants.js";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: false,
      oldCategory: false,
      newCategory: false,
      paymentOption: "Online payment",
      errorMessage: false,
      errorText: "",
      key: {},
      userData: {},
      promoLabelFlag: true,
      promoDiscountValue: {},
      promoApply: false,
      promoType: ""
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    if (this.props.history.location.state !== undefined) {
      const object = this.props.location.state.checkoutData;

      // Get Session Storage Data
      const userData = sessionStorage.getItem(USER_DATA);
      const key = sessionStorage.getItem(BALLY_KEY);

      if (object.categoryFlag === "OLD") {
        if (object.detailObject.Offering === "Delivery Only") {
          this.setState({
            delivery: true,
            oldCategory: true,
            key: JSON.parse(key),
            userData: JSON.parse(userData)
          });

          // Get Delivery Additional Charge
          this.props.getDeliveryAdditionalCharge(
            object.detailBookingPrice,
            this.state.key.token
          );
        } else {
          this.setState({
            oldCategory: true,
            key: JSON.parse(key),
            userData: JSON.parse(userData)
          });

          // Get Additional Charge
          this.props.getOtherAdditionalCharge(
            object.detailBookingPrice,
            this.state.key.token
          );
        }

        // Check Payment Mode Active
        this.props.getPaymentMode(
          object.detailObject.MERCHANT.Contact,
          this.state.key.token
        );
      } else {
        this.setState({
          newCategory: true,
          key: JSON.parse(key),
          userData: JSON.parse(userData)
        });

        // Get Additional Charge
        this.props.getOtherAdditionalCharge(
          object.detailBookingPrice,
          this.state.key.token
        );

        // Check Payment Mode Active
        this.props.getPaymentMode(
          object.detailObject.merchant_mobile,
          this.state.key.token
        );
      }
    } else {
      this.props.history.push("/web");
    }
  }

  onChangePayment = (event, data) => {
    if (data.value === "Online payment") {
      console.log("Online");
      this.setState({
        paymentOption: data.value,
        promoLabelFlag: true
      });
    } else {
      console.log("Wallet");
      this.setState({
        paymentOption: data.value,
        promoLabelFlag: false
      });
    }
  };

  updatePromoLabelState = () => {
    this.setState({
      promoLabelFlag: false
    });
  };

  changeStatePromoValue = (value, apply, type) => {
    this.setState({
      promoDiscountValue: value,
      promoApply: apply,
      promoType: type
    });
  };

  errorMessage = (flag, text) => {
    this.setState({
      errorMessage: flag,
      errorText: text
    });
  };

  razorpayGatewayCall = (amount, merchantBName, userEmail, userMobile) => {
    const options = {
      key: this.state.razorpay,
      amount: amount, // 2000 paise = INR 20
      name: merchantBName,
      description: "Purchase Description",
      image: "/your_logo.png",
      handler: function(response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        // name: userName,
        email: userEmail,
        mobile: userMobile
      },
      notes: {
        address: ""
      },
      theme: {
        color: "#F37254"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  render() {
    return (
      <div>
        <Header />

        {this.state.errorMessage ? (
          <Container text style={{ marginBottom: "10px", marginTop: "30px" }}>
            <Message errorText={this.state.errorText} />
          </Container>
        ) : null}

        <Container style={{ marginTop: "10px" }}>
          <h1
            style={{
              fontWeight: "500",
              color: "rgba(0,0,0,.6)"
            }}
          >
            Checkout
          </h1>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={10}>
                <Right
                  history={this.props.history}
                  parentState={this.state}
                  paymentMode={this.props.paymentMode}
                  onChangePayment={this.onChangePayment}
                  updatePromoLabelState={this.updatePromoLabelState}
                  errorMessage={this.errorMessage}
                  promoCode={this.props.promoCode}
                  verifyPromoCode={this.props.verifyPromoCode}
                  getDeliveryAdditionalCharge={
                    this.props.getDeliveryAdditionalCharge
                  }
                  getOtherAdditionalCharge={this.props.getOtherAdditionalCharge}
                  changeStatePromoValue={this.changeStatePromoValue}
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Sticky enabled={true} top={50} bottomBoundary={500}>
                  <Left
                    history={this.props.history}
                    parentState={this.state}
                    deliveryAdditionalCharge={
                      this.props.deliveryAdditionalCharge
                    }
                    otherAdditionalCharge={this.props.otherAdditionalCharge}
                    errorMessage={this.errorMessage}
                    razorpayGatewayCall={this.razorpayGatewayCall}
                  />
                </Sticky>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}
