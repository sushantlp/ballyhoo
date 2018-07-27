import { actionType } from "../actions/activeOfferAction";

const initialState = {
  activeOffer: {},
  level: 0
};

export function activeOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.activeOffer:
      if (action.activeOffer.hasOwnProperty("message")) {
        return {
          ...state,
          activeOffer: action.activeOffer.message.ballyhoo.deal,
          level: parseInt(action.activeOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          activeOffer: {},
          level: 0
        };
      }

    case actionType.activeOfferMerge:
      if (action.activeOffer.hasOwnProperty("message")) {
        let previous = state.activeOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          activeOffer: previous.concat(
            action.activeOffer.message.ballyhoo.deal
          ),
          level: parseInt(action.activeOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          activeOffer: {},
          level: 0
        };
      }
    default:
      return state;
  }
}
