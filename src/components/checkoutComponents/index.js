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
      saloon: false,

      oldCategory: false,
      newCategory: false,
      paymentOption: "",
      errorMessage: false,
      errorText: "",
      key: {},
      userData: {},
      promoLabelFlag: false,
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

  componentWillUnmount() {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
    }
  }

  async componentDidMount() {
    try {
      // Get Session Storage Data
      const userData = sessionStorage.getItem(USER_DATA);
      const key = sessionStorage.getItem(BALLY_KEY);

      let object = {};
      if (userData === null) {
        this.props.history.push("/web/");
      } else {
        this.timer = setInterval(async () => {
          const data = JSON.parse(userData);
          const keyValue = JSON.parse(key);
          const res = await fetch(
            `https://ballyhoo.today/web/token?mobile=${data.userMobile}`
          );
          const jwt = await res.json();

          object = {
            razorpay: keyValue.razorpay,
            role: jwt.Role,
            token: jwt.Token
          };

          // Store in Session Storage
          sessionStorage.removeItem(BALLY_KEY);
          sessionStorage.setItem(BALLY_KEY, JSON.stringify(object));
        }, 1200000);
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    if (this.props.history.location.state !== undefined) {
      const object = this.props.location.state.checkoutData;

      // Get Session Storage Data
      const userData = sessionStorage.getItem(USER_DATA);
      const key = sessionStorage.getItem(BALLY_KEY);
      const jwt = JSON.parse(key);

      if (jwt === null) {
        this.props.history.push("/web");
      }

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
            jwt.token
          );
        } else {
          this.setState({
            oldCategory: true,
            key: JSON.parse(key),
            userData: JSON.parse(userData),
            finalPrice: object.detailBookingPrice,
            finalQuantity: object.detailQuantity
          });

          if (object.detailObject.DISCOUNT.ActualPrice !== 0) {
            // Get Additional Charge
            this.props.getOtherAdditionalCharge(
              object.detailBookingPrice,
              jwt.token
            );

            // Check Payment Mode Active
            this.props.getPaymentMode(
              object.detailObject.MERCHANT.Contact,
              jwt.token
            );
          }
        }
      } else {
        let saloon = this.state.saloon;
        if (object.detailObject.category_name === "SALOON & SPA") {
          saloon = true;
        }

        this.setState({
          newCategory: true,
          key: JSON.parse(key),
          userData: JSON.parse(userData),
          newBookingState: object.detailObject,
          finalPrice: object.detailBookingPrice,
          saloon: saloon
        });

        if (object.detailBookingPrice !== 0) {
          // Get Additional Charge
          this.props.getOtherAdditionalCharge(
            object.detailBookingPrice,
            jwt.token
          );

          // Check Payment Mode Active
          this.props.getPaymentMode(
            object.detailObject.merchant_mobile,
            jwt.token
          );
        }
      }
    } else {
      this.props.history.push("/web/");
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
    } else if (
      this.props.newCategoryVenue !== nextProp.newCategoryVenue &&
      nextProp.newCategoryVenue.status !== "START"
    ) {
      this.updatePlaceOrderButton(false, false);

      if (nextProp.newCategoryVenue.status === "FAIL") {
        this.sweetAlert(
          true,
          nextProp.newCategoryVenue.msg,
          nextProp.newCategoryVenue.status,
          "error"
        );
      } else {
        this.sweetAlert(
          true,
          nextProp.newCategoryVenue.msg,
          nextProp.newCategoryVenue.status,
          "success"
        );
      }
    } else if (
      this.props.fnbRazorpay !== nextProp.fnbRazorpay &&
      nextProp.fnbRazorpay.status !== "START"
    ) {
      this.updatePlaceOrderButton(false, false);

      if (nextProp.fnbRazorpay.status === "FAIL") {
        this.sweetAlert(
          true,
          nextProp.fnbRazorpay.msg,
          nextProp.fnbRazorpay.status,
          "error"
        );
      } else {
        this.sweetAlert(
          true,
          nextProp.fnbRazorpay.msg,
          nextProp.fnbRazorpay.status,
          "success"
        );
      }
    } else if (
      this.props.fnbWallet !== nextProp.fnbWallet &&
      nextProp.fnbWallet.status !== "START"
    ) {
      this.updatePlaceOrderButton(false, false);

      if (nextProp.fnbWallet.status === "FAIL") {
        this.sweetAlert(
          true,
          nextProp.fnbWallet.msg,
          nextProp.fnbWallet.status,
          "error"
        );
      } else {
        this.sweetAlert(
          true,
          nextProp.fnbWallet.msg,
          nextProp.fnbWallet.status,
          "success"
        );
      }
    } else if (
      this.props.fnbVenue !== nextProp.fnbVenue &&
      nextProp.fnbVenue.status !== "START"
    ) {
      this.updatePlaceOrderButton(false, false);

      if (nextProp.fnbVenue.status === "FAIL") {
        this.sweetAlert(
          true,
          nextProp.fnbVenue.msg,
          nextProp.fnbVenue.status,
          "error"
        );
      } else {
        this.sweetAlert(
          true,
          nextProp.fnbVenue.msg,
          nextProp.fnbVenue.status,
          "success"
        );
      }
    } else if (
      this.props.saloonReservation !== nextProp.saloonReservation &&
      nextProp.saloonReservation.status !== "START"
    ) {
      this.updatePlaceOrderButton(false, false);

      if (nextProp.saloonReservation.status === "FAIL") {
        this.sweetAlert(
          true,
          nextProp.saloonReservation.msg,
          nextProp.saloonReservation.status,
          "error"
        );
      } else {
        this.sweetAlert(
          true,
          nextProp.saloonReservation.msg,
          nextProp.saloonReservation.status,
          "success"
        );
      }
    } else {
      return false;
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

  updateDefaultPaymentOption = payment => {
    this.setState({
      paymentOption: payment
    });
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
    oldOnlinePaymentLogic,
    updatePlaceOrderButton
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
          oldOnlinePaymentLogic(response.razorpay_payment_id, false);
        }
      },
      modal: {
        ondismiss: function() {
          updatePlaceOrderButton(false, false);
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

  placeOrderButtonClick = (reserve, saloonAppoint) => {
    this.updatePlaceOrderButton(true, true);
    if (reserve) {
      if (saloonAppoint) {
        this.saloonAppointmentLogic();
      } else {
        this.oldOnlinePaymentLogic(null, reserve);
      }
    } else {
      if (this.state.newCategory) {
        this.newApiCallLogic();
      } else {
        if (this.state.delivery) {
          this.deliveryApiCallLogic();
        } else {
          this.oldApiCallLogic();
        }
      }
    }
  };

  oldApiCallLogic = () => {
    if (this.state.paymentOption === "Online payment") {
      const paisa = this.state.finalGrandTotal * 100;
      this.razorpayGatewayCall(
        paisa,
        this.state.newBookingState.merchant_bname,
        this.state.userData.userEmail,
        this.state.userData.userMobile,
        "OLD",
        this.newOnlinePaymentLogic,
        this.oldOnlinePaymentLogic,
        this.updatePlaceOrderButton
      );
    } else if (this.state.paymentOption === "Ballyhoo wallet") {
      this.oldBallyhooWalletPaymentLogic();
    } else if (this.state.paymentOption === "Pay at venue") {
      this.oldPayAtVenueLogic();
    } else {
      console.log("Old wrong payment");
    }
  };

  oldOnlinePaymentLogic = (razorpayPaymentId, reserve) => {
    let paisa = 0;
    if (!reserve) {
      paisa = this.state.finalGrandTotal * 100;
    }
    const object = this.props.location.state.checkoutData;

    this.props.postFnbRazorpay(
      object.detailObject.id,
      object.detailQuantity,
      paisa,
      this.state.userData.userMobile,
      this.state.time,
      this.state.newBookingState.bookingDate,
      razorpayPaymentId,
      this.state.key.token
    );
  };

  oldBallyhooWalletPaymentLogic = () => {
    const object = this.props.location.state.checkoutData;

    this.props.postFnbWallet(
      object.detailObject.id,
      object.detailQuantity,
      this.state.finalGrandTotal,
      this.state.userData.userMobile,
      this.state.key.token
    );
  };

  oldPayAtVenueLogic = razorpayPaymentId => {
    const object = this.props.location.state.checkoutData;

    this.props.postFnbRazorpay(
      object.detailObject.id,
      object.detailQuantity,
      this.state.finalGrandTotal,
      this.state.userData.userMobile,
      this.state.time,
      this.state.newBookingState.bookingDate,
      razorpayPaymentId,
      this.state.key.token
    );
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
        this.newOnlinePaymentLogic,
        this.oldOnlinePaymentLogic,
        this.updatePlaceOrderButton
      );
    } else if (this.state.paymentOption === "Ballyhoo wallet") {
      this.newBallyhooWalletPaymentLogic();
    } else if (this.state.paymentOption === "Pay at venue") {
      this.newPayAtVenueLogic();
    } else {
      console.log("New wrong payment");
    }
  };

  newBallyhooWalletPaymentLogic = () => {
    let json = {};

    if (this.state.saloon) {
      json = this.getSaloonUsedJson(this.state.newBookingState.menu_list);
    } else {
      json = this.getUsedJson(this.state.newBookingState.packageList);
    }
    let dateTime = "";
    if (this.state.newBookingState.category_name === "EVENTS") {
      dateTime = null;
    } else if (this.state.newBookingState.category_name === "ESCAPES") {
      dateTime = this.state.newBookingState.bookingDate;
    } else {
      dateTime = this.state.newBookingState.bookingDate + " " + this.state.time;
    }

    this.props.postNewCategoryWallet(
      this.state.newBookingState.offer_id,
      this.state.userData.userMobile,
      this.state.finalGrandTotal,
      dateTime,
      json,
      this.state.key.token
    );
  };

  newPayAtVenueLogic = () => {
    let json = {};
    if (this.state.saloon) {
      json = this.getSaloonUsedJson(this.state.newBookingState.menu_list);
    } else {
      json = this.getUsedJson(this.state.newBookingState.packageList);
    }
    let dateTime = "";
    if (this.state.newBookingState.category_name === "EVENTS") {
      dateTime = null;
    } else if (this.state.newBookingState.category_name === "ESCAPES") {
      dateTime = this.state.newBookingState.bookingDate;
    } else {
      dateTime = this.state.newBookingState.bookingDate + " " + this.state.time;
    }

    this.props.postNewCategoryVenue(
      this.state.newBookingState.offer_id,
      this.state.userData.userMobile,
      this.state.finalGrandTotal,
      dateTime,
      json,
      this.state.key.token
    );
  };

  newOnlinePaymentLogic = razorpayPaymentId => {
    const paisa = this.state.finalGrandTotal * 100;

    let json = {};
    if (this.state.saloon) {
      json = this.getSaloonUsedJson(this.state.newBookingState.menu_list);
    } else {
      json = this.getUsedJson(this.state.newBookingState.packageList);
    }
    let dateTime = "";
    if (this.state.newBookingState.category_name === "EVENTS") {
      dateTime = null;
    } else if (this.state.newBookingState.category_name === "ESCAPES") {
      dateTime = this.state.newBookingState.bookingDate;
    } else {
      dateTime = this.state.newBookingState.bookingDate + " " + this.state.time;
    }

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

  saloonAppointmentLogic = () => {
    const dateTime =
      this.state.newBookingState.bookingDate + " " + this.state.time;

    this.props.postSaloonReservation(
      this.state.newBookingState.offer_id,
      this.state.userData.userMobile,
      dateTime,
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

  getSaloonUsedJson = menuList => {
    let arr = [];
    for (let i = 0; i < menuList.length; i++) {
      for (let j = 0; j < menuList[i].item_list.length; j++) {
        // Object
        let obj = {};
        obj.item_id = menuList[i].item_list[j].item_id;
        obj.quantity = menuList[i].item_list[j].quantity;

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
                  updateDefaultPaymentOption={this.updateDefaultPaymentOption}
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
