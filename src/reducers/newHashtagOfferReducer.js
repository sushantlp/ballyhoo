import { actionType } from "../actions/newHashtagOfferAction";

const initialState = {
  newHashtagOffer: {},
  level: 0
};

export function newHashtagOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.newHashtagOffer:
      if (action.newHashtagOffer.hasOwnProperty("message")) {
        return {
          ...state,
          newHashtagOffer: action.newHashtagOffer.message.ballyhoo.deal,
          level: parseInt(
            action.newHashtagOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          newHashtagOffer: {},
          level: 0
        };
      }

    case actionType.newHashtagOfferMerge:
      if (action.newHashtagOffer.hasOwnProperty("message")) {
        let previous = state.newHashtagOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          newHashtagOffer: previous.concat(
            action.newHashtagOffer.message.ballyhoo.deal
          ),
          level: parseInt(
            action.newHashtagOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          newHashtagOffer: {},
          level: 0
        };
      }
    default:
      return state;
  }
}
