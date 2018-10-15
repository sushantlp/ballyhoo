import { actionType } from "../actions/saloonReservationAction";

const initialState = {
  saloonReservation: {},
  status: "START",
  msg: ""
};

export function saloonReservation(state = initialState, action) {
  switch (action.type) {
    case actionType.saloonReservation:
      if (action.saloonReservation.hasOwnProperty("error")) {
        return {
          ...state,
          saloonReservation: {},
          status: "FAIL",
          msg: action.saloonReservation.error.ballyhoo
        };
      } else {
        return {
          ...state,
          saloonReservation: action.saloonReservation,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
