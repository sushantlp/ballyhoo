import api from "../utils/api";

export const actionType = {
  promoCode: "PROMO_CODE"
};

export function verifyPromoCode(
  mobile,
  offerId,
  amount,
  quantity,
  promoCode,
  offeringId,
  token
) {
  return dispatch => {
    api
      .verifyPromoCodeApi(
        mobile,
        offerId,
        amount,
        quantity,
        promoCode,
        offeringId,
        token
      )
      .then(promoCode => dispatch({ type: actionType.promoCode, promoCode }));
  };
}
