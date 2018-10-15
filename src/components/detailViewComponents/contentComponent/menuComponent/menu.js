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
  addQuantiyParam = (key, items, kaunHai, obj, currencySymbol) => {
    const copyBookingDetail = this.props.detailState.bookingDetail;

    if (copyBookingDetail.length === 0) {
      let list = {};
      if (kaunHai === "SALOON") {
        list.offer_id = obj.data.Offer_Basic_Details.Offer_Id;
        list.category_name = obj.data.Offer_Basic_Details.Category_Name;
        list.offering_name = obj.data.Offer_Basic_Details.Offering_Name;
        list.category_id = obj.data.Offer_Basic_Details.Category_Id;
        list.offering_id = obj.data.Offer_Basic_Details.Offering_Id;
        list.merchant_mobile = obj.data.Merchant_Details.Merchant_Mobile;
        list.merchant_bname = obj.data.Merchant_Details.Merchant_Bname;
        list.currency_symbol = currencySymbol;
        list.bookingDate = this.props.detailState.bookingDateSlection;
        list.menu_list = this.addSelectedMenu(key, items, list);

        this.props.updateBookingDetail(list);
      } else {
      }
    } else {
      copyBookingDetail.menu_list = this.addSelectedMenu(
        key,
        items,
        copyBookingDetail
      );

      this.props.updateBookingDetail(copyBookingDetail);
    }
  };

  addSelectedMenu = (key, items, bookingDetail) => {
    let arr = [];
    let obj = {};

    let categoryIndex = 0;
    let findCategory = false;
    let findItem = false;
    let menuListExist = false;

    if (bookingDetail.hasOwnProperty("menu_list")) {
      menuListExist = true;

      if (bookingDetail.menu_list.length > 0) {
        for (let j = 0; j < bookingDetail.menu_list.length; j++) {
          if (
            bookingDetail.menu_list[j].menu_category_id === items.category_id
          ) {
            findCategory = true;
            categoryIndex = j;
            break;
          }
        }

        if (findCategory) {
          for (
            let j = 0;
            j < bookingDetail.menu_list[categoryIndex].item_list.length;
            j++
          ) {
            if (
              bookingDetail.menu_list[categoryIndex].item_list[j].item_id ===
              key
            ) {
              findItem = true;
              break;
            }
          }
        }
      }
    }
    if (findCategory) {
      if (!findItem) {
        bookingDetail.menu_list[categoryIndex].item_list = this.addMenuItem(
          items.item,
          key,
          bookingDetail.menu_list[categoryIndex].item_list
        );
        arr = bookingDetail.menu_list;
      } else {
        arr = bookingDetail.menu_list;
      }
    } else {
      if (menuListExist) {
        obj.menu_category_id = items.category_id;
        obj.menu_category_title = items.category_title;
        obj.item_list = this.addMenuItem(items.item, key, []);

        bookingDetail.menu_list.push(obj);
        arr = bookingDetail.menu_list;
      } else {
        obj.menu_category_id = items.category_id;
        obj.menu_category_title = items.category_title;
        obj.item_list = this.addMenuItem(items.item, key, []);

        arr.push(obj);
      }
    }

    return arr;
  };

  addMenuItem = (items, id, existingItem) => {
    let arr = existingItem;

    for (let i = 0; i < items.length; i++) {
      if (items[i].item_id === id) {
        let obj = {};
        obj.item_id = items[i].item_id;
        obj.item_name = items[i].item_name;
        obj.description = items[i].description;
        obj.additional_charge = items[i].additional_charge;
        obj.quantity = 1;
        obj.price = Number(items[i].price);
        arr.push(obj);
        break;
      }
    }

    return arr;
  };

  deliveryMenuComponent = (menuTitle, categoryTitle, item, key) => {
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
        <Card.Group items={item} style={{ cursor: "pointer" }} />
        <br />
      </div>
    );
  };

  menuItem = (items, currencySymbol, status, menus, kaunHai, data) => {
    let item = [];
    for (let i = 0; i < items.length; i++) {
      // Block Variable
      let obj = {};
      obj.key = items[i].item_id;
      obj.header = items[i].item_name;
      obj.meta = items[i].description;
      obj.onClick = e =>
        this.addQuantiyParam(
          items[i].item_id,
          menus,
          kaunHai,
          data,
          currencySymbol
        );
      if (status) {
        if (items[i].item_type === 1) {
          // obj.description =
          //   currencySymbol + items[i].price + " " + "Vegetarian";

          obj.description = `${currencySymbol} ${items[i].price} Vegetarian`;
        } else {
          // obj.description =
          //   currencySymbol + items[i].price + " " + "Non-Vegetarian";

          obj.description = `${currencySymbol} ${
            items[i].price
          } Non-Vegetarian`;
        }
      } else {
        obj.description = currencySymbol + items[i].price;
      }

      item.push(obj);
    }
    return item;
  };

  deliveryLoop = (menus, currencySymbol, status, obj) => {
    const REG_HEX = /&#x([a-fA-F0-9]+);/;
    const hex = currencySymbol.replace(REG_HEX, "$1");
    const dec = parseInt(hex, 16);

    return menus.map((menu, keys) => {
      return menu.menu_category.map((category, key) => {
        const items = this.menuItem(
          category.item,
          String.fromCharCode(dec),
          status,
          category,
          "DELIVERY",
          obj
        );
        return this.deliveryMenuComponent(
          menu.menu_title,
          category.category_title,
          items,

          category.category_id
        );
      });
    });
  };

  saloonLoop = (menus, currencySymbol, status, obj) => {
    const REG_HEX = /&#x([a-fA-F0-9]+);/;
    const hex = currencySymbol.replace(REG_HEX, "$1");
    const dec = parseInt(hex, 16);

    return menus.menu_category.map((category, key) => {
      const items = this.menuItem(
        category.item,
        String.fromCharCode(dec),
        status,
        category,
        "SALOON",
        obj
      );
      return this.deliveryMenuComponent(
        menus.menu_title,
        category.category_title,
        items,
        category.category_id
      );
    });
  };

  logicMenuData = (menus, status, currencySymbol, obj) => {
    if (status) {
      return this.deliveryLoop(menus, currencySymbol, status, obj);
    } else {
      return this.saloonLoop(menus, currencySymbol, status, obj);
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
    let obj = {};

    if (this.props.detailState.apiCall) {
      if (this.props.detailState.which === "new") {
        if (
          this.props.newViewDetail.newViewDetail === null ||
          this.props.newViewDetail.newViewDetail === undefined
        ) {
          return <div />;
        }

        if (_.isEmpty(this.props.newViewDetail.newViewDetail)) {
          return <div />;
        }

        if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.SALOON)
            .length !== 0 &&
          !_.isEmpty(
            this.props.newViewDetail.newViewDetail.offers.SALOON.Offer_Menu_List
          )
        ) {
          menus = this.props.newViewDetail.newViewDetail.offers.SALOON
            .Offer_Menu_List;
          currencySymbol = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Currency_Text;
          hide = this.props.newViewDetail.newViewDetail.offers.SALOON
            .Offer_Menu_List.menu_category;
          obj = this.props.newViewDetail.newViewDetail.offers;
        } else {
          return <div />;
        }
      } else {
        if (
          this.props.oldViewDetail.oldViewDetail === null ||
          this.props.oldViewDetail.oldViewDetail === undefined
        ) {
          return <div />;
        }

        if (_.isEmpty(this.props.oldViewDetail.oldViewDetail)) {
          return <div />;
        }

        if (
          this.props.oldViewDetail.oldViewDetail.deal.MENU === null ||
          this.props.oldViewDetail.oldViewDetail.deal.MENU === "" ||
          _.isEmpty(this.props.oldViewDetail.oldViewDetail.deal.MENU)
        ) {
          return <div />;
        } else {
          menus = this.props.oldViewDetail.oldViewDetail.deal.MENU;
          status = true;
          currencySymbol = this.props.oldViewDetail.oldViewDetail.deal
            .currency_text;
          hide = this.props.oldViewDetail.oldViewDetail.deal.MENU[0]
            .menu_category;
          obj = this.props.oldViewDetail.oldViewDetail.deal;
        }
      }
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
          obj = this.props.history.location.state.offerData;
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
          obj = this.props.history.location.state.offerData;
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
            currencySymbol,
            obj
          )}

          <Button
            onClick={this.toggle}
            disabled={Object.keys(hide).length <= MAX_ITEMS ? true : false}
            size="large"
            basic
            color="black"
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
