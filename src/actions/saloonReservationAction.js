import api from "../utils/api";

export const actionType = {
  saloonReservation: "SALOON_RESERVATION"
};

export function postSaloonReservation(offerId, mobile, bookingAt, token) {
  return dispatch => {
    api
      .saloonReservationApi(offerId, mobile, bookingAt, token)
      .then(saloonReservation =>
        dispatch({ type: actionType.saloonReservation, saloonReservation })
      );
  };
}
