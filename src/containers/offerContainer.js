import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import OfferComponent from "../components/offerComponents";
import { oldOfferingData } from "../actions/oldOfferingAction";
import { activeOfferData } from "../actions/activeOfferAction";
import { hashtagOfferData } from "../actions/hashtagOfferAction";
import { oldCategoryData } from "../actions/oldCategoryAction";
import { localityOfferData } from "../actions/localityOfferAction";
import { yoloOfferData } from "../actions/yoloOfferAction";

function mapStateToProps(state) {
  return {
    oldOffering: state.oldOffering,
    activeOffer: state.activeOffer.activeOffer,
    hashtagOffer: state.hashtagOffer.hashtagOffer,
    oldCategory: state.oldCategory.oldCategory,
    localityOffer: state.localityOffer.localityOffer,
    yoloOffer: state.yoloOffer.yoloOffer
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
  )(OfferComponent)
);
