import api from "../utils/api";

export const actionType = {
  fnbRazorpay: "FNB_RAZORPAY"
};

export function postFnbRazorpay(
  dealId,
  quantity,
  amount,
  mobile,
  time,
  reservationDate,
  razorpayPaymentId
) {
  return dispatch => {
    api
      .fnbRazorpayApi(
        dealId,
        quantity,
        amount,
        mobile,
        time,
        reservationDate,
        razorpayPaymentId
      )
      .then(fnbRazorpay =>
        dispatch({ type: actionType.fnbRazorpay, fnbRazorpay })
      );
  };
}
