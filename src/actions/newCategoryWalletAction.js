import api from "../utils/api";

export const actionType = {
  newCategoryWallet: "NEW_CATEGORY_WALLET"
};

export function postNewCategoryWallet(
  offerId,
  mobile,
  amount,
  bookingAt,
  orderItemList,
  token
) {
  return dispatch => {
    api
      .newCategoryWalletApi(
        offerId,
        mobile,
        amount,
        bookingAt,
        orderItemList,
        token
      )
      .then(newCategoryWallet =>
        dispatch({ type: actionType.newCategoryWallet, newCategoryWallet })
      );
  };
}
