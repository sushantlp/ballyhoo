import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Terms from "../components/termsComponents";

export default withRouter(connect()(Terms));
