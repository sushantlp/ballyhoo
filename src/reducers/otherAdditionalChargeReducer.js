import { actionType } from "../actions/otherAdditionalChargeAction";

const initialState = {
  charge: {},
  status: false,
  msg: ""
};

export function otherAdditionalCharge(state = initialState, action) {
  switch (action.type) {
    case actionType.otherAdditionalCharge:
      if (action.otherAdditionalCharge.hasOwnProperty("message")) {
        return {
          ...state,
          charge: action.otherAdditionalCharge.message.ballyhoo,
          status: true,
          msg: "successful"
        };
      } else {
        return {
          ...state,
          charge: {},
          status: false,
          msg: action.otherAdditionalCharge.error.ballyhoo
        };
      }
    default:
      return state;
  }
}
