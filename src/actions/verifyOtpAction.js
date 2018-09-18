import api from "../utils/api";

export const actionType = {
  verifyOtp: "VERIFY_OTP"
};

export function postVerifyOtp(mobile, otp) {
  return dispatch => {
    api
      .verifyOtpApi(mobile, otp)
      .then(verifyOtp => dispatch({ type: actionType.verifyOtp, verifyOtp }));
  };
}
