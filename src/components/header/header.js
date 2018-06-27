import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Input, Menu, Dropdown } from "semantic-ui-react";

import classes from "./static/css/header.css";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className={classes.HeaderContainer}>
        <form action="javascript:void(0)" autoComplete={"off"}>
          <Menu
            style={{
              backgroundColor: "#7A52C0"
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
            {/* <Menu.Item className={classes.Search}>
             
              <Input
                className="icon"
                icon="location arrow"
                placeholder="Search City..."
                id="search-input"
              />
            </Menu.Item> */}
          </Menu>
        </form>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default Header;
