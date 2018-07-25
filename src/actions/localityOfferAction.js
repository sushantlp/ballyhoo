import api from "../utils/api";

export const actionType = {
  localityOffer: "LOCALITY_OFFER"
};

export function localityOfferData(localityId, level) {
  return dispatch => {
    api
      .localityOfferApi(localityId, level)
      .then(localityOffer =>
        dispatch({ type: actionType.localityOffer, localityOffer })
      );
  };
}
