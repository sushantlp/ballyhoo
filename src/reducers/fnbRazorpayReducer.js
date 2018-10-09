import { actionType } from "../actions/fnbRazorpayAction";

const initialState = {
  fnbRazorpay: {},
  status: "START",
  msg: ""
};

export function fnbRazorpay(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbRazorpay:
      if (action.fnbRazorpay.hasOwnProperty("error")) {
        return {
          ...state,
          fnbRazorpay: {},
          status: "FAIL",
          msg: action.fnbRazorpay.error.ballyhoo
        };
      } else {
        return {
          ...state,
          fnbRazorpay: action.fnbRazorpay,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
