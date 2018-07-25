import api from "../utils/api";

export const actionType = {
  yoloOffer: "YOLO_OFFER"
};

export function yoloOfferData(cityId, localityId, level) {
  return dispatch => {
    api
      .yoloOfferApi(cityId, localityId, level)
      .then(yoloOffer => dispatch({ type: actionType.yoloOffer, yoloOffer }));
  };
}
