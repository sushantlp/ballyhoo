import { actionType } from "../actions/activeOfferAction";

const initialState = {
  activeOffer: {}
};

export function activeOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.activeOffer:
      if (action.activeOffer.hasOwnProperty("message")) {
        let previous = state.activeOffer;
        if (Object.keys(previous).length === 0) {
          return {
            ...state,
            activeOffer: action.activeOffer.message.ballyhoo
          };
        }
        return {
          ...state,
          activeOffer: previous.concat(action.activeOffer.message.ballyhoo)
        };
      } else {
        return {
          ...state,
          activeOffer: {}
        };
      }
    default:
      return state;
  }
}
