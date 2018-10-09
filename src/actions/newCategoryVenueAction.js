import api from "../utils/api";

export const actionType = {
  newCategoryVenue: "NEW_CATEGORY_VENUE"
};

export function postNewCategoryVenue(
  offerId,
  mobile,
  amount,
  bookingAt,
  orderItemList,
  token
) {
  return dispatch => {
    api
      .newCategoryVenueApi(
        offerId,
        mobile,
        amount,
        bookingAt,
        orderItemList,
        token
      )
      .then(newCategoryVenue =>
        dispatch({ type: actionType.newCategoryVenue, newCategoryVenue })
      );
  };
}
