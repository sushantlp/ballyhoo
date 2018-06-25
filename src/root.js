import React /*, { Component } */ from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import "./static/css/root.css";

// Containers
import Header from "./containers/headerContainer";
import Footer from "./containers/footerContainer";
import NavigationHome from "./containers/navigation/navigationHomeContainer";
import NavigationSearch from "./containers/navigation/navigationSearchContainer";

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={NavigationHome} />
        <Route exact path="/search/:q" component={NavigationSearch} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
