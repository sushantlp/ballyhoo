import { actionType } from "../actions/newCategoryPaytmAction";

const initialState = {
  newCategoryPaytm: {},
  status: "START",
  msg: ""
};

export function newCategoryPaytm(state = initialState, action) {
  switch (action.type) {
    case actionType.newCategoryPaytm:
      if (action.newCategoryPaytm.hasOwnProperty("error")) {
        return {
          ...state,
          newCategoryPaytm: {},
          status: "FAIL",
          msg: action.newCategoryPaytm.error.ballyhoo
        };
      } else {
        return {
          ...state,
          newCategoryPaytm: action.newCategoryPaytm,
          status: "SUCCESS",
          msg: "successful"
        };
      }
    default:
      return state;
  }
}
