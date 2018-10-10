import api from "../utils/api";

export const actionType = {
  otherAdditionalCharge: "OTHER_ADDITIONAL_CHARGE"
};

export function getOtherAdditionalCharge(amount, token) {
  return dispatch => {
    api.otherAdditionalChargeApi(amount, token).then(otherAdditionalCharge =>
      dispatch({
        type: actionType.otherAdditionalCharge,
        otherAdditionalCharge
      })
    );
  };
}
