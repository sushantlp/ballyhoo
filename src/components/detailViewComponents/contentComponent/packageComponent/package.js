import React from "react";
import _ from "lodash";
import moment from "moment-timezone";

import { Segment, Button, Modal, Icon } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/package.css";

import { REG_HEX } from "../../../../constants.js";

export default class Package extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      door: false,
      packageList: [],
      priceList: [],
      open: false,
      dimmer: "blurring",
      size: "small",
      currencySymbol: undefined
    };
  }

  show = (
    list,
    offerId,
    categoryName,
    offeringName,
    categoryId,
    offeringId,
    merchantMobile
  ) => {
    const newList = this.addQuantiyParam(
      list,
      offerId,
      categoryName,
      offeringName,
      categoryId,
      offeringId,
      merchantMobile
    );
    // console.log(newList);
    this.setState({
      open: true,
      priceList: newList
    });
  };

  addQuantiyParam = (
    list,
    offerId,
    categoryName,
    offeringName,
    categoryId,
    offeringId,
    merchantMobile
  ) => {
    list.offer_id = offerId;
    list.category_name = categoryName;
    list.offering_name = offeringName;
    list.category_id = categoryId;
    list.offering_id = offeringId;
    list.merchant_mobile = merchantMobile;
    list.Package_Price_List.map((obj, key) => {
      obj.quantity = 0;
    });

    return list;
  };

  close = () => this.setState({ open: false });

  intitalizeQuantity = (index, flag, bookingPriceListIndex, calculatePrice) => {
    this.state.priceList.Package_Price_List.map((price, key) => {
      if (key === index) {
        if (flag) {
          if (
            this.state.priceList.Package_Price_List[index].quantity <
            this.state.priceList.Package_Price_List[index].Available
          ) {
            this.state.priceList.Package_Price_List[index].quantity =
              this.state.priceList.Package_Price_List[index].quantity + 1;
          }
        } else {
          if (this.state.priceList.Package_Price_List[index].quantity >= 0) {
            this.state.priceList.Package_Price_List[index].quantity =
              this.state.priceList.Package_Price_List[index].quantity - 1;
          }
        }

        this.setState({
          priceList: this.state.priceList
        });
      }
    });

    this.createBookingDetail(bookingPriceListIndex, calculatePrice);
  };

  createBookingDetail = (bookingPriceListIndex, calculatePrice) => {
    console.log(bookingPriceListIndex);
    console.log("Hello");
    console.log(this.props.detailState.bookingDetail);
    let obj = {};
    let obj1 = {};
    let obj2 = {};
    let arr = [];
    let arr1 = [];
    let copyBookingDetail = this.props.detailState.bookingDetail;

    if (_.isEmpty(this.props.detailState.bookingDetail)) {
      obj.offer_id = this.state.priceList.offer_id;
      obj.offering_id = this.state.priceList.offering_id;
      obj.category_name = this.state.priceList.category_name;
      obj.offering_name = this.state.priceList.offering_name;
      obj.merchant_mobile = this.state.priceList.merchant_mobile;
      obj.category_id = this.state.priceList.category_id;

      obj1.package_caption = this.state.priceList.Package_Caption;
      obj1.package_id = this.state.priceList.Package_Id;

      obj2.price = calculatePrice;
      obj2.quantity = bookingPriceListIndex.quantity;
      obj2.price_id = bookingPriceListIndex.Price_Id;
      obj2.price_caption = bookingPriceListIndex.Price_Caption;

      arr.push(obj2);
      obj1.priceList = arr;

      arr1.push(obj1);
      obj.packageList = arr1;
    } else {
      for (let i = 0; i < copyBookingDetail.packageList.length; i++) {
        let find = false;

        for (let l = 0; l < copyBookingDetail.packageList.length; l++) {
          if (
            copyBookingDetail.packageList[l].package_id ===
            this.state.priceList.Package_Id
          ) {
            find = true;
          }
        }

        if (find) {
          for (
            let j = 0;
            j < copyBookingDetail.packageList[i].priceList.length;
            j++
          ) {
            if (
              copyBookingDetail.packageList[i].priceList[j].price_id !==
              bookingPriceListIndex.Price_Id
            ) {
              obj2.price = calculatePrice;
              obj2.quantity = bookingPriceListIndex.quantity;
              obj2.price_id = bookingPriceListIndex.Price_Id;
              obj2.price_caption = bookingPriceListIndex.Price_Caption;

              copyBookingDetail.packageList[i].priceList[j].push(obj2);
            } else {
              if (
                bookingPriceListIndex.quantity !==
                copyBookingDetail.packageList[i].priceList[j].quantity
              ) {
                copyBookingDetail.packageList[i].priceList[j].quantity =
                  bookingPriceListIndex.quantity;
              }
            }
          }
        } else {
          obj1.package_caption = this.state.priceList.Package_Caption;
          obj1.package_id = this.state.priceList.Package_Id;

          for (
            let j = 0;
            j < copyBookingDetail.packageList[i].priceList.length;
            j++
          ) {
            if (
              copyBookingDetail.packageList[i].priceList[j].price_id !==
              bookingPriceListIndex.Price_Id
            ) {
              obj2.price = calculatePrice;
              obj2.quantity = bookingPriceListIndex.quantity;
              obj2.price_id = bookingPriceListIndex.Price_Id;
              obj2.price_caption = bookingPriceListIndex.Price_Caption;

              arr.push(obj2);
            }
          }

          obj1.priceList = arr;
          copyBookingDetail.packageList.push(obj1);
        }
      }
    }

    if (_.isEmpty(obj)) {
      this.props.updateBookingDetail(copyBookingDetail);
    } else {
      this.props.updateBookingDetail(obj);
    }
  };
  packageModel = (currencySymbol, categoryName) => {
    const hex = currencySymbol.replace(REG_HEX, "$1");
    const dec = parseInt(hex, 16);
    const currency = String.fromCharCode(dec);
    let proceed = false;

    return (
      <div>
        <Modal
          dimmer={this.state.dimmer}
          open={this.state.open}
          onClose={this.close}
          size={this.state.size}
        >
          <Modal.Header style={{ textAlign: "center" }}>
            Select your Category
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              {this.state.priceList.Package_Price_List.map((priceList, key) => {
                let discountPrice = undefined;
                let price = 0;
                if (categoryName !== "ACTIVITIES") {
                  if (priceList.Discount !== 0) {
                    discountPrice =
                      (priceList.Price * priceList.Discount) / 100;
                    discountPrice = _.round(priceList.Price - discountPrice);
                  }

                  price = priceList.Price;
                } else {
                  const date = moment(
                    this.props.detailState.bookingDateSlection,
                    "DD-MM-YYYY"
                  );
                  let day = date.day();
                  if (day === 1) {
                    day = "Mon";
                  } else if (day === 2) {
                    day = "Tue";
                  } else if (day === 3) {
                    day = "Wed";
                  } else if (day === 4) {
                    day = "Thu";
                  } else if (day === 5) {
                    day = "Fri";
                  } else if (day === 6) {
                    day = "Sat";
                  } else {
                    day = "Sun";
                  }

                  for (let i = 0; i <= priceList.Daily_Price.length; i++) {
                    if (day === priceList.Daily_Price[i].Day) {
                      price = priceList.Daily_Price[i].Price;
                      break;
                    }
                  }

                  if (priceList.Discount !== 0) {
                    discountPrice = (price * priceList.Discount) / 100;
                    discountPrice = _.round(price - discountPrice);
                  }
                }

                if (priceList.quantity !== 0) {
                  proceed = true;
                }

                return (
                  <Segment key={key}>
                    <Button
                      size="small"
                      basic
                      color="violet"
                      style={{
                        float: "right",
                        display: priceList.quantity !== 0 ? "none" : "inline"
                      }}
                      onClick={() =>
                        this.intitalizeQuantity(key, true, priceList, price)
                      }
                    >
                      ADD
                    </Button>

                    <span
                      style={{
                        float: "right",
                        display: priceList.quantity !== 0 ? "inline" : "none"
                      }}
                    >
                      <Icon
                        disabled={priceList.quantity === 1 ? true : false}
                        name="minus circle"
                        style={{
                          color: "rgb(43, 0, 119)",
                          fontSize: "20px",
                          display: priceList.quantity !== 0 ? "inline" : "none"
                        }}
                        onClick={() =>
                          this.intitalizeQuantity(key, false, priceList, price)
                        }
                      />
                      <label
                        style={{
                          fontSize: "18px",
                          paddingLeft: "5px",
                          paddingRight: "7px",
                          display: priceList.quantity !== 0 ? "inline" : "none"
                        }}
                      >
                        {priceList.quantity}
                      </label>
                      <Icon
                        disabled={
                          priceList.quantity < priceList.Available
                            ? false
                            : true
                        }
                        name="plus circle"
                        style={{
                          color: "rgb(43, 0, 119)",
                          fontSize: "20px",
                          display: priceList.quantity !== 0 ? "inline" : "none"
                        }}
                        onClick={() =>
                          this.intitalizeQuantity(key, true, priceList, price)
                        }
                      />
                    </span>

                    <h3
                      style={{
                        fontWeight: "500",
                        color: "#ff695e",
                        margin: "0px"
                      }}
                    >
                      {priceList.Price_Caption}
                    </h3>

                    <span
                      style={{
                        color: "rgba(0,0,0,.6)",
                        textDecoration:
                          discountPrice !== undefined ? "line-through" : "none"
                      }}
                    >
                      {currency}
                    </span>

                    <label
                      style={{
                        color: "rgba(0,0,0,.6)",
                        textDecoration:
                          discountPrice !== undefined ? "line-through" : "none"
                      }}
                    >
                      {price}
                    </label>

                    <span
                      style={{
                        color: "rgba(0,0,0,.6)",
                        marginLeft: "5px",
                        display:
                          discountPrice === undefined ? "none" : "initial"
                      }}
                    >
                      {currency}
                    </span>

                    <label
                      style={{
                        color: "rgba(0,0,0,.6)",
                        display:
                          discountPrice === undefined ? "none" : "initial"
                      }}
                    >
                      {discountPrice}
                    </label>

                    <label
                      style={{
                        color: "rgba(0,0,0,.6)",
                        marginLeft: "5px",
                        display: priceList.Discount === 0 ? "none" : "initial"
                      }}
                    >
                      {priceList.Discount} %
                    </label>

                    <br />

                    <label
                      style={{
                        color: "rgba(0,0,0,.6)",
                        whiteSpace: "pre-line"
                      }}
                    >
                      {priceList.Price_Inclusion}
                    </label>
                  </Segment>
                );
              })}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            {/* <label
              style={{
                fontSize: "23px",
                marginRight: "80px"
              }}
            >
              Total
              <span
                style={{
                  fontSize: "23px",
                  marginLeft: "10px"
                }}
              >
                {currency}0
              </span>
            </label> */}
            <Button
              style={{
                backgroundColor: "rgb(255, 90, 95)",
                color: "white",
                opacity: "1",
                width: "280px",
                height: "56px",
                fontSize: "20px",
                fontWeight: "500",
                marginRight: "180px"
              }}
              disabled={proceed ? false : true}
            >
              Procced
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  };

  packageComponent = (
    offer,
    key,
    offerId,
    categoryName,
    offeringName,
    categoryId,
    offeringId,
    merchantMobile
  ) => {
    return (
      <Segment key={key}>
        <Button
          size="small"
          style={{
            float: "right",
            backgroundColor: "rgb(122, 82, 192)",
            color: "white"
          }}
          onClick={() =>
            this.show(
              offer,
              offerId,
              categoryName,
              offeringName,
              categoryId,
              offeringId,
              merchantMobile
            )
          }
        >
          Book
        </Button>

        <h3
          style={{
            fontWeight: "500",
            color: "#ff695e",
            margin: "0px"
          }}
        >
          {offer.Package_Caption}
        </h3>

        <br />

        <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
          {offer.Package_Inclusion}
        </label>
      </Segment>
    );
  };

  eventDateComponent = (stringDay, week, stringMonth, outside, key) => {
    return (
      <Button
        key={key}
        inverted
        color="red"
        onClick={() => this.clickStateChange(outside)}
      >
        <span style={{ display: "block", paddingBottom: "3px" }}>
          {stringMonth}
        </span>
        <span style={{ display: "block", paddingBottom: "3px" }}>{week}</span>
        <span style={{ display: "block", paddingBottom: "3px" }}>
          {stringDay}
        </span>
      </Button>
    );
  };

  eventPackageComponent = (
    inside,
    packages,
    key,
    offerId,
    categoryName,
    offeringName,
    categoryId,
    offeringId,
    merchantMobile
  ) => {
    return (
      <Segment key={key}>
        <Button
          size="small"
          style={{
            float: "right",
            backgroundColor: "rgb(122, 82, 192)",
            color: "white"
          }}
          onClick={() =>
            this.show(
              inside,
              offerId,
              categoryName,
              offeringName,
              categoryId,
              offeringId,
              merchantMobile
            )
          }
        >
          Book
        </Button>

        <h3
          style={{
            fontWeight: "500",
            color: "#ff695e",
            margin: "0px"
          }}
        >
          {inside.Package_Caption}
        </h3>

        <label
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "14px"
          }}
        >
          {moment(packages.Event_Start_Time, ["HH:mm"]).format("h:mm A")}-
          {moment(packages.Event_End_Time, ["HH:mm"]).format("h:mm A")}
        </label>

        <br />
        <br />
        <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
          {inside.Package_Inclusion}
        </label>
      </Segment>
    );
  };

  clickStateChange = packages => {
    this.setState({
      door: true,
      packageList: packages
    });
  };

  clickEventDate = (
    packages,
    offerId,
    categoryName,
    offeringName,
    categoryId,
    offeringId,
    merchantMobile
  ) => {
    return packages.Offer_Package_List.map((inside, key) => {
      return this.eventPackageComponent(
        inside,
        packages,
        key,
        offerId,
        categoryName,
        offeringName,
        categoryId,
        offeringId,
        merchantMobile
      );
    });
  };

  // Month
  getMonth = month => {
    let stringMonth = undefined;

    if (month === 1) {
      stringMonth = "Jan";
    } else if (month === 2) {
      stringMonth = "Feb";
    } else if (month === 3) {
      stringMonth = "Mar";
    } else if (month === 4) {
      stringMonth = "Apr";
    } else if (month === 5) {
      stringMonth = "May";
    } else if (month === 6) {
      stringMonth = "Jun";
    } else if (month === 7) {
      stringMonth = "Jul";
    } else if (month === 8) {
      stringMonth = "Aug";
    } else if (month === 9) {
      stringMonth = "Sep";
    } else if (month === 10) {
      stringMonth = "Oct";
    } else if (month === 11) {
      stringMonth = "Nov";
    } else if (month === 12) {
      stringMonth = "Dec";
    }

    return stringMonth;
  };

  // Week
  getWeek = week => {
    let stringWeek = undefined;
    if (week === 1) {
      stringWeek = "Mon";
    } else if (week === 2) {
      stringWeek = "Tue";
    } else if (week === 3) {
      stringWeek = "Wed";
    } else if (week === 4) {
      stringWeek = "Thu";
    } else if (week === 5) {
      stringWeek = "Fri";
    } else if (week === 6) {
      stringWeek = "Sat";
    } else if (week === 7) {
      stringWeek = "Sun";
    }

    return stringWeek;
  };

  logicPackage = (
    offers,
    status,
    offerId,
    categoryName,
    offeringName,
    categoryId,
    offeringId,
    merchantMobile
  ) => {
    if (status) {
      return offers.map((outside, key) => {
        // Variable
        let stringMonth = undefined;
        let stringWeek = undefined;

        const date = moment(outside.Start_Date, "YYYY/MM/DD");
        let days = date.format("D");
        let month = date.format("M");
        let week = date.day();
        //const year = date.format("YYYY");

        month = parseInt(month, 10);
        week = parseInt(week, 10);

        stringMonth = this.getMonth(month);
        stringWeek = this.getWeek(week);

        if (days.toString().length === 1) {
          days = "0" + days;
        }

        if (outside.End_Date !== null) {
          const endDate = moment(outside.End_Date, "YYYY/MM/DD");
          let endDays = endDate.format("D");
          let endMonth = endDate.format("M");
          let endWeek = endDate.day();
          endMonth = parseInt(endMonth, 10);
          endWeek = parseInt(endWeek, 10);

          const endStringMonth = this.getMonth(endMonth);
          const EndStringWeek = this.getWeek(endWeek);

          stringWeek = stringWeek + "-" + EndStringWeek;

          if (endDays.toString().length === 1) {
            endDays = "0" + endDays;
          }

          days = days + "-" + endDays;
        }

        return this.eventDateComponent(
          stringWeek,
          days,
          stringMonth,
          outside,
          key
        );
      });
    } else {
      return offers.map((offer, key) => {
        return this.packageComponent(
          offer,
          key,
          offerId,
          categoryName,
          offeringName,
          categoryId,
          offeringId,
          merchantMobile
        );
      });
    }
  };

  render() {
    const { door, packageList, open, dimmer } = this.state;
    let offer = [];
    let status = false;
    let currencySymbol = undefined;
    let offerId = undefined;
    let categoryName = undefined;
    let offeringName = undefined;
    let merchantMobile = undefined;
    let categoryId = undefined;
    let offeringId = undefined;

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
          Object.keys(this.props.newViewDetail.newViewDetail.offers.ACTIVITY)
            .length !== 0
        ) {
          offer = this.props.newViewDetail.newViewDetail.offers.ACTIVITY
            .Offer_Package_List;
          currencySymbol = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Currency_Text;
          offerId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offer_Id;
          categoryName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Name;
          offeringName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Name;
          categoryId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Id;
          offeringId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Id;
          merchantMobile = this.props.newViewDetail.newViewDetail.offers
            .Merchant_Details.Merchant_Mobile;
        } else if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.EVENT)
            .length !== 0
        ) {
          offer = this.props.newViewDetail.newViewDetail.offers.EVENT
            .Offer_Package_List;
          currencySymbol = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Currency_Text;
          offerId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offer_Id;
          categoryName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Name;
          offeringName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Name;
          categoryId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Id;
          offeringId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Id;
          merchantMobile = this.props.newViewDetail.newViewDetail.offers
            .Merchant_Details.Merchant_Mobile;
        } else if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.GETAWAY)
            .length !== 0
        ) {
          offer = this.props.newViewDetail.newViewDetail.offers.GETAWAY
            .Offer_Package_List;
          currencySymbol = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Currency_Text;
          offerId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offer_Id;
          categoryName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Name;
          offeringName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Name;
          categoryId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Id;
          offeringId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Id;
          merchantMobile = this.props.newViewDetail.newViewDetail.offers
            .Merchant_Details.Merchant_Mobile;
        } else if (
          Object.keys(this.props.newViewDetail.newViewDetail.offers.SALOON)
            .length !== 0
        ) {
          offer = this.props.newViewDetail.newViewDetail.offers.SALOON
            .Offer_Package_List;
          currencySymbol = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Currency_Text;
          offerId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offer_Id;
          categoryName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Name;
          offeringName = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Name;
          categoryId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Category_Id;
          offeringId = this.props.newViewDetail.newViewDetail.offers
            .Offer_Basic_Details.Offering_Id;
          merchantMobile = this.props.newViewDetail.newViewDetail.offers
            .Merchant_Details.Merchant_Mobile;
        } else {
          return <div />;
        }
      } else {
        return <div />;
      }
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        return <div />;
      } else {
        if (
          Object.keys(this.props.history.location.state.offerData.data.ACTIVITY)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.ACTIVITY
            .Offer_Package_List;
          currencySymbol = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Currency_Text;
          offerId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offer_Id;
          categoryName = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Category_Name;

          offeringName = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offering_Name;
          categoryId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Category_Id;
          offeringId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offering_Id;
          merchantMobile = this.props.history.location.state.offerData.data
            .Merchant_Details.Merchant_Mobile;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.EVENT)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.EVENT
            .Offer_Date_List;
          currencySymbol = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Currency_Text;
          status = true;
          offerId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offer_Id;
          categoryName = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Category_Name;

          offeringName = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offering_Name;
          categoryId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Category_Id;
          offeringId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offering_Id;
          merchantMobile = this.props.history.location.state.offerData.data
            .Merchant_Details.Merchant_Mobile;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.GETAWAY)
            .length !== 0
        ) {
          offer = this.props.history.location.state.offerData.data.GETAWAY
            .Offer_Package_List;
          currencySymbol = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Currency_Text;
          offerId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offer_Id;
          categoryName = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Category_Name;

          offeringName = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offering_Name;
          categoryId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Category_Id;
          offeringId = this.props.history.location.state.offerData.data
            .Offer_Basic_Details.Offering_Id;
          merchantMobile = this.props.history.location.state.offerData.data
            .Merchant_Details.Merchant_Mobile;
        } else if (
          Object.keys(this.props.history.location.state.offerData.data.SALOON)
            .length !== 0
        ) {
          if (
            this.props.history.location.state.offerData.data.SALOON
              .Offer_Type === 1
          ) {
            offer = this.props.history.location.state.offerData.data.SALOON
              .Offer_Package_List;
            currencySymbol = this.props.history.location.state.offerData.data
              .Offer_Basic_Details.Currency_Text;
            offerId = this.props.history.location.state.offerData.data
              .Offer_Basic_Details.Offer_Id;
            categoryName = this.props.history.location.state.offerData.data
              .Offer_Basic_Details.Category_Name;

            offeringName = this.props.history.location.state.offerData.data
              .Offer_Basic_Details.Offering_Name;
            categoryId = this.props.history.location.state.offerData.data
              .Offer_Basic_Details.Category_Id;
            offeringId = this.props.history.location.state.offerData.data
              .Offer_Basic_Details.Offering_Id;
            merchantMobile = this.props.history.location.state.offerData.data
              .Merchant_Details.Merchant_Mobile;
          } else {
            return <div />;
          }
        } else {
          return <div />;
        }
      }
    }

    if (offer === "" || offer === undefined || offer === null) {
      return <div />;
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>PACKAGES</h4>
          <div className={classes.UnderScore} />
        </div>

        <Segment>
          {this.logicPackage(
            offer,
            status,
            offerId,
            categoryName,
            offeringName,
            categoryId,
            offeringId,
            merchantMobile
          )}
          {door
            ? this.clickEventDate(
                packageList,
                offerId,
                categoryName,
                offeringName,
                categoryId,
                offeringId,
                merchantMobile
              )
            : null}
          {open ? this.packageModel(currencySymbol, categoryName) : null}
        </Segment>
      </div>
    );
  }
}
