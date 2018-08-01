import { actionType } from "../actions/oldOfferingAction";

const initialState = {
  oldOffering: {},
  level: 0
};

export function oldOffering(state = initialState, action) {
  switch (action.type) {
    case actionType.oldOffering:
      if (action.oldOffering.hasOwnProperty("message")) {
        return {
          ...state,
          oldOffering: action.oldOffering.message.ballyhoo.deal,
          level: parseInt(
            action.oldOffering.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          oldOffering: [],
          level: 0
        };
      }

    case actionType.oldOfferingMerge:
      if (action.oldOffering.hasOwnProperty("message")) {
        let previous = state.oldOffering;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          oldOffering: previous.concat(
            action.oldOffering.message.ballyhoo.deal
          ),
          level: parseInt(
            action.oldOffering.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          oldOffering: [],
          level: 0
        };
      }

    default:
      return state;
  }
}
