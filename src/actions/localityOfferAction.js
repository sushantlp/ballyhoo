import api from "../utils/api";

export const actionType = {
  localityOffer: "LOCALITY_OFFER",
  localityOfferMerge: "LOCALITY_OFFER_MERGE"
};

export function localityOfferData(localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .localityOfferApi(localityId, level)
        .then(localityOffer =>
          dispatch({ type: actionType.localityOffer, localityOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .localityOfferApi(localityId, level)
        .then(localityOffer =>
          dispatch({ type: actionType.localityOfferMerge, localityOffer })
        );
    };
  }
}
