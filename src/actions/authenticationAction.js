export const actionType = {
  //   registerRequest: "USERS_REGISTER_REQUEST",
  registerSuccess: "USERS_REGISTER_SUCCESS",
  registerFailure: "USERS_REGISTER_FAILURE"
};

export function registerSuccess(bool) {
  return { type: actionType.registerSuccess, bool };
}

export function registerFailure(bool) {
  return { type: actionType.registerFailure, bool };
}
