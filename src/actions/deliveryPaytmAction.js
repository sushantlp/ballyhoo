import api from "../utils/api";

export const actionType = {
  deliveryPaytm: "DELIVERY_PAYTM"
};

export function postDeliveryPaytm(
  mobile,
  dealId,
  orderId,
  hash,
  mid,
  amount,
  deliveryDate,
  deliveryTime,
  customerDetail,
  itemDetail
) {
  return dispatch => {
    api
      .deliveryPaytmApi(
        mobile,
        dealId,
        orderId,
        hash,
        mid,
        amount,
        deliveryDate,
        deliveryTime,
        customerDetail,
        itemDetail
      )
      .then(deliveryPaytm =>
        dispatch({ type: actionType.deliveryPaytm, deliveryPaytm })
      );
  };
}
