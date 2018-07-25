import { actionType } from "../actions/oldOfferingAction";

const initialState = {
  oldOffering: {}
};

export function oldOffering(state = initialState, action) {
  switch (action.type) {
    case actionType.oldOffering:
      if (action.oldOffering.hasOwnProperty("message")) {
        let previous = state.oldOffering;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          oldOffering: previous.concat(action.oldOffering.message.ballyhoo)
        };
      } else {
        return {
          ...state,
          oldOffering: {}
        };
      }
    default:
      return state;
  }
}
