import { actionType } from "../actions/fnbWalletAction";

const initialState = {
  fnbWallet: {},
  status: "START",
  msg: ""
};

export function fnbWallet(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbWallet:
      if (action.fnbWallet.hasOwnProperty("error")) {
        return {
          ...state,
          fnbWallet: {},
          status: "FAIL",
          msg: action.fnbWallet.error.ballyhoo
        };
      } else {
        return {
          ...state,
          fnbWallet: action.fnbWallet,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
