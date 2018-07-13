import api from "../utils/api";

export const actionsType = {
  cityLocality: "CITY_LOCALITY"
};

export function getCityLocality() {
  return dispatch => {
    api
      .cityLocalityApi()
      .then(cityLocality =>
        dispatch({ type: actionsType.cityLocality, cityLocality })
      );
  };
}
