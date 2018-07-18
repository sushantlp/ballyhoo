import api from "../utils/api";

export const actionType = {
  facebookEvent: "FACEBOOK_EVENT",
  facebookMergeData: "FACEBOOK_MERGE_DATA"
};

export function getFacebookEvent(cityId, skip, flag) {
  if (skip) {
    return dispatch => {
      api
        .facebookEventApi(cityId, skip)
        .then(facebookEvent =>
          dispatch({ type: actionType.facebookMergeData, facebookEvent })
        );
    };
  } else {
    return dispatch => {
      api
        .facebookEventApi(cityId, skip)
        .then(facebookEvent =>
          dispatch({ type: actionType.facebookEvent, facebookEvent })
        );
    };
  }
}
