import api from "../utils/api";

export const actionType = {
  userRecord: "USER_RECORD"
};

export function getUserRecord(mobile) {
  return dispatch => {
    api
      .userRecordApi(mobile)
      .then(userRecord =>
        dispatch({ type: actionType.userRecord, userRecord })
      );
  };
}
