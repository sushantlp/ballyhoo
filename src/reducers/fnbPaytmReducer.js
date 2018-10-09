import { actionType } from "../actions/fnbPaytmAction";

const initialState = {
  fnbPaytm: {},
  status: "START",
  msg: ""
};

export function fnbPaytm(state = initialState, action) {
  switch (action.type) {
    case actionType.fnbPaytm:
      if (action.fnbPaytm.hasOwnProperty("error")) {
        return {
          ...state,
          fnbPaytm: {},
          status: "FAIL",
          msg: action.fnbPaytm.error.ballyhoo
        };
      } else {
        return {
          ...state,
          fnbPaytm: action.fnbPaytm,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
