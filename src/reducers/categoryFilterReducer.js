import { actionType } from "../actions/categoryFilterAction";

const initialState = {
  categoryFilter: {}
};

export function categoryFilter(state = initialState, action) {
  switch (action.type) {
    case actionType.categoryFilter:
      if (action.categoryFilter.hasOwnProperty("message")) {
        return {
          ...state,
          categoryFilter: action.categoryFilter.message.ballyhoo
        };
      } else {
        return {
          ...state,
          categoryFilter: []
        };
      }

    default:
      return state;
  }
}
