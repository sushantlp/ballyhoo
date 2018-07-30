import { actionType } from "../actions/discoverNewAction";

const initialState = {
  discoverNewOffer: {},
  level: 0
};

export function discoverNewOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.discoverNewOffer:
      if (action.discoverNewOffer.hasOwnProperty("message")) {
        return {
          ...state,
          discoverNewOffer: action.discoverNewOffer.message.ballyhoo.deal,
          level: parseInt(
            action.discoverNewOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          discoverNewOffer: {},
          level: 0
        };
      }

    case actionType.discoverNewOfferMerge:
      if (action.discoverNewOffer.hasOwnProperty("message")) {
        let previous = state.discoverNewOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          discoverNewOffer: previous.concat(
            action.discoverNewOffer.message.ballyhoo.deal
          ),
          level: parseInt(
            action.discoverNewOffer.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          discoverNewOffer: {},
          level: 0
        };
      }
    default:
      return state;
  }
}
