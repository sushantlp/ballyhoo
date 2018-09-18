import { combineReducers } from "redux";

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

import { newViewDetail } from "./newViewDetailReducer";
import { oldViewDetail } from "./oldViewDetailReducer";

import { similarOffer } from "./similarOfferReducer";

import { paymentMode } from "./paymentModeReducer";

import { deliveryAdditionalCharge } from "./deliveryAdditionalChargeReducer";
import { otherAdditionalCharge } from "./otherAdditionalChargeReducer";

import { userRecord } from "./userRecordReducer";
import { updateUserRecord } from "./updateUserRecordReducer";
import { registerNewUser } from "./registerNewUserReducer";
import { verifyOtp } from "./verifyOtpReducer";

export default combineReducers({
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
  localityOldOffer,
  newViewDetail,
  oldViewDetail,
  similarOffer,
  paymentMode,
  deliveryAdditionalCharge,
  otherAdditionalCharge,
  userRecord,
  updateUserRecord,
  registerNewUser,
  verifyOtp
});
