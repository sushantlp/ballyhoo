import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { keys } from "../../constants";
import { Input, Menu } from "semantic-ui-react";

import classes from "../header/static/css/header.css";

class Header extends React.Component {
  componentDidMount() {
    let searchElement = document.getElementById("search-input");
    if (searchElement) {
      searchElement.addEventListener("keyup", event => {
        event.preventDefault();
        if (event.keyCode === keys.ENTER) {
          this.search();
        }
      });
    }
  }

  search = () => {
    const searchElement = document.getElementById("search-input");
    const query = searchElement.value.replace(/^\s+|\s+$/g, ""); // Trailing whitespaces
    if (query.length === 0) {
      return;
    }
    searchElement.blur();
    this.props.history.push("/search/" + query);
  };

  render() {
    return (
      <div>
        <form
          action="javascript:void(0)"
          autoComplete={"off"}
          onSubmit={this.search}
        >
          <Menu>
            <Link to={"/"}>
              <Menu.Item>
                <img
                  src="https://kokkalosantorini.com/wp-content/uploads/2017/08/instagram-black-outline-logo-png-font-typeface-square-android-icon-vector-png-eps-button-free-download-font-black-and-white-transparent-background-maker-ai-file-adobe-illustrator-for-tumblr1_1.png"
                  alt="Music"
                />
              </Menu.Item>
            </Link>
            <Menu.Item className={classes.Search}>
              <Input
                className="icon"
                icon="search"
                placeholder="Search..."
                id="search-input"
              />
            </Menu.Item>
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
