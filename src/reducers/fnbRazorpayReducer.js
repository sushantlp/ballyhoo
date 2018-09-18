import { actionType } from "../actions/fnbRazorpayAction";

const initialState = {
  fnbRazorpay: {}
};

export function fnbRazorpay(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbRazorpay:
      if (action.fnbRazorpay.hasOwnProperty("error")) {
        return {
          ...state,
          fnbRazorpay: {}
        };
      } else {
        return {
          ...state,
          fnbRazorpay: action.fnbRazorpay
        };
      }
    default:
      return state;
  }
}
