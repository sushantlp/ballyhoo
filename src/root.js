import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
          <Route exact path="/food-drink-offer" component={Background} />
          <Route exact path="/food-drink-offer/terms" component={Terms} />
          <Route exact path="/food-drink-offer/privacy" component={Privacy} />
          <Route exact path="/food-drink-offer/faq" component={Faq} />

          <Route exact path="/food-drink-offer/:city" component={Background} />
          <Route
            exact
            path="/food-drink-offer/:city/trending"
            component={Facebook}
          />
          <Route
            exact
            path="/food-drink-offer/:city/:locality"
            component={Background}
          />
          <Route
            exact
            path="/food-drink-offer/:city/:locality/popular-location"
            component={Offerning}
          />
          <Route
            exact
            path="/food-drink-offer/:city/:locality/collection/:offering"
            component={Offerning}
          />
          <Route
            exact
            path="/food-drink-offer/:city/:locality/discover/:discover"
            component={Offerning}
          />
          <Redirect from="/" to="/food-drink-offer" />
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
