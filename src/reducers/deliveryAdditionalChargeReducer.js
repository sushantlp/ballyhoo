import { actionType } from "../actions/deliveryAdditionalChargeAction";

const initialState = {
  charge: {},
  status: "START",
  msg: ""
};

export function deliveryAdditionalCharge(state = initialState, action) {
  switch (action.type) {
    case actionType.deliveryAdditionalCharge:
      if (action.deliveryAdditionalCharge.hasOwnProperty("message")) {
        return {
          ...state,
          charge: action.deliveryAdditionalCharge.message.ballyhoo,
          status: "SUCCESS",
          msg: "successful"
        };
      } else {
        return {
          ...state,
          charge: {},
          status: "FAIL",
          msg: action.deliveryAdditionalCharge.error.ballyhoo
        };
      }
    default:
      return state;
  }
}
