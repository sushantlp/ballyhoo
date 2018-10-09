import React from "react";

import Sticky from "react-stickynode";
import Left from "./leftSideComponent/left";
import Right from "./rightSideComponent/right";
import Header from "../header/header";
import Footer from "../footer/footer";
import Message from "../authComponents/messageComponent/message";
import Sweet from "./sweetAlertComponent/sweet";

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
      promoType: "",

      finalPrice: 0,
      finalQuantity: 0,
      finalGrandTotal: 0,
      finalCharge: {},
      newBookingState: {},

      time: {},
      sweetText: "",
      sweetAlert: false,
      sweetMsg: "",
      sweetFlag: "success",

      placeOrderButtonLoading: false,
      placeOrderButtonDisabled: false
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
            userData: JSON.parse(userData),
            finalPrice: object.detailBookingPrice,
            finalQuantity: object.detailQuantity
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
          userData: JSON.parse(userData),
          newBookingState: this.props.location.state.checkoutData.detailObject,
          finalPrice: object.detailBookingPrice
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

  componentWillReceiveProps(nextProp) {
    if (
      this.props.newCategoryRazorpay !== nextProp.newCategoryRazorpay &&
      nextProp.newCategoryRazorpay.status !== "START"
    ) {
      this.updatePlaceOrderButton(false, false);
      if (nextProp.newCategoryRazorpay.status === "FAIL") {
        this.sweetAlert(
          true,
          nextProp.newCategoryRazorpay.msg,
          nextProp.newCategoryRazorpay.status,
          "error"
        );
      } else {
        this.sweetAlert(
          true,
          nextProp.newCategoryRazorpay.msg,
          nextProp.newCategoryRazorpay.status,
          "success"
        );
      }
    } else if (
      this.props.newCategoryWallet !== nextProp.newCategoryWallet &&
      nextProp.newCategoryWallet.status !== "START"
    ) {
      this.updatePlaceOrderButton(false, false);

      if (nextProp.newCategoryWallet.status === "FAIL") {
        this.sweetAlert(
          true,
          nextProp.newCategoryWallet.msg,
          nextProp.newCategoryWallet.status,
          "error"
        );
      } else {
        this.sweetAlert(
          true,
          nextProp.newCategoryWallet.msg,
          nextProp.newCategoryWallet.status,
          "success"
        );
      }
    }
  }

  sweetAlert = (flag, text, msg, log) => {
    this.setState({
      sweetAlert: flag,
      sweetText: text,
      sweetMsg: msg,
      sweetFlag: log
    });
  };

  sweetAlertButtonClick = () => {
    if (this.state.sweetMsg === "FAIL") {
      this.sweetAlert(false, "", "");
    } else {
      this.sweetAlert(false, "", "");
      this.props.history.push(`/web/`);
    }
  };

  onChangePayment = (event, data) => {
    if (data.value === "Online payment") {
      this.setState({
        paymentOption: data.value,
        promoLabelFlag: true
      });
    } else {
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

  razorpayGatewayCall = (
    amount,
    merchantBName,
    userEmail,
    userMobile,
    flag,
    newOnlinePaymentLogic,
    oldOnlinePaymentLogic
  ) => {
    const options = {
      key: this.state.key.razorpay,
      amount: amount, // 2000 paise = INR 20
      name: merchantBName,
      description: "Purchase Description",
      image:
        "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_50/v1539007601/ballyhoo/EMAIL/ballyhoo_black.png",
      handler: function(response) {
        if (flag === "NEW") {
          newOnlinePaymentLogic(response.razorpay_payment_id);
        } else {
          oldOnlinePaymentLogic(response.razorpay_payment_id);
        }
      },
      prefill: {
        // name: userName,
        email: userEmail,
        contact: userMobile
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

  updateFinalPrice = price => {
    this.setState({
      finalPrice: price
    });
  };

  updateFinalQuantity = quantity => {
    this.setState({
      finalQuantity: quantity
    });
  };

  updateFinalGrandTotal = grandTotal => {
    this.setState({
      finalGrandTotal: grandTotal
    });
  };

  updateFinalCharge = charge => {
    this.setState({
      finalCharge: charge
    });
  };

  updateNewBookingState = data => {
    this.setState({
      newBookingState: data
    });
  };

  updateTime = time => {
    this.setState({
      time
    });
  };

  updatePlaceOrderButton = (loading, disabled) => {
    this.setState({
      placeOrderButtonDisabled: disabled,
      placeOrderButtonLoading: loading
    });
  };

  placeOrderButtonClick = () => {
    console.log(this.props);
    console.log(this.state);
    this.updatePlaceOrderButton(true, true);
    if (this.state.newCategory) {
      this.newApiCallLogic();
    } else {
      if (this.state.delivery) {
        this.deliveryApiCallLogic();
      } else {
        this.oldApiCallLogic();
      }
    }
  };

  newApiCallLogic = () => {
    if (this.state.paymentOption === "Online payment") {
      const paisa = this.state.finalGrandTotal * 100;
      this.razorpayGatewayCall(
        paisa,
        this.state.newBookingState.merchant_bname,
        this.state.userData.userEmail,
        this.state.userData.userMobile,
        "NEW",
        this.newOnlinePaymentLogic
      );
    } else if (this.state.paymentOption === "Ballyhoo wallet") {
      this.newBallyhooWalletPaymentLogic();
    } else if (this.state.paymentOption === "Pay at venue") {
      this.newPayAtVenueLogic();
    } else {
      console.log("Wrong payment");
    }
  };

  newBallyhooWalletPaymentLogic = () => {
    const json = this.getUsedJson(this.state.newBookingState.packageList);
    const dateTime =
      this.state.newBookingState.bookingDate + " " + this.state.time;

    this.props.postNewCategoryWallet(
      this.state.newBookingState.offer_id,
      this.state.userData.userMobile,
      this.state.finalGrandTotal,
      dateTime,
      json,
      this.state.key.token
    );
  };

  newPayAtVenueLogic = () => {};

  newOnlinePaymentLogic = razorpayPaymentId => {
    const paisa = this.state.finalGrandTotal * 100;
    const json = this.getUsedJson(this.state.newBookingState.packageList);

    const dateTime =
      this.state.newBookingState.bookingDate + " " + this.state.time;

    this.props.postNewCategoryRazorpay(
      this.state.newBookingState.offer_id,
      this.state.userData.userMobile,
      paisa,
      razorpayPaymentId,
      dateTime,
      json,
      this.state.key.token
    );
  };

  getUsedJson = packageList => {
    let arr = [];
    for (let i = 0; i < packageList.length; i++) {
      for (let j = 0; j < packageList[i].priceList.length; j++) {
        // Object
        let obj = {};
        obj.item_id = packageList[i].priceList[j].price_id;
        obj.quantity = packageList[i].priceList[j].quantity;

        arr.push(obj);
      }
    }

    return arr;
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

        {this.state.sweetAlert ? (
          <Sweet
            sweetAlertButtonClick={this.sweetAlertButtonClick}
            message={this.state.sweetText}
            flag={this.state.sweetFlag}
          />
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
                  updateTime={this.updateTime}
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
                    updateFinalPrice={this.updateFinalPrice}
                    updateFinalQuantity={this.updateFinalQuantity}
                    updateFinalGrandTotal={this.updateFinalGrandTotal}
                    updateFinalCharge={this.updateFinalCharge}
                    updateNewBookingState={this.updateNewBookingState}
                    placeOrderButtonClick={this.placeOrderButtonClick}
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
