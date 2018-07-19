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

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Background} />
          <Route exact path="/:city" component={Background} />
          <Route exact path="/:city/facebook-post" component={Facebook} />
          <Route exact path="/:city/:locality" component={Background} />
          {/* <Route exact path="/:city/:locality/:offering" component={Offering} /> */}
          {/* <Route
          exact
          path="/:city/:locality/:offering/:id"
          component={Background}
        /> */}
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
