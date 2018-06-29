import { actionsType } from "../actions/cityLocalityAction";

const initialState = {
  cityLocality: []
};

export function search(state = initialState, action) {
  switch (action.type) {
    case actionsType.cityLocality:
      return {
        ...state,
        videos: action.videos.results
      };
    default:
      return state;
  }
}
