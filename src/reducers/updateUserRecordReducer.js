import { actionType } from "../actions/updateUserRecordAction";

const initialState = {
  updateUserRecord: {}
};

export function updateUserRecord(state = initialState, action) {
  switch (action.type) {
    case actionType.updateUserRecord:
      if (action.updateUserRecord.hasOwnProperty("error")) {
        return {
          ...state,
          updateUserRecord: {}
        };
      } else {
        return {
          ...state,
          updateUserRecord: action.updateUserRecord
        };
      }
    default:
      return state;
  }
}
