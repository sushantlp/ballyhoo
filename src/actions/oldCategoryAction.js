import api from "../utils/api";

export const actionType = {
  oldCategory: "OLD_CATEGORY",
  oldCategoryMerge: "OLD_CATEGORY_MERGE"
};

export function oldCategoryData(cityId, localityId, categoryId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .oldCategoryApi(cityId, localityId, categoryId, level)
        .then(oldCategory =>
          dispatch({ type: actionType.oldCategory, oldCategory })
        );
    };
  } else {
    return dispatch => {
      api
        .oldCategoryApi(cityId, localityId, categoryId, level)
        .then(oldCategory =>
          dispatch({ type: actionType.oldCategoryMerge, oldCategory })
        );
    };
  }
}
