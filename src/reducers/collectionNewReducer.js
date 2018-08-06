import { actionType } from "../actions/collectionNewAction";

const initialState = {
  collectionNewOffer: {},
  level: 0
};

export function collectionNewOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.collectionNewOffer:
      if (action.collectionNewOffer.hasOwnProperty("message")) {
        return {
          ...state,
          collectionNewOffer: action.collectionNewOffer.message.ballyhoo.offers,
          level: parseInt(
            action.collectionNewOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          collectionNewOffer: [],
          level: 0
        };
      }

    case actionType.collectionNewOfferMerge:
      if (action.collectionNewOffer.hasOwnProperty("message")) {
        let previous = state.collectionNewOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          collectionNewOffer: previous.concat(
            action.collectionNewOffer.message.ballyhoo.offers
          ),
          level: parseInt(
            action.collectionNewOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          collectionNewOffer: [],
          level: 0
        };
      }
    default:
      return state;
  }
}
