import { combineReducers } from "redux";

import { cityLocality } from "./cityLocalityReducer";
import { categoryFilter } from "./categoryFilterReducer";

export default combineReducers({ cityLocality, categoryFilter });
