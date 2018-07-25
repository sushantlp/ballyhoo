import api from "../utils/api";

export const actionType = {
  hashtagOffer: "HASHTAG_OFFER"
};

export function hashtagOfferData(hashtagId, cityId, localityId, level) {
  return dispatch => {
    api
      .hashtagOfferApi(hashtagId, cityId, localityId, level)
      .then(hashtagOffer =>
        dispatch({ type: actionType.hashtagOffer, hashtagOffer })
      );
  };
}
