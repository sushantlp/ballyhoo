import { actionType } from "../actions/deliveryAdditionalChargeAction";

const initialState = {
  deliveryAdditionalCharge: {}
};

export function deliveryAdditionalCharge(state = initialState, action) {
  switch (action.type) {
    case actionType.deliveryAdditionalCharge:
      return {
        ...state,
        deliveryAdditionalCharge: action.deliveryAdditionalCharge
      };
    default:
      return state;
  }
}
