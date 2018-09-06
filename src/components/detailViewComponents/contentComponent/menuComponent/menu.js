import React from "react";
import _ from "lodash";

import { Segment, Card } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/menu.css";

export default class Menu extends React.Component {
  deliveryMenuComponent = menus => {
    return menus.map((menu, key) => {
      <h3
        style={{
          fontWeight: "500",
          color: "#ff695e",
          margin: "0px"
        }}
        key={key}
      >
        {menu.menu_title}
      </h3>;

      return menu.menu_category.map((category, key) => {
        const items = this.menuItem(category.item);
        <Segment>
          <h3
            style={{
              fontWeight: "500",
              color: "#ff695e",
              margin: "0px"
            }}
            key={key}
          >
            {category.category_title}
          </h3>

          <Card.Group items={items} />
        </Segment>;
      });
    });
  };

  menuItem = items => {
    let item = [];
    for (let i = 0; i < items.length; i++) {
      // Block Variable
      let obj = {};

      obj.header = items[i].item_name;
      obj.description = items[i].description;
      obj.meta = items[i].price;
    }
  };

  logicMenuData = (menus, status) => {
    if (status) {
      return this.deliveryMenuComponent(menus);
    }
  };

  render() {
    let menus = "";
    let status = false;
    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          this.props.history.location.state.offerData.data.MENU === null ||
          this.props.history.location.state.offerData.data.MENU === "" ||
          _.isEmpty(this.props.history.location.state.offerData.data.MENU)
        ) {
          return <div />;
        } else {
          menus = this.props.history.location.state.offerData.data.MENU;
          status = true;
        }
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          menus = this.props.history.location.state.offerData.data.SALOON
            .Offer_Faqs;
        } else {
          return <div />;
        }
      }
    }

    if (
      menus === "" ||
      menus === undefined ||
      menus === null ||
      _.isEmpty(menus)
    ) {
      return <div />;
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>MENUS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>{this.logicMenuData(menus, status)}</Segment>
      </div>
    );
  }
}
