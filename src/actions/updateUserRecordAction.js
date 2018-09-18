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
  gender
) {
  return dispatch => {
    api
      .updateUserRecordApi(mobile, firstName, lastName, email, birth, gender)
      .then(updateUserRecord =>
        dispatch({ type: actionType.updateUserRecord, updateUserRecord })
      );
  };
}
