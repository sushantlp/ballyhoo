import { actionType } from "../actions/userRecordAction";

const initialState = {
  userRecord: {}
};

export function userRecord(state = initialState, action) {
  switch (action.type) {
    case actionType.userRecord:
      if (action.userRecord.hasOwnProperty("error")) {
        return {
          ...state,
          userRecord: {}
        };
      } else {
        return {
          ...state,
          userRecord: action.userRecord
        };
      }
    default:
      return state;
  }
}
