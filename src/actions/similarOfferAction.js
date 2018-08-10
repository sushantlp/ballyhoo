import api from "../utils/api";

export const actionType = {
	similarOffer: "SIMILAR_OFFER"
};

export function getSimilarOfferData(merchantId, offeringId) {
	return dispatch => {
		api.similarOfferApi(merchantId, offeringId).then(similarOffer =>
			dispatch({ type: actionType.similarOffer, similarOffer })
		);
	};
}
