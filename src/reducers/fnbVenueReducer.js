import { actionType } from "../actions/fnbVenueAction";

const initialState = {
  fnbVenue: {}
};

export function fnbVenue(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbVenue:
      if (action.fnbVenue.hasOwnProperty("error")) {
        return {
          ...state,
          fnbVenue: {}
        };
      } else {
        return {
          ...state,
          fnbVenue: action.fnbVenue
        };
      }
    default:
      return state;
  }
}
