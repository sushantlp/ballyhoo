import { actionType } from "../actions/resendOtpAction";

const initialState = {
  resendOtp: {},
  status: "START",
  msg: ""
};

export function resendOtp(state = initialState, action) {
  switch (action.type) {
    case actionType.resendOtp:
      if (action.resendOtp.hasOwnProperty("error")) {
        return {
          ...state,
          resendOtp: {},
          status: "FAIL",
          msg: action.resendOtp.error.ballyhoo
        };
      } else {
        return {
          ...state,
          resendOtp: action.resendOtp,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
