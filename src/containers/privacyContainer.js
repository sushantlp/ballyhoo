import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Privacy from "../components/privacyComponents";

export default withRouter(connect()(Privacy));
