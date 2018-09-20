import { actionType } from "../actions/verifyOtpAction";

const initialState = {
  verifyOtp: {}
};

export function verifyOtp(state = initialState, action) {
  switch (action.type) {
    case actionType.verifyOtp:
      if (action.verifyOtp.hasOwnProperty("error")) {
        return {
          ...state,
          verifyOtp: false
        };
      } else {
        return {
          ...state,
          verifyOtp: true
        };
      }
    default:
      return state;
  }
}
