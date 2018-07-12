import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import InitialComponent from "../components/initialComponents/index";
import { getCityLocality } from "../actions/cityLocalityAction";

function mapStateToProps(state) {
  return {
    cityLocality: state.cityLocality.cityLocality
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality
    }
  )(InitialComponent)
);
