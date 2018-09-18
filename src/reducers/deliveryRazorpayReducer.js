import { actionType } from "../actions/deliveryRazorpayAction";

const initialState = {
  deliveryRazorpay: {}
};

export function deliveryRazorpay(state = initialState, action) {
  switch (action.type) {
    case actionType.deliveryRazorpay:
      if (action.deliveryRazorpay.hasOwnProperty("error")) {
        return {
          ...state,
          deliveryRazorpay: {}
        };
      } else {
        return {
          ...state,
          deliveryRazorpay: action.deliveryRazorpay
        };
      }
    default:
      return state;
  }
}
