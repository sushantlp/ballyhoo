import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import InitialComponent from "../components/initialComponents";
import { getCityLocality } from "../actions/cityLocalityAction";
import { getCategoryFilter } from "../actions/categoryFilterAction";
import { getDiscoverFilter } from "../actions/discoverFilterAction";
import { getFacebookEvent } from "../actions/facebookEventAction";
import { getPopularFilter } from "../actions/popularFilterAction";
import { getPopularLocality } from "../actions/popularLocalityAction";

function mapStateToProps(state) {
  return {
    categoryFilter: state.categoryFilter.categoryFilter,
    discoverFilter: state.discoverFilter.discoverFilter,
    cityLocality: state.cityLocality.cityLocality,
    facebookEvent: state.facebookEvent,
    popularFilter: state.popularFilter.popularFilter,
    popularLocality: state.popularLocality.popularLocality
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCityLocality: getCityLocality,
      getCategoryFilter: getCategoryFilter,
      getDiscoverFilter: getDiscoverFilter,
      getFacebookEvent: getFacebookEvent,
      getPopularFilter: getPopularFilter,
      getPopularLocality: getPopularLocality
    }
  )(InitialComponent)
);
