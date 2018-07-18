import merge from "lodash/merge";

import { actionType } from "../actions/facebookEventAction";

const initialState = {
  facebookEvent: {},
  end: 0,
  skip: 0
};

export function facebookEvent(state = initialState, action) {
  switch (action.type) {
    case actionType.facebookEvent:
      if (action.facebookEvent.hasOwnProperty("message")) {
        return {
          ...state,
          facebookEvent: action.facebookEvent.message.ballyhoo.posts,
          end: action.facebookEvent.message.ballyhoo.end,
          skip: action.facebookEvent.message.ballyhoo.skip
        };
      } else {
        return {
          ...state,
          facebookEvent: {},
          end: 0,
          skip: 0
        };
      }

    case actionType.facebookMergeData:
      if (action.facebookEvent.hasOwnProperty("message")) {
        // Create our new object
        const facebook = {
          facebookEvent: action.facebookEvent.message.ballyhoo.posts,
          end: action.facebookEvent.message.ballyhoo.end,
          skip: action.facebookEvent.message.ballyhoo.skip
        };

        return merge({}, state, facebook);
      } else {
        return {
          ...state,
          facebookEvent: {},
          end: 0,
          skip: 0
        };
      }

    default:
      return state;
  }
}
