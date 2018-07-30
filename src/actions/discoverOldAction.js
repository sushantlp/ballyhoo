import api from "../utils/api";

export const actionType = {
  discoverOldOffer: "DISCOVER_OLD_OFFER",
  discoverOldOfferMerge: "DISCOVER_OLD_OFFER_MERGE"
};

export function discoverOldOfferData(tabId, cityId, localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .discoverOldOfferApi(tabId, cityId, localityId, level)
        .then(discoverOldOffer =>
          dispatch({ type: actionType.discoverOldOffer, discoverOldOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .discoverOldOfferApi(tabId, cityId, localityId, level)
        .then(discoverOldOffer =>
          dispatch({ type: actionType.discoverOldOfferMerge, discoverOldOffer })
        );
    };
  }
}
