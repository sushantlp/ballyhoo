import { actionType } from "../actions/newCategoryAction";

const initialState = {
  newCategory: {},
  level: 0
};

export function newCategory(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategory:
      if (action.newCategory.hasOwnProperty("message")) {
        return {
          ...state,
          newCategory: action.newCategory.message.ballyhoo.offers,
          level: parseInt(
            action.newCategory.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          newCategory: [],
          level: 0
        };
      }

    case actionType.newCategoryMerge:
      if (action.newCategory.hasOwnProperty("message")) {
        let previous = state.newCategory;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          newCategory: previous.concat(
            action.newCategory.message.ballyhoo.offers
          ),
          level: parseInt(
            action.newCategory.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          newCategory: [],
          level: 0
        };
      }

    default:
      return state;
  }
}
