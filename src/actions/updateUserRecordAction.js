import api from "../utils/api";

export const actionType = {
  updateUserRecord: "UPDATE_USER_RECORD"
};

export function postUpdateUserRecord(
  mobile,
  firstName,
  lastName,
  email,
  birth,
  gender,
  token
) {
  return dispatch => {
    api
      .updateUserRecordApi(
        mobile,
        firstName,
        lastName,
        email,
        birth,
        gender,
        token
      )
      .then(updateUserRecord =>
        dispatch({ type: actionType.updateUserRecord, updateUserRecord })
      );
  };
}
