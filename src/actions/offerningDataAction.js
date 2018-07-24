import api from "../utils/api";

export const actionType = {
  offerningData: "OFFERNING_DATA"
};

export function getOfferningData(cityId, localityId, offerningId, level) {
  return dispatch => {
    api
      .readOfferningApi(cityId, localityId, offerningId, level)
      .then(offerningData =>
        dispatch({ type: actionType.offerningData, offerningData })
      );
  };
}
