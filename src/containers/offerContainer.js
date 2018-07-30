import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import OfferComponent from "../components/offerComponents";
import { oldOfferingData } from "../actions/oldOfferingAction";
import { activeOfferData } from "../actions/activeOfferAction";
import { hashtagOfferData } from "../actions/hashtagOfferAction";
import { oldCategoryData } from "../actions/oldCategoryAction";
import { localityOfferData } from "../actions/localityOfferAction";
import { yoloOfferData } from "../actions/yoloOfferAction";
import { discoverOldOfferData } from "../actions/discoverOldAction";
import { discoverNewOfferData } from "../actions/discoverNewAction";
import { getCityLocality } from "../actions/cityLocalityAction";
import { getCategoryFilter } from "../actions/categoryFilterAction";
import { getDiscoverFilter } from "../actions/discoverFilterAction";

function mapStateToProps(state) {
  return {
    oldOffering: state.oldOffering,
    activeOffer: state.activeOffer,
    hashtagOffer: state.hashtagOffer,
    oldCategory: state.oldCategory,
    localityOffer: state.localityOffer,
    yoloOffer: state.yoloOffer,
    discoverOldOffer: state.discoverOldOffer,
    discoverNewOffer: state.discoverNewOffer,
    categoryFilter: state.categoryFilter.categoryFilter,
    discoverFilter: state.discoverFilter.discoverFilter,
    cityLocality: state.cityLocality.cityLocality
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      oldOfferingData: oldOfferingData,
      activeOfferData: activeOfferData,
      hashtagOfferData: hashtagOfferData,
      oldCategoryData: oldCategoryData,
      localityOfferData: localityOfferData,
      yoloOfferData: yoloOfferData,
      discoverOldOfferData: discoverOldOfferData,
      discoverNewOfferData: discoverNewOfferData,
      getCityLocality: getCityLocality,
      getCategoryFilter: getCategoryFilter,
      getDiscoverFilter: getDiscoverFilter
    }
  )(OfferComponent)
);
