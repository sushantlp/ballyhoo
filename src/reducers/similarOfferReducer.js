import { actionType } from "../actions/similarOfferAction";

const initialState = {
  similarOffer: {}
};

export function similarOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.similarOffer:
      if (action.similarOffer.hasOwnProperty("message")) {
        return {
          ...state,
          similarOffer: action.similarOffer
        };
      } else {
        return {
          ...state,
          similarOffer: {}
        };
      }
    default:
      return state;
  }
}
