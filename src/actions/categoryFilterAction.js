import api from "../utils/api";

export const actionsType = {
  categoryFilter: "CATEGORY_FILTER"
};

export function getCategoryFilter(cityId) {
  return dispatch => {
    api
      .cityLocalityApi(cityId)
      .then(categoryFilter =>
        dispatch({ type: actionsType.categoryFilter, categoryFilter })
      );
  };
}
