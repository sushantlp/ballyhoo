import React from "react";
import _ from "lodash";

import {
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react/dist/commonjs";

export default class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.parentState.delivery) {
      if (
        this.props.deliveryAdditionalCharge !==
          nextProp.deliveryAdditionalCharge &&
        nextProp.deliveryAdditionalCharge.status !== "START"
      ) {
        if (nextProp.deliveryAdditionalCharge.status === "SUCCESS") {
          this.props.updateFinalGrandTotal(
            nextProp.deliveryAdditionalCharge.charge.grand_total
          );

          this.props.updateFinalCharge(
            nextProp.deliveryAdditionalCharge.charge.charges
          );
        }
      }
    } else {
      if (
        this.props.otherAdditionalCharge !== nextProp.otherAdditionalCharge &&
        nextProp.otherAdditionalCharge.status !== "START"
      ) {
        if (nextProp.otherAdditionalCharge.status === "SUCCESS") {
          this.props.updateFinalGrandTotal(
            nextProp.otherAdditionalCharge.charge.grand_total
          );

          this.props.updateFinalCharge(
            nextProp.otherAdditionalCharge.charge.charges
          );
        }
      }
    }
  }

  oldIntitalizeQuantity = status => {
    if (status) {
      if (
        this.props.parentState.finalQuantity <
        this.props.history.location.state.checkoutData.detailObject.DISCOUNT
          .OrderLimit
      ) {
        const quantity = this.props.parentState.finalQuantity + 1;
        this.props.updateFinalQuantity(quantity);
        this.props.updateFinalPrice(
          this.props.history.location.state.checkoutData.detailBookingPrice *
            quantity
        );

        this.calculateAdditionalCharge(
          this.props.history.location.state.checkoutData.detailBookingPrice *
            quantity,
          this.props.parentState.finalCharge
        );
      }
    } else {
      const quantity = this.props.parentState.finalQuantity - 1;
      if (quantity === 0) {
      } else {
        this.props.updateFinalQuantity(quantity);
        this.props.updateFinalPrice(
          this.props.parentState.finalPrice -
            this.props.history.location.state.checkoutData.detailBookingPrice
        );

        this.calculateAdditionalCharge(
          this.props.parentState.finalPrice -
            this.props.history.location.state.checkoutData.detailBookingPrice,
          this.props.parentState.finalCharge
        );
      }
    }
  };

  calculateAdditionalCharge = (finalPrice, finalCharge) => {
    let percent = 0;
    let sum = 0;

    finalCharge.map((charge, key) => {
      if (charge.type === 1) {
        sum = sum + charge.value;
      } else if (charge.type === 2) {
        percent = percent + charge.value;
      }
    });

    if (percent !== 0) {
      const calulatePercent = _.round((finalPrice * percent) / 100);
      finalPrice = finalPrice + calulatePercent;
    }

    if (sum !== 0) {
      finalPrice = finalPrice + sum;
    }

    this.props.updateFinalGrandTotal(finalPrice);
  };

  newIntitalizeQuantity = (status, priceId, available, quantity) => {
    const copyBookingDetail = this.props.parentState.newBookingState;

    for (let i = 0; i < copyBookingDetail.packageList.length; i++) {
      for (
        let j = 0;
        j < copyBookingDetail.packageList[i].priceList.length;
        j++
      ) {
        if (
          priceId === copyBookingDetail.packageList[i].priceList[j].price_id
        ) {
          if (status) {
            if (quantity < available) {
              copyBookingDetail.packageList[i].priceList[j].quantity =
                copyBookingDetail.packageList[i].priceList[j].quantity + 1;
            }
          } else {
            if (quantity === 1) {
              copyBookingDetail.packageList[i].priceList.splice(j, 1);
            } else {
              copyBookingDetail.packageList[i].priceList[j].quantity =
                copyBookingDetail.packageList[i].priceList[j].quantity - 1;
            }
          }
        }
      }
    }

    const finalPrice = this.calculateNewCategoryAmount(copyBookingDetail);

    this.calculateAdditionalCharge(
      finalPrice,
      this.props.parentState.finalCharge
    );

    this.props.updateFinalPrice(finalPrice);

    this.props.updateNewBookingState(copyBookingDetail);
  };

  calculateNewCategoryAmount = copyBookingDetail => {
    let finalAmount = 0;

    for (let i = 0; i < copyBookingDetail.packageList.length; i++) {
      for (
        let j = 0;
        j < copyBookingDetail.packageList[i].priceList.length;
        j++
      ) {
        finalAmount =
          finalAmount +
          copyBookingDetail.packageList[i].priceList[j].price *
            copyBookingDetail.packageList[i].priceList[j].quantity;
      }
    }

    return finalAmount;
  };

  firstHalfComponent = merchantBname => {
    return (
      <div>
        <label
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "14px",
            lineHeight: "20px"
          }}
        >
          Your order from
        </label>
        <div>
          <label
            style={{
              fontSize: "22px",
              lineHeight: "26px"
            }}
          >
            {merchantBname}
          </label>
        </div>
        <Button
          disabled={this.props.parentState.placeOrderButtonDisabled}
          loading={this.props.parentState.placeOrderButtonLoading}
          style={{
            backgroundColor: "#FF5A5F",
            color: "white",
            opacity: "1",
            width: "320px",
            height: "50px",
            fontSize: "20px",
            fontWeight: "500",
            marginTop: "20px",
            marginLeft: "24px",
            marginRight: "24px"
          }}
          onClick={() => this.props.placeOrderButtonClick()}
        >
          Place Order
        </Button>
      </div>
    );
  };

  oldSecondHalfQuantityComponent = quantity => {
    return (
      <span
        style={{
          position: "absolute",
          left: "190px"
        }}
      >
        <Icon
          name="minus square outline"
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "18px",
            display: "inline",
            cursor: "pointer"
          }}
          onClick={() => this.oldIntitalizeQuantity(false)}
        />
        <label
          style={{
            fontSize: "16px",
            paddingLeft: "5px",
            paddingRight: "7px",
            display: "inline"
          }}
        >
          {quantity}
        </label>
        <Icon
          name="plus square outline"
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "18px",
            display: "inline",
            cursor: "pointer"
          }}
          onClick={() => this.oldIntitalizeQuantity(true)}
        />
      </span>
    );
  };

  newSecondHalfQuantityComponent = (quantity, priceId, available) => {
    return (
      <span
        style={{
          position: "absolute",
          left: "150px"
        }}
      >
        <Icon
          name="minus square outline"
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "16px",
            display: "inline",
            cursor: "pointer"
          }}
          onClick={() =>
            this.newIntitalizeQuantity(false, priceId, available, quantity)
          }
        />
        <label
          style={{
            fontSize: "14px",
            paddingLeft: "5px",
            paddingRight: "7px",
            display: "inline"
          }}
        >
          {quantity}
        </label>
        <Icon
          name="plus square outline"
          style={{
            color: "rgba(0,0,0,.6)",
            fontSize: "16px",
            display: "inline",
            cursor: "pointer"
          }}
          onClick={() =>
            this.newIntitalizeQuantity(true, priceId, available, quantity)
          }
        />
      </span>
    );
  };

  oldSecondHalfComponent = (
    offeringTitle,
    price,
    currencySymbol,
    quantity,
    promoApply
  ) => {
    return (
      <div>
        <label
          style={{
            fontSize: "20px"
          }}
        >
          {offeringTitle}
        </label>

        {promoApply ? null : this.oldSecondHalfQuantityComponent(quantity)}
        <span
          style={{
            float: "right"
          }}
        >
          <label
            style={{
              fontSize: "20px"
            }}
          >
            {currencySymbol}
            {price}
          </label>
        </span>
      </div>
    );
  };

  newSecondHalfComponent = (
    packagename,
    priceList,
    currencySymbol,
    key,
    promoApply
  ) => {
    return (
      <div key={key}>
        <h4
          style={{
            fontWeight: "500",
            color: "rgb(122, 82, 192)",
            margin: "0px",
            display: priceList.length > 0 ? "inline" : "none"
          }}
        >
          {packagename}
        </h4>

        {priceList.map((price, key) => {
          let totalAmount = 0;
          if (price.quantity === 1) {
            totalAmount = price.price;
          } else {
            totalAmount = price.quantity * price.price;
          }

          return (
            <Segment key={key} style={{ marginBottom: "10px" }}>
              <label
                style={{
                  fontSize: "18px"
                }}
              >
                {price.price_caption}
              </label>

              {promoApply
                ? null
                : this.newSecondHalfQuantityComponent(
                    price.quantity,
                    price.price_id,
                    price.available
                  )}
              <span
                style={{
                  float: "right"
                }}
              >
                <label
                  style={{
                    fontSize: "18px"
                  }}
                >
                  {currencySymbol}
                  {totalAmount}
                </label>
              </span>

              <div />
            </Segment>
          );
        })}
      </div>
    );
  };

  newSecondHalfLogic = (packages, currencySymbol, promoApply) => {
    return packages.map((pack, key) => {
      return this.newSecondHalfComponent(
        pack.package_caption,
        pack.priceList,
        currencySymbol,
        key,
        promoApply
      );
    });
  };

  thirdHalfComponent = (subtotal, currencySymbol) => {
    return (
      <div
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "14px",
          lineHeight: "10px",
          justifyContent: "space-between"
        }}
      >
        <label>Subtotal</label>

        <label
          style={{
            float: "right"
          }}
        >
          {currencySymbol}
          {subtotal}
        </label>
      </div>
    );
  };

  fourthHalfPromoCodeDisplay = (promoDiscountValue, currencySymbol) => {
    return (
      <div
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "14px",
          lineHeight: "22px",
          justifyContent: "space-between"
        }}
      >
        <label>Promocode</label>

        <label
          style={{
            float: "right"
          }}
        >
          {currencySymbol}
          {promoDiscountValue.discount_value}
        </label>

        <span
          style={{
            color: "rgba(65,228,13,1)",
            fontSize: "14px",
            float: "right"
          }}
        >
          &#8722;
        </span>
      </div>
    );
  };
  fourthHalfAdditionalCharge = (name, value, type, currencySymbol, key) => {
    return (
      <div
        key={key}
        style={{
          color: "rgba(0,0,0,.6)",
          fontSize: "14px",
          lineHeight: "22px",
          justifyContent: "space-between"
        }}
      >
        <label>{name}</label>

        <span
          style={{
            display: type === 2 ? "inline" : "none",
            color: "rgba(0,0,0,.6)",
            fontSize: "12px",
            float: "right"
          }}
        >
          &#x25;
        </span>

        <label
          style={{
            float: "right"
          }}
        >
          {type === 1 ? currencySymbol : null}
          {value}
        </label>

        <span
          style={{
            display: type === 1 ? "inline" : "none",
            color: "rgba(241,19,58,1)",
            fontSize: "14px",
            float: "right"
          }}
        >
          &#x2b;
        </span>
      </div>
    );
  };

  fourthHalfTotalAmount = (grandTotal, currencySymbol) => {
    return (
      <div
        style={{
          fontSize: "14px",
          lineHeight: "10px",
          fontWeight: "bold",
          justifyContent: "space-between",
          paddingTop: "10px"
        }}
      >
        <label>Total</label>

        <label
          style={{
            float: "right"
          }}
        >
          {currencySymbol}
          {grandTotal}
        </label>
      </div>
    );
  };

  fourthHalfComponent = (
    charge,
    promoApply,
    promoType,
    currencySymbol,
    promoDiscountValue,
    finalGrandTotal
  ) => {
    return (
      <div>
        {promoApply
          ? promoType === "CASH_DISCOUNT"
            ? this.fourthHalfPromoCodeDisplay(
                promoDiscountValue,
                currencySymbol
              )
            : null
          : null}

        {charge.charges.map((item, key) => {
          return this.fourthHalfAdditionalCharge(
            item.name,
            item.value,
            item.type,
            currencySymbol,
            key
          );
        })}
        <Divider />
        {this.fourthHalfTotalAmount(finalGrandTotal, currencySymbol)}
      </div>
    );
  };

  render() {
    let merchantBname = undefined;
    let charge = {};

    if (this.props.parentState.delivery) {
      if (this.props.deliveryAdditionalCharge.status === "START") {
        return <Segment style={{ width: "400px", height: "400px" }} />;
      } else {
        if (this.props.deliveryAdditionalCharge.status === "SUCCESS") {
          charge = this.props.deliveryAdditionalCharge.charge;
        } else {
          // Call Error Message
          this.props.errorMessage(
            true,
            this.props.deliveryAdditionalCharge.msg
          );
          return <Segment style={{ width: "400px", height: "400px" }} />;
        }
      }
    } else {
      if (this.props.otherAdditionalCharge.status === "START") {
        return <Segment style={{ width: "400px", height: "400px" }} />;
      } else {
        if (this.props.otherAdditionalCharge.status === "SUCCESS") {
          charge = this.props.otherAdditionalCharge.charge;
        } else {
          // Call Error Message
          this.props.errorMessage(true, this.props.otherAdditionalCharge.msg);

          return <Segment style={{ width: "400px", height: "400px" }} />;
        }
      }
    }

    if (this.props.parentState.oldCategory) {
      merchantBname = this.props.history.location.state.checkoutData
        .detailObject.MERCHANT.Business;
    } else {
      merchantBname = this.props.history.location.state.checkoutData
        .detailObject.merchant_bname;
    }

    return (
      <div>
        <Segment style={{ width: "400px" }}>
          {this.firstHalfComponent(merchantBname)}
          <Divider />
          <Segment style={{ overflow: "auto", maxHeight: 200 }}>
            {this.props.parentState.oldCategory
              ? this.oldSecondHalfComponent(
                  this.props.history.location.state.checkoutData.detailObject
                    .offering_title,
                  this.props.parentState.finalPrice,
                  this.props.history.location.state.checkoutData.currencySymbol,
                  this.props.parentState.finalQuantity,
                  this.props.parentState.promoApply
                )
              : this.newSecondHalfLogic(
                  this.props.history.location.state.checkoutData.detailObject
                    .packageList,
                  this.props.history.location.state.checkoutData.currencySymbol,
                  this.props.parentState.promoApply
                )}
          </Segment>
          <Divider />

          {this.thirdHalfComponent(
            this.props.parentState.finalPrice,
            this.props.history.location.state.checkoutData.currencySymbol
          )}

          <Divider />
          {this.fourthHalfComponent(
            charge,
            this.props.parentState.promoApply,
            this.props.parentState.promoType,
            this.props.history.location.state.checkoutData.currencySymbol,
            this.props.parentState.promoDiscountValue,
            this.props.parentState.finalGrandTotal
          )}
        </Segment>
      </div>
    );
  }
}
