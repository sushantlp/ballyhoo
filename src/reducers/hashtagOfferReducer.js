import { actionType } from "../actions/hashtagOfferAction";

const initialState = {
  hashtagOffer: {}
};

export function hashtagOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.hashtagOffer:
      if (action.hashtagOffer.hasOwnProperty("message")) {
        let previous = state.hashtagOffer;
        if (Object.keys(previous).length === 0) {
          return {
            ...state,
            hashtagOffer: action.hashtagOffer.message.ballyhoo
          };
        }
        return {
          ...state,
          hashtagOffer: previous.concat(action.hashtagOffer.message.ballyhoo)
        };
      } else {
        return {
          ...state,
          hashtagOffer: {}
        };
      }
    default:
      return state;
  }
}
