import api from "../utils/api";

export const actionType = {
  newCategoryRazorpay: "NEW_CATEGORY_RAZORPAY"
};

export function postNewCategoryRazorpay(
  offerId,
  mobile,
  amount,
  paymentId,
  bookingAt,
  orderItemList
) {
  return dispatch => {
    api
      .newCategoryRazorpayApi(
        offerId,
        mobile,
        amount,
        paymentId,
        bookingAt,
        orderItemList
      )
      .then(newCategoryRazorpay =>
        dispatch({ type: actionType.newCategoryRazorpay, newCategoryRazorpay })
      );
  };
}
