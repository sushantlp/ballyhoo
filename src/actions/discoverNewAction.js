import api from "../utils/api";

export const actionType = {
  discoverNewOffer: "DISCOVER_NEW_OFFER",
  discoverNewOfferMerge: "DISCOVER_NEW_OFFER_MERGE"
};

export function discoverNewOfferData(tabId, cityId, localityId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .discoverNewOfferApi(tabId, cityId, localityId, level)
        .then(discoverNewOffer =>
          dispatch({ type: actionType.discoverNewOffer, discoverNewOffer })
        );
    };
  } else {
    return dispatch => {
      api
        .discoverOlddiscoverNewOfferApiOfferApi(
          tabId,
          cityId,
          localityId,
          level
        )
        .then(discoverNewOffer =>
          dispatch({ type: actionType.discoverNewOfferMerge, discoverNewOffer })
        );
    };
  }
}
