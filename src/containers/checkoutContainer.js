import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CheckComponent from "../components/checkoutComponents";

import { getPaymentMode } from "../actions/paymentModeAction";

function mapStateToProps(state) {
  return {
    paymentMode: state.paymentMode
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      getPaymentMode: getPaymentMode
    }
  )(CheckComponent)
);
