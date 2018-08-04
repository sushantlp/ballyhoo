import api from "../utils/api";

export const actionType = {
  newHashtagOffer: "NEW_HASHTAG_OFFER",
  newHashtagOfferMerge: "NEW_HASHTAG_OFFER_MERGE"
};

export function newHashtagOfferData(screenId, cityId, localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .newHashtagOfferApi(screenId, cityId, localityId, level)
        .then(newHashtagOffer =>
          dispatch({ type: actionType.newHashtagOffer, newHashtagOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .newHashtagOfferApi(screenId, cityId, localityId, level)
        .then(newHashtagOffer =>
          dispatch({ type: actionType.newHashtagOfferMerge, newHashtagOffer })
        );
    };
  }
}
