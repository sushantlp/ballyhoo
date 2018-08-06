import api from "../utils/api";

export const actionType = {
  localityOldOffer: "LOCALITY_OLD_OFFER",
  localityOldOfferMerge: "LOCALITY_OLD_OFFER_MERGE"
};

export function localityOldOfferData(localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .localityOfferApi(localityId, level)
        .then(localityOldOffer =>
          dispatch({ type: actionType.localityOldOffer, localityOldOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .localityOfferApi(localityId, level)
        .then(localityOldOffer =>
          dispatch({ type: actionType.localityOldOfferMerge, localityOldOffer })
        );
    };
  }
}
