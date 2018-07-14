import api from "../utils/api";

export const actionType = {
  trendingMerchant: "TRENDING_MERCHANT"
};

export function get() {
  return dispatch => {
    api
      .trendingMerchantApi(cityId)
      .then(trendingMerchant =>
        dispatch({ type: actionType.trendingMerchant, trendingMerchant })
      );
  };
}
