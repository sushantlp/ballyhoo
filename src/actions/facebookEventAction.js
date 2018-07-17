import api from "../utils/api";

export const actionType = {
  facebookEvent: "FACEBOOK_EVENT"
};

export function getFacebookEvent() {
  return dispatch => {
    api
      .facebookEventApi()
      .then(facebookEvent =>
        dispatch({ type: actionType.facebookEvent, facebookEvent })
      );
  };
}
