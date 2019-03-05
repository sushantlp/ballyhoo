import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react/dist/commonjs";
import classes from "./static/css/header.css";
import Helmet, { HelmetProvider } from 'react-helmet-async';

class Header extends React.Component {
  render() {
    return (
    <HelmetProvider>
      <Helmet>
        <meta name="keywords" content="ballyhoo bengaluru experience online offers lunch dinner wine beer" /> 
      </Helmet>
      <div className={classes.HeaderContainer}>
        <form action="javascript:void(0)" autoComplete={"off"}>
          <Menu
            style={{
              backgroundColor: "#272525"
            }}
          >
            <Link to={"/"}>
              <Menu.Item>
                <h2
                  style={{
                    color: "white"
                  }}
                >
                  BALLYHOO
                </h2>
              </Menu.Item>
            </Link>
          </Menu>
        </form>
      </div>
    </HelmetProvider>
    );
  }
}

export default Header;
