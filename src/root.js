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
import DetailView from "./containers/detailViewContainer";

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />

        <Switch>

          <Route exact path="/web" component={Background} />
          <Route exact path="/web/terms" component={Terms} />
          <Route exact path="/web/privacy" component={Privacy} />
          <Route exact path="/web/faq" component={Faq} />

          <Route exact path="/web/:city" component={Background} />
          <Route exact path="/web/:city/trending" component={Facebook} />
          <Route exact path="/web/:city/:locality" component={Background} />
          <Route
            exact
            path="/web/:city/:locality/popular-location"
            component={Offerning}
          />
          <Route
            exact
            path="/web/:city/:locality/collection/:collection"
            component={Offerning}
          />
          <Route
            exact
            path="/web/:city/:locality/discover/:discover"
            component={Offerning}
          />

          <Route
            exact
            path="/web/:id/:city/:locality/:category/:merchant"
            component={DetailView}
          />

          // <Redirect from="/" to="/web" />
        
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
