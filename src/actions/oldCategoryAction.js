import api from "../utils/api";

export const actionType = {
  oldCategory: "OLD_CATEGORY"
};

export function oldCategoryData(cityId, localityId, categoryId, level) {
  return dispatch => {
    api
      .oldCategoryApi(cityId, localityId, categoryId, level)
      .then(oldCategory =>
        dispatch({ type: actionType.oldCategory, oldCategory })
      );
  };
}
