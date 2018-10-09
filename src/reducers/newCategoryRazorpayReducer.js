import { actionType } from "../actions/newCategoryRazorpayAction";

const initialState = {
  newCategoryRazorpay: {},
  status: "START",
  msg: ""
};

export function newCategoryRazorpay(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryRazorpay:
      if (action.newCategoryRazorpay.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryRazorpay: {},
          status: "FAIL",
          msg: action.newCategoryRazorpay.error.ballyhoo
        };
      } else {
        return {
          ...state,
          newCategoryRazorpay: action.newCategoryRazorpay,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
