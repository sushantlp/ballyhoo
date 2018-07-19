import api from "../utils/api";

export const actionType = {
  popularFilter: "POPULAR_FILTER"
};

export function getPopularFilter(cityId) {
  return dispatch => {
    api
      .popularFilterApi(cityId)
      .then(popularFilter =>
        dispatch({ type: actionType.popularFilter, popularFilter })
      );
  };
}
