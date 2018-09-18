import api from "../utils/api";

export const actionType = {
  deliveryVenue: "DELIVERY_VENUE"
};

export function postDeliveryVenue(
  mobile,
  dealId,
  amount,
  deliveryDate,
  deliveryTime,
  customerDetail,
  itemDetail
) {
  return dispatch => {
    api
      .deliveryVenueApi(
        mobile,
        dealId,
        amount,
        deliveryDate,
        deliveryTime,
        customerDetail,
        itemDetail
      )
      .then(deliveryVenue =>
        dispatch({ type: actionType.deliveryVenue, deliveryVenue })
      );
  };
}
