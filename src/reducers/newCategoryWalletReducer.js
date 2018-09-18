import { actionType } from "../actions/newCategoryWalletAction";

const initialState = {
  newCategoryWallet: {}
};

export function newCategoryWallet(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryWallet:
      if (action.newCategoryWallet.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryWallet: {}
        };
      } else {
        return {
          ...state,
          newCategoryWallet: action.newCategoryWallet
        };
      }
    default:
      return state;
  }
}
