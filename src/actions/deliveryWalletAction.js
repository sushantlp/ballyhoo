import api from "../utils/api";

export const actionType = {
  deliveryWallet: "DELIVERY_WALLET"
};

export function postDeliveryWallet(
  mobile,
  dealId,
  amount,
  deliveryDate,
  deliveryTime,
  customerDetail,
  itemDetail
) {
  return dispatch => {
    api
      .deliveryWalletApi(
        mobile,
        dealId,
        amount,
        deliveryDate,
        deliveryTime,
        customerDetail,
        itemDetail
      )
      .then(deliveryWallet =>
        dispatch({ type: actionType.deliveryWallet, deliveryWallet })
      );
  };
}
