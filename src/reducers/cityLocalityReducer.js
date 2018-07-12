import { actionsType } from "../actions/cityLocalityAction";

const initialState = {
  cityLocality: {}
};

export function cityLocality(state = initialState, action) {
  switch (action.type) {
    case actionsType.cityLocality:
      return {
        ...state,
        cityLocality: action.cityLocality
      };
    default:
      return state;
  }
}
