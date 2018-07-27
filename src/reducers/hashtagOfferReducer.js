import { actionType } from "../actions/hashtagOfferAction";

const initialState = {
  hashtagOffer: {},
  level: 0
};

export function hashtagOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.hashtagOffer:
      if (action.hashtagOffer.hasOwnProperty("message")) {
        return {
          ...state,
          hashtagOffer: action.hashtagOffer.message.ballyhoo.deal,
          level: parseInt(action.hashtagOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          hashtagOffer: {},
          level: 0
        };
      }

    case actionType.hashtagOfferMerge:
      if (action.hashtagOffer.hasOwnProperty("message")) {
        let previous = state.hashtagOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          hashtagOffer: previous.concat(
            action.hashtagOffer.message.ballyhoo.deal
          ),
          level: parseInt(action.hashtagOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          hashtagOffer: {},
          level: 0
        };
      }
    default:
      return state;
  }
}
