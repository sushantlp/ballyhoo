import { actionType } from "../actions/registerNewUserAction";

const initialState = {
  registerNewUser: {}
};

export function registerNewUser(state = initialState, action) {
  switch (action.type) {
    case actionType.registerNewUser:
      if (action.registerNewUser.hasOwnProperty("error")) {
        return {
          ...state,
          registerNewUser: {}
        };
      } else {
        return {
          ...state,
          registerNewUser: action.registerNewUser
        };
      }
    default:
      return state;
  }
}
