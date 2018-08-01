import { actionType } from "../actions/popularFilterAction";

const initialState = {
  popularFilter: {}
};

export function popularFilter(state = initialState, action) {
  switch (action.type) {
    case actionType.popularFilter:
      if (action.popularFilter.hasOwnProperty("message")) {
        return {
          ...state,
          popularFilter: action.popularFilter.message.ballyhoo
        };
      } else {
        return {
          ...state,
          popularFilter: []
        };
      }

    default:
      return state;
  }
}
