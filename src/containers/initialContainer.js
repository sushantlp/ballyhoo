import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import InitialComponent from "../components/initialComponents/index";
import { getCityLocality } from "../actions/cityLocalityAction";
import { getCategoryFilter } from "../actions/categoryFilterAction";

function mapStateToProps(state) {
  return {
    categoryFilter: state.categoryFilter.categoryFilter,
    cityLocality: state.cityLocality.cityLocality
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality,
      getCategoryFilter: getCategoryFilter
    }
  )(InitialComponent)
);
