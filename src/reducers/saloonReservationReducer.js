import { actionType } from "../actions/saloonReservationAction";

const initialState = {
  saloonReservation: {}
};

export function saloonReservation(state = initialState, action) {
  switch (action.type) {
    case actionType.saloonReservation:
      if (action.saloonReservation.hasOwnProperty("error")) {
        return {
          ...state,
          saloonReservation: {}
        };
      } else {
        return {
          ...state,
          saloonReservation: action.saloonReservation
        };
      }
    default:
      return state;
  }
}
