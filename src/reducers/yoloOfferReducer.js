import { actionType } from "../actions/yoloOfferAction";

const initialState = {
  yoloOffer: {},
  level: 0
};

export function yoloOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.yoloOffer:
      if (action.yoloOffer.hasOwnProperty("message")) {
        return {
          ...state,
          yoloOffer: action.yoloOffer.message.ballyhoo.deal,
          level: parseInt(action.yoloOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          yoloOffer: {},
          level: 0
        };
      }

    case actionType.yoloOfferMerge:
      if (action.yoloOffer.hasOwnProperty("message")) {
        let previous = state.yoloOffer;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          yoloOffer: previous.concat(action.yoloOffer.message.ballyhoo.deal),
          level: parseInt(action.yoloOffer.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          yoloOffer: {},
          level: 0
        };
      }
    default:
      return state;
  }
}
