import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import InitialComponent from "../components/initialComponents";
import { getCityLocality } from "../actions/cityLocalityAction";
import { getCategoryFilter } from "../actions/categoryFilterAction";
import { getDiscoverFilter } from "../actions/discoverFilterAction";

function mapStateToProps(state) {
  return {
    categoryFilter: state.categoryFilter.categoryFilter,
    discoverFilter: state.discoverFilter.discoverFilter,
    cityLocality: state.cityLocality.cityLocality
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality,
      getCategoryFilter: getCategoryFilter,
      getDiscoverFilter: getDiscoverFilter
    }
  )(InitialComponent)
);
