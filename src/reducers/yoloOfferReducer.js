import { actionType } from "../actions/yoloOfferAction";

const initialState = {
  yoloOffer: {}
};

export function yoloOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.yoloOffer:
      if (action.yoloOffer.hasOwnProperty("message")) {
        let previous = state.yoloOffer;
        if (Object.keys(previous).length === 0) {
          return {
            ...state,
            yoloOffer: action.yoloOffer.message.ballyhoo
          };
        }
        return {
          ...state,
          yoloOffer: previous.concat(action.yoloOffer.message.ballyhoo)
        };
      } else {
        return {
          ...state,
          yoloOffer: {}
        };
      }
    default:
      return state;
  }
}
