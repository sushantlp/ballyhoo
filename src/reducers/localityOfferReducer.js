import { actionType } from "../actions/localityOfferAction";

const initialState = {
  localityOffer: {},
  level: 0
};

export function localityOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.localityOffer:
      if (action.localityOffer.hasOwnProperty("message")) {
        return {
          ...state,
          localityOffer: action.localityOffer.message.ballyhoo.deal,
          level: parseInt(action.localityOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          localityOffer: {},
          level: 0
        };
      }

    case actionType.localityOfferMerge:
      if (action.localityOffer.hasOwnProperty("message")) {
        let previous = state.localityOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          localityOffer: previous.concat(
            action.localityOffer.message.ballyhoo.deal
          ),
          level: parseInt(action.localityOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          localityOffer: {},
          level: 0
        };
      }
    default:
      return state;
  }
}
