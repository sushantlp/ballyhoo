import { actionType } from "../actions/oldCategoryAction";

const initialState = {
  oldCategory: {}
};

export function oldCategory(state = initialState, action) {
  switch (action.type) {
    case actionType.oldCategory:
      if (action.oldCategory.hasOwnProperty("message")) {
        let previous = state.oldCategory;
        if (Object.keys(previous).length === 0) {
          return {
            ...state,
            oldCategory: action.oldCategory.message.ballyhoo
          };
        } else {
          previous = state.oldCategory.deal;
          return {
            ...state,
            oldCategory: previous.concat(action.oldCategory.message.ballyhoo)
          };
        }
      } else {
        return {
          ...state,
          oldCategory: {}
        };
      }
    default:
      return state;
  }
}
