import { actionType } from "../actions/fnbPaytmAction";

const initialState = {
  fnbPaytm: {}
};

export function fnbPaytm(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbPaytm:
      if (action.fnbPaytm.hasOwnProperty("error")) {
        return {
          ...state,
          fnbPaytm: {}
        };
      } else {
        return {
          ...state,
          fnbPaytm: action.fnbPaytm
        };
      }
    default:
      return state;
  }
}
