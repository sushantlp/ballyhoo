import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FacebookComponent from "../components/facebookComponents";
import { getFacebookEvent } from "../actions/facebookEventAction";
import { getCityLocality } from "../actions/cityLocalityAction";

function mapStateToProps(state) {
  return {
    cityLocality: state.cityLocality.cityLocality,
    facebookEvent: state.facebookEvent
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality,
      getFacebookEvent: getFacebookEvent
    }
  )(FacebookComponent)
);
