import { actionType } from "../actions/offerningDataAction";

const initialState = {
  offerningData: {}
};

export function offerningData(state = initialState, action) {
  switch (action.type) {
    case actionType.offerningData:
      if (action.offerningData.hasOwnProperty("message")) {
        const previous = state.offerningData;
        return {
          ...state,
          offerningData: previous.concat(action.offerningData.message.ballyhoo)
        };
      } else {
        return {
          ...state,
          offerningData: {}
        };
      }
    default:
      return state;
  }
}
