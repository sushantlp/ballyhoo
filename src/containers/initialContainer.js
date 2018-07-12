import { connect } from "react-redux";

import InitialComponent from "../components/initialComponents/index";
import { getCityLocality } from "../actions/cityLocalityAction";

function mapStateToProps(state) {
  return {
    cityLocality: state.cityLocality.cityLocality
  };
}

export default connect(
  mapStateToProps,
  {
    getCityLocality: getCityLocality
  }
)(InitialComponent);
