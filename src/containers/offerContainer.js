import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import OfferComponent from "../components/offerComponents";

function mapStateToProps(state) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(OfferComponent)
);
