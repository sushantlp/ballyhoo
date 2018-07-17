import { combineReducers } from "redux";
// import { loadingBarReducer } from "react-redux-loading-bar";

import { cityLocality } from "./cityLocalityReducer";
import { categoryFilter } from "./categoryFilterReducer";
import { discoverFilter } from "./discoverFilterReducer";
import { facebookEvent } from "./facebookEventReducer";

export default combineReducers({
  // loadingBar: loadingBarReducer,
  cityLocality,
  categoryFilter,
  discoverFilter,
  facebookEvent
});
