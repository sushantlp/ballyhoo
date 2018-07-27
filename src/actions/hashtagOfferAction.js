import api from "../utils/api";

export const actionType = {
  hashtagOffer: "HASHTAG_OFFER",
  hashtagOfferMerge: "HASHTAG_OFFER_MERGE"
};

export function hashtagOfferData(hashtagId, cityId, localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .hashtagOfferApi(hashtagId, cityId, localityId, level)
        .then(hashtagOffer =>
          dispatch({ type: actionType.hashtagOffer, hashtagOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .hashtagOfferApi(hashtagId, cityId, localityId, level)
        .then(hashtagOffer =>
          dispatch({ type: actionType.hashtagOfferMerge, hashtagOffer })
        );
    };
  }
}
