import { actionType } from "../actions/trendingMerchantAction";

const initialState = {
  trendingMerchant: {}
};

export function discoverFilter(state = initialState, action) {
  switch (action.type) {
    case actionType.trendingMerchant:
      if (action.trendingMerchant.hasOwnProperty("message")) {
        return {
          ...state,
          trendingMerchant: action.trendingMerchant.message.ballyhoo
        };
      } else {
        return {
          ...state,
          trendingMerchant: action.trendingMerchant
        };
      }

    default:
      return state;
  }
}
