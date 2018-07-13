import { actionType } from "../actions/categoryFilterAction";

const initialState = {
  categoryFilter: {}
};

export function categoryFilter(state = initialState, action) {
  console.log(actionType.categoryFilter);
  switch (action.type) {
    case actionType.categoryFilter:
      return {
        ...state,
        categoryFilter: action.categoryFilter
      };
    default:
      return state;
  }
}
