import api from "../utils/api";

export const actionType = {
  yoloOffer: "YOLO_OFFER",
  yoloOfferMerge: "YOLO_OFFER_MERGE"
};

export function yoloOfferData(cityId, localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .yoloOfferApi(cityId, localityId, level)
        .then(yoloOffer => dispatch({ type: actionType.yoloOffer, yoloOffer }));
    };
  } else {
    return dispatch => {
      api
        .yoloOfferApi(cityId, localityId, level)
        .then(yoloOffer =>
          dispatch({ type: actionType.yoloOfferMerge, yoloOffer })
        );
    };
  }
}
