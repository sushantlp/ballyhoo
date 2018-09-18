import { actionType } from "../actions/newCategoryVenueAction";

const initialState = {
  newCategoryVenue: {}
};

export function newCategoryVenue(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryVenue:
      if (action.newCategoryVenue.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryVenue: {}
        };
      } else {
        return {
          ...state,
          newCategoryVenue: action.newCategoryVenue
        };
      }
    default:
      return state;
  }
}
