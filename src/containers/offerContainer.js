import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import OfferComponent from "../components/offerComponents";
import { getOfferningData } from "../actions/offerningDataAction";

function mapStateToProps(state) {
  return { offerningData: state.offerningData.offerningData };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getOfferningData: getOfferningData
    }
  )(OfferComponent)
);
