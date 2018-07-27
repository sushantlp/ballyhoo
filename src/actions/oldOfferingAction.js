import api from "../utils/api";

export const actionType = {
  oldOffering: "OLD_OFFERING",
  oldOfferingMerge: "OLD_OFFERING_MERGE"
};

export function oldOfferingData(cityId, localityId, offeringId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .oldOfferingApi(cityId, localityId, offeringId, level)
        .then(oldOffering =>
          dispatch({ type: actionType.oldOffering, oldOffering })
        );
    };
  } else {
    return dispatch => {
      api
        .oldOfferingApi(cityId, localityId, offeringId, level)
        .then(oldOffering =>
          dispatch({ type: actionType.oldOfferingMerge, oldOffering })
        );
    };
  }
}
