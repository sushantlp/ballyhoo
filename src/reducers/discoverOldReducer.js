import { actionType } from "../actions/discoverOldAction";

const initialState = {
  discoverOldOffer: {},
  level: 0
};

export function discoverOldOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.discoverOldOffer:
      if (action.discoverOldOffer.hasOwnProperty("message")) {
        return {
          ...state,
          discoverOldOffer: action.discoverOldOffer.message.ballyhoo.deal,
          level: parseInt(
            action.discoverOldOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          discoverOldOffer: [],
          level: 0
        };
      }

    case actionType.discoverOldOfferMerge:
      if (action.discoverOldOffer.hasOwnProperty("message")) {
        let previous = state.discoverOldOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          discoverOldOffer: previous.concat(
            action.discoverOldOffer.message.ballyhoo.deal
          ),
          level: parseInt(
            action.discoverOldOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          discoverOldOffer: [],
          level: 0
        };
      }
    default:
      return state;
  }
}
