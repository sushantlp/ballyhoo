import api from "../utils/api";

export const actionType = {
  popularLocality: "POPULAR_LOCALITY"
};

export function getPopularLocality(cityId) {
  return dispatch => {
    api
      .popularLocalityApi(cityId)
      .then(popularLocality =>
        dispatch({ type: actionType.popularLocality, popularLocality })
      );
  };
}
