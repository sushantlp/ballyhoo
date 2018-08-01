import { actionType } from "../actions/discoverFilterAction";

const initialState = {
  discoverFilter: {}
};

export function discoverFilter(state = initialState, action) {
  switch (action.type) {
    case actionType.discoverFilter:
      if (action.discoverFilter.hasOwnProperty("message")) {
        return {
          ...state,
          discoverFilter: action.discoverFilter.message.ballyhoo
        };
      } else {
        return {
          ...state,
          discoverFilter: []
        };
      }

    default:
      return state;
  }
}
