import { actionType } from "../actions/oldViewDetailAction";

const initialState = {
  oldViewDetail: {}
};

export function oldViewDetail(state = initialState, action) {
  switch (action.type) {
    case actionType.oldViewDetail:
      return {
        ...state,
        oldViewDetail: action.oldViewDetail
      };
    default:
      return state;
  }
}
