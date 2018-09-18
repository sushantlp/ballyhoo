import api from "../utils/api";

export const actionType = {
  deliveryRazorpay: "DELIVERY_RAZORPAY"
};

export function postDeliveryRazorpay(
  mobile,
  dealId,
  amount,
  deliveryDate,
  deliveryTime,
  razorpayPaymentId,
  customerDetail,
  itemDetail
) {
  return dispatch => {
    api
      .deliveryRazorpayApi(
        mobile,
        dealId,
        amount,
        deliveryDate,
        deliveryTime,
        razorpayPaymentId,
        customerDetail,
        itemDetail
      )
      .then(deliveryRazorpay =>
        dispatch({ type: actionType.deliveryRazorpay, deliveryRazorpay })
      );
  };
}
