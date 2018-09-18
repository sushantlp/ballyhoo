import { actionType } from "../actions/newCategoryPaytmAction";

const initialState = {
  newCategoryPaytm: {}
};

export function newCategoryPaytm(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryPaytm:
      if (action.newCategoryPaytm.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryPaytm: {}
        };
      } else {
        return {
          ...state,
          newCategoryPaytm: action.newCategoryPaytm
        };
      }
    default:
      return state;
  }
}
