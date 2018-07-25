import { combineReducers } from "redux";
// import { loadingBarReducer } from "react-redux-loading-bar";

import { cityLocality } from "./cityLocalityReducer";
import { categoryFilter } from "./categoryFilterReducer";
import { discoverFilter } from "./discoverFilterReducer";
import { facebookEvent } from "./facebookEventReducer";
import { popularFilter } from "./popularFilterReducer";
import { popularLocality } from "./popularLocalityReducer";
import { oldOffering } from "./oldOfferingReducer";
import { hashtagOffer } from "./hashtagOfferReducer";
import { yoloOffer } from "./yoloOfferReducer";
import { localityOffer } from "./localityOfferReducer";
import { activeOffer } from "./activeOfferReducer";
import { oldCategory } from "./oldCategoryReducer";

export default combineReducers({
  // loadingBar: loadingBarReducer,
  cityLocality,
  categoryFilter,
  discoverFilter,
  facebookEvent,
  popularFilter,
  popularLocality,
  oldOffering,
  hashtagOffer,
  yoloOffer,
  localityOffer,
  activeOffer,
  oldCategory
});
