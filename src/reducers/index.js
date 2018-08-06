import { combineReducers } from "redux";
// import { loadingBarReducer } from "react-redux-loading-bar";

import { cityLocality } from "./cityLocalityReducer";
import { categoryFilter } from "./categoryFilterReducer";
import { discoverFilter } from "./discoverFilterReducer";
import { facebookEvent } from "./facebookEventReducer";
import { popularFilter } from "./popularFilterReducer";
import { popularLocality } from "./popularLocalityReducer";

import { localityOldOffer } from "./localityOldOfferReducer";

import { discoverOldOffer } from "./discoverOldReducer";
import { discoverNewOffer } from "./discoverNewReducer";

import { collectionOldOffer } from "./collectionOldReducer";
import { collectionNewOffer } from "./collectionNewReducer";

export default combineReducers({
  // loadingBar: loadingBarReducer,
  cityLocality,
  categoryFilter,
  discoverFilter,
  facebookEvent,
  popularFilter,
  popularLocality,
  discoverOldOffer,
  discoverNewOffer,
  collectionNewOffer,
  collectionOldOffer,
  localityOldOffer
});
