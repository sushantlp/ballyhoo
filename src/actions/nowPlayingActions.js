import api from "../utils/api";

export const actionType = {
  songAdd: "SONG_ADD"
};

export function addSong(song) {
  return dispatch => dispatch({ type: actionType.songAdd, song });
}
