import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./static/css/root.css";

// Containers
import Header from "./containers/headerContainer";
import Background from "./containers/initialContainer";
import Footer from "./containers/footerContainer";
import Facebook from "./containers/facebookContainer";
import Offerning from "./containers/offerContainer";
import Privacy from "./containers/privacyContainer";
import Terms from "./containers/termsContainer";
import Faq from "./containers/faqContainer";

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Background} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/faq" component={Faq} />

          <Route exact path="/:city" component={Background} />
          <Route exact path="/:city/trending" component={Facebook} />
          <Route exact path="/:city/:locality" component={Background} />
          <Route
            exact
            path="/:city/:locality/popular-location"
            component={Offerning}
          />
          <Route
            exact
            path="/:city/:locality/collection/:offering"
            component={Offerning}
          />
          <Route
            exact
            path="/:city/:locality/discover/:discover"
            component={Offerning}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
