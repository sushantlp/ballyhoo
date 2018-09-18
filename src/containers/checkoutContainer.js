import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CheckComponent from "../components/checkoutComponents";

import { getPaymentMode } from "../actions/paymentModeAction";

import { getRegisterNewUser } from "../actions/registerNewUserAction";
import { postUpdateUserRecord } from "../actions/updateUserRecordAction";
import { getUserRecord } from "../actions/userRecordAction";
import { postVerifyOtp } from "../actions/verifyOtpAction";

import { postFnbRazorpay } from "../actions/fnbRazorpayAction";
import { postFnbPaytm } from "../actions/fnbPaytmAction";
import { postFnbWallet } from "../actions/fnbWalletAction";
import { postFnbVenue } from "../actions/fnbVenueAction";

import { postNewCategoryRazorpay } from "../actions/newCategoryRazorpayAction";
import { postNewCategoryPaytm } from "../actions/newCategoryPaytmAction";
import { postNewCategoryWallet } from "../actions/newCategoryWalletAction";
import { postNewCategoryVenue } from "../actions/newCategoryVenueAction";
import { postSaloonReservation } from "../actions/saloonReservationAction";

function mapStateToProps(state) {
  return {
    paymentMode: state.paymentMode,
    registerNewUser: state.registerNewUser,
    updateUserRecord: state.updateUserRecord,
    userRecord: state.userRecord,
    verifyOtp: state.verifyOtp,
    fnbRazorpay: state.fnbRazorpay,
    fnbPaytm: state.fnbPaytm,
    fnbWallet: state.fnbWallet,
    fnbVenue: state.fnbVenue,
    newCategoryRazorpay: state.newCategoryRazorpay,
    newCategoryPaytm: state.newCategoryPaytm,
    newCategoryWallet: state.newCategoryWallet,
    newCategoryVenue: state.newCategoryVenue,
    saloonReservation: state.saloonReservation
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getPaymentMode: getPaymentMode,
      getRegisterNewUser: getRegisterNewUser,
      postUpdateUserRecord: postUpdateUserRecord,
      getUserRecord: getUserRecord,
      postVerifyOtp: postVerifyOtp,
      postFnbRazorpay: postFnbRazorpay,
      postFnbPaytm: postFnbPaytm,
      postFnbWallet: postFnbWallet,
      postFnbVenue: postFnbVenue,
      postNewCategoryRazorpay: postNewCategoryRazorpay,
      postNewCategoryPaytm: postNewCategoryPaytm,
      postNewCategoryWallet: postNewCategoryWallet,
      postNewCategoryVenue: postNewCategoryVenue,
      postSaloonReservation: postSaloonReservation
    }
  )(CheckComponent)
);
