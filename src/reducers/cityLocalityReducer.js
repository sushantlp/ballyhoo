import { actionType } from "../actions/cityLocalityAction";

const initialState = {
  cityLocality: {}
};

export function cityLocality(state = initialState, action) {
  switch (action.type) {
    case actionType.cityLocality:
      return {
        ...state,
        cityLocality: action.cityLocality
      };
    default:
      return state;
  }
}
