import { actionType } from "../actions/paymentModeAction";

const initialState = {
  paymentMode: {}
};

export function paymentMode(state = initialState, action) {
  switch (action.type) {
    case actionType.paymentMode:
      return {
        ...state,
        paymentMode: action.paymentMode
      };
    default:
      return state;
  }
}
