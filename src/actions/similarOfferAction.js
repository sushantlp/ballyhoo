import api from "../utils/api";

export const actionType = {
	similarOffer: "SIMILAR_OFFER"
};

export function getSimilarOffer(merchantId, offeringId) {
	return dispatch => {
		api.similarOfferApi(merchantId, offeringId).then(similarOffer =>
			dispatch({ type: actionType.similarOffer, similarOffer })
		);
	};
}
