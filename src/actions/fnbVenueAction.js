import api from "../utils/api";

export const actionType = {
  fnbVenue: "FNB_VENUE"
};

export function postFnbVenue(
  mobile,
  dealId,
  amount,
  quantity,
  time,
  reservationDate
) {
  return dispatch => {
    api
      .fnbVenueApi(mobile, dealId, amount, quantity, time, reservationDate)
      .then(fnbVenue => dispatch({ type: actionType.fnbVenue, fnbVenue }));
  };
}
