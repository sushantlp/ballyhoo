import api from "../utils/api";

export const actionType = {
  newHashtagOffer: "HASHTAG_OFFER",
  newHashtagOfferMerge: "HASHTAG_OFFER_MERGE"
};

export function newHashtagOfferData(
  hashtagId,
  cityId,
  localityId,
  level,
  flag
) {
  if (flag) {
    return dispatch => {
      api
        .newHashtagOfferApi(hashtagId, cityId, localityId, level)
        .then(newHashtagOffer =>
          dispatch({ type: actionType.newHashtagOffer, newHashtagOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .newHashtagOfferApi(hashtagId, cityId, localityId, level)
        .then(newHashtagOffer =>
          dispatch({ type: actionType.newHashtagOfferMerge, newHashtagOffer })
        );
    };
  }
}
