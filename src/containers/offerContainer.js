import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import OfferComponent from "../components/offerComponents";

import { getCityLocality } from "../actions/cityLocalityAction";
import { getCategoryFilter } from "../actions/categoryFilterAction";
import { getDiscoverFilter } from "../actions/discoverFilterAction";

import { discoverOldOfferData } from "../actions/discoverOldAction";
import { discoverNewOfferData } from "../actions/discoverNewAction";

import { collectionOldOfferData } from "../actions/collectionOldAction";
import { collectionNewOfferData } from "../actions/collectionNewAction";

import { localityOldOfferData } from "../actions/localityOldOfferAction";

function mapStateToProps(state) {
  return {
    discoverOldOffer: state.discoverOldOffer,
    discoverNewOffer: state.discoverNewOffer,
    categoryFilter: state.categoryFilter.categoryFilter,
    discoverFilter: state.discoverFilter.discoverFilter,
    cityLocality: state.cityLocality.cityLocality,
    collectionOldOffer: state.collectionOldOffer,
    collectionNewOffer: state.collectionNewOffer,
    localityOldOffer: state.localityOldOffer
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      discoverOldOfferData: discoverOldOfferData,
      discoverNewOfferData: discoverNewOfferData,

      getCityLocality: getCityLocality,
      getCategoryFilter: getCategoryFilter,
      getDiscoverFilter: getDiscoverFilter,

      collectionOldOfferData: collectionOldOfferData,
      collectionNewOfferData: collectionNewOfferData,

      localityOldOfferData: localityOldOfferData
    }
  )(OfferComponent)
);
