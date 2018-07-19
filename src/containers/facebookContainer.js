import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FacebookComponent from "../components/facebookComponents";
import { getFacebookEvent } from "../actions/facebookEventAction";

function mapStateToProps(state) {
  return {
    facebookEvent: state.facebookEvent
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getFacebookEvent: getFacebookEvent
    }
  )(FacebookComponent)
);
