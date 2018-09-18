import api from "../utils/api";

export const actionType = {
  newCategoryWallet: "NEW_CATEGORY_WALLET"
};

export function postNewCategoryWallet(
  offerId,
  mobile,
  amount,
  bookingAt,
  orderItemList
) {
  return dispatch => {
    api
      .newCategoryWalletApi(offerId, mobile, amount, bookingAt, orderItemList)
      .then(newCategoryWallet =>
        dispatch({ type: actionType.newCategoryWallet, newCategoryWallet })
      );
  };
}
