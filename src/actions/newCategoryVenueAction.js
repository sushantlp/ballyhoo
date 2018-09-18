import api from "../utils/api";

export const actionType = {
  newCategoryVenue: "NEW_CATEGORY_VENUE"
};

export function postNewCategoryVenue(
  offerId,
  mobile,
  amount,
  bookingAt,
  orderItemList
) {
  return dispatch => {
    api
      .newCategoryVenueApi(offerId, mobile, amount, bookingAt, orderItemList)
      .then(newCategoryVenue =>
        dispatch({ type: actionType.newCategoryVenue, newCategoryVenue })
      );
  };
}
