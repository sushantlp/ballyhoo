import { actionType } from "../actions/paymentModeAction";

const initialState = {
  paymentMode: {},
  status: false,
  msg: ""
};

export function paymentMode(state = initialState, action) {
  switch (action.type) {
    case actionType.paymentMode:
      if (action.paymentMode.hasOwnProperty("message")) {
        return {
          ...state,
          paymentMode: action.paymentMode.message.ballyhoo,
          status: true,
          msg: "successful"
        };
      } else {
        return {
          ...state,
          paymentMode: {},
          status: false,
          msg: action.paymentMode.error.ballyhoo
        };
      }
    default:
      return state;
  }
}
