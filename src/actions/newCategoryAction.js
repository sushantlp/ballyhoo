import api from "../utils/api";

export const actionType = {
  newCategory: "NEW_CATEGORY",
  newCategoryMerge: "NEW_CATEGORY_MERGE"
};

export function newCategoryData(cityId, localityId, categoryId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .newCategoryApi(cityId, localityId, categoryId, level)
        .then(newCategory =>
          dispatch({ type: actionType.newCategory, newCategory })
        );
    };
  } else {
    return dispatch => {
      api
        .newCategoryApi(cityId, localityId, categoryId, level)
        .then(newCategory =>
          dispatch({ type: actionType.newCategoryMerge, newCategory })
        );
    };
  }
}
