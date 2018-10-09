import { actionType } from "../actions/newCategoryVenueAction";

const initialState = {
  newCategoryVenue: {},
  status: "START",
  msg: "successful"
};

export function newCategoryVenue(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryVenue:
      if (action.newCategoryVenue.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryVenue: {},
          status: "FAIL",
          msg: action.newCategoryVenue.error.ballyhoo
        };
      } else {
        return {
          ...state,
          newCategoryVenue: action.newCategoryVenue,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
