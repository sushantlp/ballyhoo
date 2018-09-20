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
          registerNewUser: false
        };
      } else {
        return {
          ...state,
          registerNewUser: true
        };
      }
    default:
      return state;
  }
}
