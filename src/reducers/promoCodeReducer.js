import { actionType } from "../actions/promoCodeAction";

const initialState = {
  promo: {},
  status: "START",
  msg: ""
};

export function promoCode(state = initialState, action) {
  switch (action.type) {
    case actionType.promoCode:
      if (action.promoCode.hasOwnProperty("error")) {
        return {
          ...state,
          promo: {},
          status: "FAIL",
          msg: action.promoCode.error.ballyhoo
        };
      } else {
        return {
          ...state,
          promo: action.promoCode,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
