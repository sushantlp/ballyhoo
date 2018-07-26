import { actionType } from "../actions/localityOfferAction";

const initialState = {
  localityOffer: {}
};

export function localityOffer(state = initialState, action) {
  switch (action.type) {
    case actionType.localityOffer:
      if (action.localityOffer.hasOwnProperty("message")) {
        let previous = state.localityOffer;
        if (Object.keys(previous).length === 0) {
          return {
            ...state,
            localityOffer: action.localityOffer.message.ballyhoo
          };
        }
        return {
          ...state,
          localityOffer: previous.concat(action.localityOffer.message.ballyhoo)
        };
      } else {
        return {
          ...state,
          localityOffer: {}
        };
      }
    default:
      return state;
  }
}
