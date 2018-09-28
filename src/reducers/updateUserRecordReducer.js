import { actionType } from "../actions/updateUserRecordAction";

const initialState = {
  signal: {},
  msg: {}
};

export function updateUserRecord(state = initialState, action) {
  switch (action.type) {
    case actionType.updateUserRecord:
      if (action.updateUserRecord.hasOwnProperty("error")) {
        return {
          ...state,

          signal: false,
          msg: action.updateUserRecord.error.ballyhoo
        };
      } else {
        return {
          ...state,

          signal: true,
          msg: action.updateUserRecord.message.ballyhoo
        };
      }
    default:
      return state;
  }
}
