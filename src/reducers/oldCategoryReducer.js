import { actionType } from "../actions/oldCategoryAction";

const initialState = {
  oldCategory: {},
  level: 0
};

export function oldCategory(state = initialState, action) {
  switch (action.type) {
    case actionType.oldCategory:
      if (action.oldCategory.hasOwnProperty("message")) {
        return {
          ...state,
          oldCategory: action.oldCategory.message.ballyhoo.deal,
          level: parseInt(action.oldCategory.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          oldCategory: {},
          level: 0
        };
      }

    case actionType.oldCategoryMerge:
      if (action.oldCategory.hasOwnProperty("message")) {
        let previous = state.oldCategory;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          oldCategory: previous.concat(
            action.oldCategory.message.ballyhoo.deal
          ),
          level: parseInt(action.oldCategory.message.ballyhoo.ballyhoo_level)
        };
      } else {
        return {
          ...state,
          oldCategory: {},
          level: 0
        };
      }

    default:
      return state;
  }
}
