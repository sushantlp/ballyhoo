import { actionType } from "../actions/newViewDetailAction";

const initialState = {
  newViewDetail: {}
};

export function newViewDetail(state = initialState, action) {
  switch (action.type) {
    case actionType.newViewDetail:
      if (action.newViewDetail.hasOwnProperty("message")) {
        return {
          ...state,
          newViewDetail: action.newViewDetail.message.ballyhoo
        };
      } else {
        return {
          ...state,
          newViewDetail: {}
        };
      }
    default:
      return state;
  }
}
