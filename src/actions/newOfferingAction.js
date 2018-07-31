import api from "../utils/api";

export const actionType = {
  newOffering: "NEW_OFFERING",
  newOfferingMerge: "NEW_OFFERING_MERGE"
};

export function newOfferingData(cityId, localityId, offeringId, level, flag) {
  if (flag) {
    return dispatch => {
      api
        .newOfferingApi(cityId, localityId, offeringId, level)
        .then(newOffering =>
          dispatch({ type: actionType.newOffering, newOffering })
        );
    };
  } else {
    return dispatch => {
      api
        .newOfferingApi(cityId, localityId, offeringId, level)
        .then(newOffering =>
          dispatch({ type: actionType.newOfferingMerge, newOffering })
        );
    };
  }
}
