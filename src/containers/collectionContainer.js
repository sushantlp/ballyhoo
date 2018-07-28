import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CollectionComponent from "../components/collectionComponents";
import { oldOfferingData } from "../actions/oldOfferingAction";
import { activeOfferData } from "../actions/activeOfferAction";
import { hashtagOfferData } from "../actions/hashtagOfferAction";
import { oldCategoryData } from "../actions/oldCategoryAction";
import { localityOfferData } from "../actions/localityOfferAction";
import { yoloOfferData } from "../actions/yoloOfferAction";

function mapStateToProps(state) {
  return {
    oldOffering: state.oldOffering,
    activeOffer: state.activeOffer,
    hashtagOffer: state.hashtagOffer,
    oldCategory: state.oldCategory,
    localityOffer: state.localityOffer,
    yoloOffer: state.yoloOffer
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
      yoloOfferData: yoloOfferData
    }
  )(CollectionComponent)
);
