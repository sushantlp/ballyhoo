import { actionType } from "../actions/newCategoryWalletAction";

const initialState = {
  newCategoryWallet: {},
  status: "START",
  msg: ""
};

export function newCategoryWallet(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryWallet:
      if (action.newCategoryWallet.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryWallet: {},
          status: "FAIL",
          msg: action.newCategoryWallet.error.ballyhoo
        };
      } else {
        return {
          ...state,
          newCategoryWallet: action.newCategoryWallet,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
