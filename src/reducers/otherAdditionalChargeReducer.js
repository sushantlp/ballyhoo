import { actionType } from "../actions/otherAdditionalChargeAction";

const initialState = {
  charge: {},
  status: "START",
  msg: ""
};

export function otherAdditionalCharge(state = initialState, action) {
  switch (action.type) {
    case actionType.otherAdditionalCharge:
      if (action.otherAdditionalCharge.hasOwnProperty("message")) {
        return {
          ...state,
          charge: action.otherAdditionalCharge.message.ballyhoo,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          charge: {},
          status: "FAIL",
          msg: action.otherAdditionalCharge.error.ballyhoo
        };
      }
    default:
      return state;
  }
}
