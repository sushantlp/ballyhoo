import api from "../utils/api";

export const actionType = {
  newViewDetail: "NEW_VIEW_DETAIL"
};

export function getNewViewDetail(offerId) {
  return dispatch => {
    api
      .newViewDetailApi(offerId)
      .then(newViewDetail =>
        dispatch({ type: actionType.newViewDetail, newViewDetail })
      );
  };
}
