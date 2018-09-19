import { actionType } from "../actions/authenticationAction";

const initialState = {
  auth: false
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case actionType.registerSuccess:
      return {
        ...state,
        auth: action.bool
      };

    case actionType.registerFailure:
      return {
        ...state,
        auth: action.bool
      };
    default:
      return state;
  }
}
