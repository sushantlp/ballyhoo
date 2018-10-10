import api from "../utils/api";

export const actionType = {
  deliveryAdditionalCharge: "DELIVERY_ADDITIONAL_CHARGE"
};

export function getDeliveryAdditionalCharge(merchantMobile, token) {
  return dispatch => {
    api
      .deliveryAdditionalChargeApi(merchantMobile, token)
      .then(deliveryAdditionalCharge =>
        dispatch({
          type: actionType.deliveryAdditionalCharge,
          deliveryAdditionalCharge
        })
      );
  };
}
