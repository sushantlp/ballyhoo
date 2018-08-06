import api from "../utils/api";

export const actionType = {
  collectionNewOffer: "COLLECTION_NEW_OFFER",
  collectionNewOfferMerge: "COLLECTION_NEW_OFFER_MERGE"
};

export function collectionNewOfferData(
  screenId,
  cityId,
  localityId,
  level,
  flag
) {
  if (flag) {
    return dispatch => {
      api
        .collectionNewOfferApi(screenId, cityId, localityId, level)
        .then(collectionNewOffer =>
          dispatch({ type: actionType.collectionNewOffer, collectionNewOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .collectionNewOfferApi(screenId, cityId, localityId, level)
        .then(collectionNewOffer =>
          dispatch({
            type: actionType.collectionNewOfferMerge,
            collectionNewOffer
          })
        );
    };
  }
}
