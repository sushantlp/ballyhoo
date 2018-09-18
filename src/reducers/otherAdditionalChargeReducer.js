import { actionType } from "../actions/otherAdditionalChargeAction";

const initialState = {
  otherAdditionalCharge: {}
};

export function otherAdditionalCharge(state = initialState, action) {
  switch (action.type) {
    case actionType.otherAdditionalCharge:
      if (action.otherAdditionalCharge.hasOwnProperty("message")) {
        return {
          ...state,
          otherAdditionalCharge: action.otherAdditionalCharge
        };
      } else {
        return {
          ...state,
          otherAdditionalCharge: {}
        };
      }
    default:
      return state;
  }
}
