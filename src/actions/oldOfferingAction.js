import api from "../utils/api";

export const actionType = {
  oldOffering: "OLD_OFFERING"
};

export function oldOfferingData(cityId, localityId, offeringId, level) {
  return dispatch => {
    api
      .oldOfferingApi(cityId, localityId, offeringId, level)
      .then(oldOffering =>
        dispatch({ type: actionType.oldOffering, oldOffering })
      );
  };
}
