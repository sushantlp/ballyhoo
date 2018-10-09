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
  razorpayPaymentId,
  token
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
        razorpayPaymentId,
        token
      )
      .then(fnbRazorpay =>
        dispatch({ type: actionType.fnbRazorpay, fnbRazorpay })
      );
  };
}
