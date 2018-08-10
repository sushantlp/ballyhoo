import api from "../utils/api";

export const actionType = {
  oldViewDetail: "OLD_VIEW_DETAIL"
};

export function getOldViewDetail(offerId) {
  return dispatch => {
    api
      .oldViewDetailApi(offerId)
      .then(oldViewDetail =>
        dispatch({ type: actionType.oldViewDetail, oldViewDetail })
      );
  };
}
