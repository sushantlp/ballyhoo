import api from "../utils/api";

export const actionType = {
  paymentMode: "PAYMENT_MODE"
};

export function getPaymentMode(merchantMobile) {
  return dispatch => {
    api
      .paymentModeApi(merchantMobile)
      .then(paymentMode =>
        dispatch({ type: actionType.paymentMode, paymentMode })
      );
  };
}
