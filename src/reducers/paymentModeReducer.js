import { actionType } from "../actions/paymentModeAction";

const initialState = {
  paymentMode: {},
  status: "START",
  msg: ""
};

export function paymentMode(state = initialState, action) {
  switch (action.type) {
    case actionType.paymentMode:
      if (action.paymentMode.hasOwnProperty("message")) {
        return {
          ...state,
          paymentMode: action.paymentMode.message.ballyhoo,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          paymentMode: {},
          status: "FAIL",
          msg: action.paymentMode.error.ballyhoo
        };
      }
    default:
      return state;
  }
}
