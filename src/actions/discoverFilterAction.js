import api from "../utils/api";

export const actionType = {
  discoverFilter: "DISCOVER_FILTER"
};

export function getDiscoverFilter() {
  return dispatch => {
    api
      .discoverFilterApi()
      .then(discoverFilter =>
        dispatch({ type: actionType.discoverFilter, discoverFilter })
      );
  };
}
