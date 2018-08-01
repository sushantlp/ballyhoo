import { actionType } from "../actions/newOfferingAction";

const initialState = {
  newOffering: {},
  level: 0
};

export function newOffering(state = initialState, action) {
  switch (action.type) {
    case actionType.newOffering:
      if (action.newOffering.hasOwnProperty("message")) {
        return {
          ...state,
          newOffering: action.newOffering.message.ballyhoo.offers,
          level: parseInt(
            action.newOffering.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          newOffering: [],
          level: 0
        };
      }

    case actionType.newOfferingMerge:
      if (action.newOffering.hasOwnProperty("message")) {
        let previous = state.newOffering;
        if (Object.keys(previous).length === 0) {
          previous = [];
        }

        return {
          ...state,
          newOffering: previous.concat(
            action.newOffering.message.ballyhoo.offers
          ),
          level: parseInt(
            action.newOffering.message.ballyhoo.ballyhoo_level,
            10
          )
        };
      } else {
        return {
          ...state,
          newOffering: [],
          level: 0
        };
      }

    default:
      return state;
  }
}
