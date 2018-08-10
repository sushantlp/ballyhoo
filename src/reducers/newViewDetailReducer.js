import { actionType } from "../actions/newViewDetailAction";

const initialState = {
  newViewDetail: {}
};

export function newViewDetail(state = initialState, action) {
  switch (action.type) {
    case actionType.newViewDetail:
      return {
        ...state,
        newViewDetail: action.newViewDetail
      };
    default:
      return state;
  }
}
