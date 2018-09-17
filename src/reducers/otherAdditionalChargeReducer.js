import { actionType } from "../actions/otherAdditionalChargeAction";

const initialState = {
  otherAdditionalCharge: {}
};

export function otherAdditionalCharge(state = initialState, action) {
  switch (action.type) {
    case actionType.otherAdditionalCharge:
      return {
        ...state,
        otherAdditionalCharge: action.otherAdditionalCharge
      };
    default:
      return state;
  }
}
