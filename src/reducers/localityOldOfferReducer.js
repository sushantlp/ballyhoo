import { actionType } from "../actions/localityOldOfferAction";

const initialState = {
  localityOldOffer: {},
  level: 0
};

export function localityOldOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.localityOldOffer:
      if (action.localityOldOffer.hasOwnProperty("message")) {
        return {
          ...state,
          localityOldOffer: action.localityOldOffer.message.ballyhoo.deal,
          level: parseInt(
            action.localityOldOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          localityOldOffer: [],
          level: 0
        };
      }

    case actionType.localityOldOfferMerge:
      if (action.localityOldOffer.hasOwnProperty("message")) {
        let previous = state.localityOldOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          localityOldOffer: previous.concat(
            action.localityOldOffer.message.ballyhoo.deal
          ),
          level: parseInt(
            action.localityOldOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          localityOldOffer: [],
          level: 0
        };
      }
    default:
      return state;
  }
}
