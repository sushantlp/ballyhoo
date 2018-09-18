import { actionType } from "../actions/fnbWalletAction";

const initialState = {
  fnbWallet: {}
};

export function fnbWallet(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbWallet:
      if (action.fnbWallet.hasOwnProperty("error")) {
        return {
          ...state,
          fnbWallet: {}
        };
      } else {
        return {
          ...state,
          fnbWallet: action.fnbWallet
        };
      }
    default:
      return state;
  }
}
