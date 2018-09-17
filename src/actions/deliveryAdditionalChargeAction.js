import api from "../utils/api";

export const actionType = {
  deliveryAdditionalCharge: "DELIVERY_ADDITIONAL_CHARGE"
};

export function getDeliveryAdditionalCharge(merchantMobile) {
  return dispatch => {
    api
      .deliveryAdditionalChargeApi(merchantMobile)
      .then(deliveryAdditionalCharge =>
        dispatch({
          type: actionType.deliveryAdditionalCharge,
          deliveryAdditionalCharge
        })
      );
  };
}
