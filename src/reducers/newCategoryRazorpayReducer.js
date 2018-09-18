import { actionType } from "../actions/newCategoryRazorpayAction";

const initialState = {
  newCategoryRazorpay: {}
};

export function newCategoryRazorpay(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryRazorpay:
      if (action.newCategoryRazorpay.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryRazorpay: {}
        };
      } else {
        return {
          ...state,
          newCategoryRazorpay: action.newCategoryRazorpay
        };
      }
    default:
      return state;
  }
}
