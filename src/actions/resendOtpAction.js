import api from "../utils/api";

export const actionType = {
  resendOtp: "RESEND_OTP"
};

export function getResendOtp(mobile, type) {
  return dispatch => {
    api
      .resendOtpApi(mobile, type)
      .then(resendOtp => dispatch({ type: actionType.resendOtp, resendOtp }));
  };
}
