import React from "react";
import _ from "lodash";

import { Segment, Card, Button } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/menu.css";

// Default Number of Items for View More Button
const MAX_ITEMS = 1;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false,
      menuList: []
    };
  }

  // Add quantity parameter
  addQuantiyParam = list => {
    console.log(list);
    // list.menu_category.map((obj, key) => {
    //   obj.item.map((lists, keys) => {
    //     lists.quantity = 0;
    //   });
    // });

    this.setState({
      menuList: list
    });
  };

  deliveryMenuComponent = (menuTitle, categoryTitle, items, object, key) => {
    return (
      <div key={key}>
        <h3
          style={{
            fontWeight: "500",
            color: "#ff695e",
            margin: "0px"
          }}
        >
          {categoryTitle}
        </h3>
        <br />
        <Card.Group
          items={items}
          style={{ cursor: "pointer" }}
          onClick={() => this.addQuantiyParam(object)}
        />
        <br />
      </div>
    );
  };

  menuItem = (items, currencySymbol, status) => {
    let item = [];

    for (let i = 0; i < items.length; i++) {
      // Block Variable
      let obj = {};
      obj.key = items[i].item_id;
      obj.header = items[i].item_name;

      obj.meta = items[i].description;

      if (status) {
        if (items[i].item_type === 1) {
          obj.description =
            currencySymbol + items[i].price + " " + "Vegetarian";
        } else {
          obj.description =
            currencySymbol + items[i].price + " " + "Non-Vegetarian";
        }
      } else {
        obj.description = currencySymbol + items[i].price;
      }

      item.push(obj);
    }
    return item;
  };

  deliveryLoop = (menus, currencySymbol, status) => {
    const REG_HEX = /&#x([a-fA-F0-9]+);/;
    const hex = currencySymbol.replace(REG_HEX, "$1");
    const dec = parseInt(hex, 16);

    return menus.map((menu, keys) => {
      return menu.menu_category.map((category, key) => {
        const items = this.menuItem(
          category.item,
          String.fromCharCode(dec),
          status
        );
        return this.deliveryMenuComponent(
          menu.menu_title,
          category.category_title,
          items,
          category,
          category.category_id
        );
      });
    });
  };

  saloonLoop = (menus, currencySymbol, status) => {
    const REG_HEX = /&#x([a-fA-F0-9]+);/;
    const hex = currencySymbol.replace(REG_HEX, "$1");
    const dec = parseInt(hex, 16);

    return menus.menu_category.map((category, key) => {
      const items = this.menuItem(
        category.item,
        String.fromCharCode(dec),
        status
      );
      return this.deliveryMenuComponent(
        menus.menu_title,
        category.category_title,
        items,
        category,
        category.category_id
      );
    });
  };

  logicMenuData = (menus, status, currencySymbol) => {
    if (status) {
      // Add quantity parameter
      // this.addQuantiyParam(menus[0]);

      return this.deliveryLoop(menus, currencySymbol, status);
    } else {
      // Add quantity parameter
      // this.addQuantiyParam(menus);

      return this.saloonLoop(menus, currencySymbol, status);
    }
  };

  toggle = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };

  sliceMenu = (menus, status) => {
    let cut = [];
    if (this.state.isMore) {
      return menus;
    }

    if (status) {
      let obj = {};
      obj.menu_title = menus[0].menu_title;
      obj.menu_category = menus[0].menu_category.slice(0, MAX_ITEMS);

      cut.push(obj);
    } else {
      cut.menu_title = menus.menu_title;
      cut.menu_category = menus.menu_category.slice(0, MAX_ITEMS);
    }
    return cut;
  };

  render() {
    const { isMore } = this.state;
    let menus = "";
    let status = false;
    let currencySymbol = undefined;
    let hide = [];
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
          currencySymbol = this.props.history.location.state.offerData.data
            .currency_text;
          hide = this.props.history.location.state.offerData.data.MENU[0]
            .menu_category;
        }
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0 &&
          !_.isEmpty(
            this.props.history.location.state.offerData.data.SALOON
              .Offer_Menu_List
          )
        ) {
          menus = this.props.history.location.state.offerData.data.SALOON
            .Offer_Menu_List;
          currencySymbol = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Currency_Text;
          hide = this.props.history.location.state.offerData.data.SALOON
            .Offer_Menu_List.menu_category;
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
        <Segment>
          {this.logicMenuData(
            this.sliceMenu(menus, status),
            status,
            currencySymbol
          )}

          <Button
            onClick={this.toggle}
            disabled={Object.keys(hide).length <= MAX_ITEMS ? true : false}
            size="large"
            basic
            color="violet"
            style={{
              marginTop: "1em",
              marginBottom: "1em",
              marginLeft: "35%"
            }}
          >
            {isMore ? "Show Less Menu" : "Show All Menu"}
          </Button>
        </Segment>
      </div>
    );
  }
}
