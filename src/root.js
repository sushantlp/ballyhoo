import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import "./static/css/root.css";

// Containers
import Header from "./containers/headerContainer";
import Background from "./components/initialComponents/index";
//import Footer from "./components/footer/footer";
import Footer from "./containers/footerContainer";

// Router root
const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Background />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
