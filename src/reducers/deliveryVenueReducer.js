import { actionType } from "../actions/deliveryVenueAction";

const initialState = {
  deliveryVenue: {}
};

export function deliveryVenue(state = initialState, action) {
  switch (action.type) {
    case actionType.deliveryVenue:
      if (action.deliveryVenue.hasOwnProperty("error")) {
        return {
          ...state,
          deliveryVenue: {}
        };
      } else {
        return {
          ...state,
          deliveryVenue: action.deliveryVenue
        };
      }
    default:
      return state;
  }
}
