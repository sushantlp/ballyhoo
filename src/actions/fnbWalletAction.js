import api from "../utils/api";

export const actionType = {
  fnbWallet: "FNB_WALLET"
};

export function postFnbWallet(dealId, quantity, amount, mobile, token) {
  return dispatch => {
    api
      .fnbWalletApi(dealId, quantity, amount, mobile, token)
      .then(fnbWallet => dispatch({ type: actionType.fnbWallet, fnbWallet }));
  };
}
