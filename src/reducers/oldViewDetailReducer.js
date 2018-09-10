import { actionType } from "../actions/oldViewDetailAction";

const initialState = {
  oldViewDetail: {}
};

export function oldViewDetail(state = initialState, action) {
  switch (action.type) {
    case actionType.oldViewDetail:
      if (action.oldViewDetail.hasOwnProperty("message")) {
        return {
          ...state,
          oldViewDetail: action.oldViewDetail.message.ballyhoo
        };
      } else {
        return {
          ...state,
          oldViewDetail: {}
        };
      }
    default:
      return state;
  }
}
