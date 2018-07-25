import api from "../utils/api";

export const actionType = {
  activeOffer: "ACTIVE_OFFER"
};

export function activeOfferData(cityId, localityId, level) {
  return dispatch => {
    api
      .activeOfferApi(cityId, localityId, level)
      .then(activeOffer =>
        dispatch({ type: actionType.activeOffer, activeOffer })
      );
  };
}
