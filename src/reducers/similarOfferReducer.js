import { actionType } from "../actions/similarOfferAction";

const initialState = {
  similarOffer: {}
};

export function similarOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.similarOffer:
      return {
        ...state,
        similarOffer: action.similarOffer
      };
    default:
      return state;
  }
}
