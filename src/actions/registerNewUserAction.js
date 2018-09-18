import api from "../utils/api";

export const actionType = {
  registerNewUser: "REGISTER_NEW_USER"
};

export function getRegisterNewUser(mobile, email) {
  return dispatch => {
    api
      .registerNewUserApi(mobile, email)
      .then(registerNewUser =>
        dispatch({ type: actionType.registerNewUser, registerNewUser })
      );
  };
}
