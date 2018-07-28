import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import DiscoverComponent from "../components/discoverComponents";
// import { oldOfferingData } from "../actions/oldOfferingAction";

function mapStateToProps(state) {
  return {
    // oldOffering: state.oldOffering,
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      //   oldOfferingData: oldOfferingData,
    }
  )(OfferComponent)
);
