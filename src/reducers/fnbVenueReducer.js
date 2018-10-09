import { actionType } from "../actions/fnbVenueAction";

const initialState = {
  fnbVenue: {},
  status: "START",
  msg: ""
};

export function fnbVenue(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbVenue:
      if (action.fnbVenue.hasOwnProperty("error")) {
        return {
          ...state,
          fnbVenue: {},
          status: "FAIL",
          msg: action.fnbVenue.error.ballyhoo
          
        };
      } else {
        return {
          ...state,
          fnbVenue: action.fnbVenue,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
