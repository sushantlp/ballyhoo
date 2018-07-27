import api from "../utils/api";

export const actionType = {
  activeOffer: "ACTIVE_OFFER",
  activeOfferMerge: "ACTIVE_OFFER_MERGE"
};

export function activeOfferData(cityId, localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .activeOfferApi(cityId, localityId, level)
        .then(activeOffer =>
          dispatch({ type: actionType.activeOffer, activeOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .activeOfferApi(cityId, localityId, level)
        .then(activeOffer =>
          dispatch({ type: actionType.activeOfferMerge, activeOffer })
        );
    };
  }
}
