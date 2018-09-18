import api from "../utils/api";

export const actionType = {
  fnbPaytm: "FNB_PAYTM"
};

export function postFnbPaytm(
  dealId,
  orderId,
  quantity,
  mobile,
  amount,
  hash,
  mid
) {
  return dispatch => {
    api
      .fnbPaytmApi(dealId, orderId, quantity, mobile, amount, hash, mid)
      .then(fnbPaytm => dispatch({ type: actionType.fnbPaytm, fnbPaytm }));
  };
}
