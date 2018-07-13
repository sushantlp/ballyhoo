import api from "../utils/api";

export const actionType = {
  categoryFilter: "CATEGORY_FILTER"
};

export function getCategoryFilter(cityId) {
  return dispatch => {
    api
      .categoryFilterApi(cityId)
      .then(categoryFilter =>
        dispatch({ type: actionType.categoryFilter, categoryFilter })
      );
  };
}
