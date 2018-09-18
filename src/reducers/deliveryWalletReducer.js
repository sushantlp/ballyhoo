import { actionType } from "../actions/deliveryWalletAction";

const initialState = {
  deliveryWallet: {}
};

export function deliveryWallet(state = initialState, action) {
  switch (action.type) {
    case actionType.deliveryWallet:
      if (action.deliveryWallet.hasOwnProperty("error")) {
        return {
          ...state,
          deliveryWallet: {}
        };
      } else {
        return {
          ...state,
          deliveryWallet: action.deliveryWallet
        };
      }
    default:
      return state;
  }
}
