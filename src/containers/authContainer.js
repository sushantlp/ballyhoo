import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import AuthComponent from "../components/authComponents/auth";

import { getRegisterNewUser } from "../actions/registerNewUserAction";
import { postUpdateUserRecord } from "../actions/updateUserRecordAction";
import { getUserRecord } from "../actions/userRecordAction";
import { postVerifyOtp } from "../actions/verifyOtpAction";
import { getResendOtp } from "../actions/resendOtpAction";
import {
  registerSuccess,
  registerFailure
} from "../actions/authenticationAction";

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    registerNewUser: state.registerNewUser,
    updateUserRecord: state.updateUserRecord,
    userRecord: state.userRecord,
    verifyOtp: state.verifyOtp,
    resendOtp: state.resendOtp
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      registerSuccess: registerSuccess,
      registerFailure: registerFailure,
      getRegisterNewUser: getRegisterNewUser,
      postVerifyOtp: postVerifyOtp,
      getUserRecord: getUserRecord,
      postUpdateUserRecord: postUpdateUserRecord,
      getResendOtp: getResendOtp
    }
  )(AuthComponent)
);
