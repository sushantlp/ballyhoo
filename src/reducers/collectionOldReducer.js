import { actionType } from "../actions/collectionOldAction";

const initialState = {
  collectionOldOffer: {},
  level: 0
};

export function collectionOldOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.collectionOldOffer:
      if (action.collectionOldOffer.hasOwnProperty("message")) {
        return {
          ...state,
          collectionOldOffer: action.collectionOldOffer.message.ballyhoo.deal,
          level: parseInt(
            action.collectionOldOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          collectionOldOffer: [],
          level: 0
        };
      }

    case actionType.collectionOldOfferMerge:
      if (action.collectionOldOffer.hasOwnProperty("message")) {
        let previous = state.collectionOldOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          collectionOldOffer: previous.concat(
            action.collectionOldOffer.message.ballyhoo.deal
          ),
          level: parseInt(
            action.collectionOldOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          collectionOldOffer: [],
          level: 0
        };
      }
    default:
      return state;
  }
}
