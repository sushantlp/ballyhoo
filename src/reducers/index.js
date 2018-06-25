import { combineReducers } from "redux";

import { trending } from "./trendingReducer";
import { nowPlaying } from "./nowPlayingReducer";
import { player } from "./playerReducer";
import { search } from "./searchReducer";

export default combineReducers({ search, trending, nowPlaying, player });
