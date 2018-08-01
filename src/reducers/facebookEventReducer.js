import { actionType } from "../actions/facebookEventAction";

const initialState = {
  facebookEvent: {},
  skip: 0,
  end: 0
};

export function facebookEvent(state = initialState, action) {
  switch (action.type) {
    case actionType.facebookEvent:
      if (action.facebookEvent.hasOwnProperty("message")) {
        return {
          ...state,
          facebookEvent: action.facebookEvent.message.ballyhoo.posts,
          skip: action.facebookEvent.message.ballyhoo.skip,
          end: action.facebookEvent.message.ballyhoo.end
        };
      } else {
        return {
          ...state,
          facebookEvent: [],
          skip: 0,
          end: 0
        };
      }

    case actionType.facebookMergeData:
      if (action.facebookEvent.hasOwnProperty("message")) {
        let previous = state.facebookEvent;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          facebookEvent: previous.concat(
            action.facebookEvent.message.ballyhoo.posts
          ),
          skip: action.facebookEvent.message.ballyhoo.skip,
          end: action.facebookEvent.message.ballyhoo.end
        };
      } else {
        return {
          ...state,
          facebookEvent: [],
          skip: 0,
          end: 0
        };
      }

    default:
      return state;
  }
}
