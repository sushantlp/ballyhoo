import api from "../utils/api";

export const actionType = {
  collectionOldOffer: "COLLECTION_OLD_OFFER",
  collectionOldOfferMerge: "COLLECTION_OLD_OFFER_MERGE"
};

export function collectionOldOfferData(
  screenId,
  cityId,
  localityId,
  level,
  flag
) {
  if (flag) {
    return dispatch => {
      api
        .collectionOldOfferApi(screenId, cityId, localityId, level)
        .then(collectionOldOffer =>
          dispatch({ type: actionType.collectionOldOffer, collectionOldOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .collectionOldOfferApi(screenId, cityId, localityId, level)
        .then(collectionOldOffer =>
          dispatch({
            type: actionType.collectionOldOfferMerge,
            collectionOldOffer
          })
        );
    };
  }
}
