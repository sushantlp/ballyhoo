import { actionType } from "../actions/facebookEventAction";

const initialState = {
  facebookEvent: {}
};

export function facebookEvent(state = initialState, action) {
  switch (action.type) {
    case actionType.facebookEvent:
      if (action.facebookEvent.hasOwnProperty("message")) {
        return {
          ...state,
          facebookEvent: action.facebookEvent.message.ballyhoo
        };
      } else {
        return {
          ...state,
          facebookEvent: action.facebookEvent
        };
      }

    default:
      return state;
  }
}
