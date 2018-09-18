import api from "../utils/api";

export const actionType = {
  newCategoryPaytm: "NEW_CATEGORY_PAYTM"
};

export function postNewCategoryPaytm(
  offerId,
  orderId,
  mid,
  hash,
  mobile,
  amount,
  bookingAt,
  orderItemList
) {
  return dispatch => {
    api
      .newCategoryPaytmApi(
        offerId,
        orderId,
        mid,
        hash,
        mobile,
        amount,
        bookingAt,
        orderItemList
      )
      .then(newCategoryPaytm =>
        dispatch({ type: actionType.newCategoryPaytm, newCategoryPaytm })
      );
  };
}
