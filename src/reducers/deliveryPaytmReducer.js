import { actionType } from "../actions/deliveryPaytmAction";

const initialState = {
  deliveryPaytm: {}
};

export function deliveryPaytm(state = initialState, action) {
  switch (action.type) {
    case actionType.deliveryPaytm:
      if (action.deliveryPaytm.hasOwnProperty("error")) {
        return {
          ...state,
          deliveryPaytm: {}
        };
      } else {
        return {
          ...state,
          deliveryPaytm: action.deliveryPaytm
        };
      }
    default:
      return state;
  }
}
