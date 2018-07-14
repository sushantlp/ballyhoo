import { combineReducers } from "redux";

import { cityLocality } from "./cityLocalityReducer";
import { categoryFilter } from "./categoryFilterReducer";
import { discoverFilter } from "./discoverFilterReducer";

export default combineReducers({
  cityLocality,
  categoryFilter,
  discoverFilter
});
