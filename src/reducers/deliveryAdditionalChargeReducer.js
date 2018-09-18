import { actionType } from "../actions/deliveryAdditionalChargeAction";

const initialState = {
  deliveryAdditionalCharge: {}
};

export function deliveryAdditionalCharge(state = initialState, action) {
  switch (action.type) {
    case actionType.deliveryAdditionalCharge:
      if (action.deliveryAdditionalCharge.hasOwnProperty("message")) {
        return {
          ...state,
          deliveryAdditionalCharge: action.deliveryAdditionalCharge
        };
      } else {
        return {
          ...state,
          deliveryAdditionalCharge: {}
        };
      }
    default:
      return state;
  }
}
