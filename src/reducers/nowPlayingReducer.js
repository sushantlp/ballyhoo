import { actionType } from "../actions/nowPlayingActions";

const initialState = {
  nextSongs: [],
  suggestedSongs: [],
  dispatchNext: false,
  previousSongs: []
};

export function nowPlaying(state = initialState, action) {
  switch (action.type) {
    case actionType.songAdd:
    default:
      return state;
  }
}
