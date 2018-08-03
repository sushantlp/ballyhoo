import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Faq from "../components/faqComponents";

export default withRouter(connect()(Faq));
