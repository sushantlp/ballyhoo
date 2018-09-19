import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import DetailViewComponent from "../components/detailViewComponents";

import { getOldViewDetail } from "../actions/oldViewDetailAction";
import { getNewViewDetail } from "../actions/newViewDetailAction";
import { getSimilarOffer } from "../actions/similarOfferAction";
import {
  registerSuccess,
  registerFailure
} from "../actions/authenticationAction";

function mapStateToProps(state) {
  return {
    newViewDetail: state.newViewDetail,
    oldViewDetail: state.oldViewDetail,
    similarOffer: state.similarOffer,
    authentication: state.authentication
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getOldViewDetail: getOldViewDetail,
      getNewViewDetail: getNewViewDetail,
      getSimilarOffer: getSimilarOffer,
      registerSuccess: registerSuccess,
      registerFailure: registerFailure
    }
  )(DetailViewComponent)
);
