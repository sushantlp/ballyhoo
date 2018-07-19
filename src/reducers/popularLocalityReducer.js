import { actionType } from "../actions/popularLocalityAction";

const initialState = {
  popularLocality: {}
};

export function popularLocality(state = initialState, action) {
  switch (action.type) {
    case actionType.popularLocality:
      if (action.popularLocality.hasOwnProperty("message")) {
        return {
          ...state,
          popularLocality: action.popularLocality.message.ballyhoo
        };
      } else {
        return {
          ...state,
          popularLocality: action.popularLocality
        };
      }

    default:
      return state;
  }
}
