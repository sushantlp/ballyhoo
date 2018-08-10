import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import DetailViewComponent from "../components/detailViewComponents";

import { getOldViewDetail } from "../actions/oldViewDetailAction";
import { getNewViewDetail } from "../actions/newViewDetailAction";

function mapStateToProps(state) {
  return {
    newViewDetail: state.newViewDetail,
    oldViewDetail: state.oldViewDetail
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getOldViewDetail: getOldViewDetail,
      getNewViewDetail: getNewViewDetail
    }
  )(DetailViewComponent)
);
