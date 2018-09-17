import api from "../utils/api";

export const actionType = {
  otherAdditionalCharge: "OTHER_ADDITIONAL_CHARGE"
};

export function getOtherAdditionalCharge(amount) {
  return dispatch => {
    api.otherAdditionalChargeApi(amount).then(otherAdditionalCharge =>
      dispatch({
        type: actionType.otherAdditionalCharge,
        otherAdditionalCharge
      })
    );
  };
}
