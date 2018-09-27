import axios from "axios";
import getQueryString from "./paramParser";

// Base Url
//const host = "https://ballyhoo-ajayballyhoo.c9users.io/";

const host = "https://ballyhoo.today/";

export default {
  cityLocalityApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v4/web/city/locality").then(response => {
        response.json().then(cityLocality => resolve(cityLocality));
      });
    });
  },

  categoryFilterApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/show/category/filter?" +
          getQueryString({ c_key: cityId })
      ).then(response => {
        response.json().then(categoryFilter => resolve(categoryFilter));
      });
    });
  },

  discoverFilterApi: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v4/web/show/discover/filter").then(response => {
        response.json().then(discoverFilter => resolve(discoverFilter));
      });
    });
  },

  popularFilterApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/trending/merchants?" +
          getQueryString({ c_id: cityId })
      ).then(response => {
        response.json().then(popularFilter => resolve(popularFilter));
      });
    });
  },

  popularLocalityApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/trending/localities?" +
          getQueryString({ c_id: cityId })
      ).then(response => {
        response.json().then(popularLocality => resolve(popularLocality));
      });
    });
  },

  facebookEventApi: (cityId, skip) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/facebook/events?" +
          getQueryString({ c_id: cityId, skip: skip })
      ).then(response => {
        response.json().then(facebookEvent => resolve(facebookEvent));
      });
    });
  },

  discoverOldOfferApi: (tabId, cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/discover?" +
          getQueryString({
            tab: tabId,
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(discoverOldOffer => resolve(discoverOldOffer));
      });
    });
  },

  discoverNewOfferApi: (tabId, cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/latest/offer/discover?" +
          getQueryString({
            tab: tabId,
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(discoverNewOffer => resolve(discoverNewOffer));
      });
    });
  },

  collectionOldOfferApi: (screenId, cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/fnb/home/screen?" +
          getQueryString({
            screen_id: screenId,
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(collectionOldOffer => resolve(collectionOldOffer));
      });
    });
  },

  collectionNewOfferApi: (screenId, cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/latest/home/screen?" +
          getQueryString({
            screen_id: screenId,
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(collectionNewOffer => resolve(collectionNewOffer));
      });
    });
  },

  localityOfferApi: (localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/locality?" +
          getQueryString({
            search: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(localityOldOffer => resolve(localityOldOffer));
      });
    });
  },

  oldViewDetailApi: offerId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/fnb/offer/detail?" +
          getQueryString({
            offer_id: offerId
          })
      ).then(response => {
        response.json().then(oldViewDetail => resolve(oldViewDetail));
      });
    });
  },

  newViewDetailApi: offerId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/latest/offer/detail?" +
          getQueryString({
            offer_id: offerId
          })
      ).then(response => {
        response.json().then(newViewDetail => resolve(newViewDetail));
      });
    });
  },

  similarOfferApi: (merchantId, offeringId) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/similar?" +
          getQueryString({
            m_id: merchantId,
            o_id: offeringId
          })
      ).then(response => {
        response.json().then(similarOffer => resolve(similarOffer));
      });
    });
  },
  paymentModeApi: merchantMobile => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/check/payment/mode?" +
          getQueryString({
            mobile: merchantMobile
          })
      ).then(response => {
        response.json().then(paymentMode => resolve(paymentMode));
      });
    });
  },
  otherAdditionalChargeApi: (amount, token) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/purchase/additional/charges?" +
          getQueryString({
            amount: amount
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token
          })
        }
      ).then(response => {
        response
          .json()
          .then(otherAdditionalCharge => resolve(otherAdditionalCharge));
      });
    });
  },
  deliveryAdditionalChargeApi: (merchantMobile, token) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v5/customer/deliveryadditionalcharges?" +
          getQueryString({
            mobile: merchantMobile
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response
          .json()
          .then(deliveryAdditionalCharge => resolve(deliveryAdditionalCharge));
      });
    });
  },
  userRecordApi: mobile => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/user?" +
          getQueryString({
            mobile: mobile
          })
      )
        .then(response => {
          response
            .json()
            .then(userRecord => resolve(userRecord))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },
  updateUserRecordApi: (
    mobile,
    firstName,
    lastName,
    email,
    birth,
    gender,
    token
  ) => {
    // axios
    //   .post(`${host}api/v4/web/user/profile?`, {
    //     mobile: mobile,
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: email,
    //     birth: birth,
    //     gender: gender
    //   })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    };

    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/user/profile?" +
          getQueryString({
            mobile: mobile,
            first_name: firstName,
            last_name: lastName,
            email: email,
            birth: birth,
            gender: gender
          }),
        {
          method: "POST"
          //credentials: "same-origin",
          // headers: new Headers(header)
        }
      )
        .then(response => {
          response
            .json()
            .then(updateUserRecord => resolve(updateUserRecord))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },
  registerNewUserApi: (mobile, email) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v7/customer/newuser?" +
          getQueryString({
            mobile: mobile,
            email: email
          })
      ).then(response => {
        response.json().then(registerNewUser => resolve(registerNewUser));
      });
    });
  },
  verifyOtpApi: (mobile, code) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v3/generic/otp/verify?" +
          getQueryString({
            mobile: mobile,
            code: code
          }),
        {
          method: "POST"
        }
      )
        .then(response => {
          response
            .json()
            .then(verifyOtp => resolve(verifyOtp))
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    });
  },
  fnbRazorpayApi: (
    dealId,
    quantity,
    amount,
    mobile,
    time,
    reservationDate,
    razorpayPaymentId,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/deal/payment?" +
          getQueryString({
            dealid: dealId,
            quantity: quantity,
            amount: amount,
            mobile: mobile,
            time: time,
            reservationDate: reservationDate,
            razorpayPaymentId: razorpayPaymentId
          }),
        {
          method: "POST",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(fnbRazorpay => resolve(fnbRazorpay));
      });
    });
  },
  fnbWalletApi: (dealId, quantity, amount, mobile, token) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/deal/pointredeem?" +
          getQueryString({
            dealid: dealId,
            quantity: quantity,
            amount: amount,
            mobile: mobile
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(fnbWallet => resolve(fnbWallet));
      });
    });
  },
  fnbPaytmApi: (
    dealId,
    orderId,
    quantity,
    mobile,
    amount,
    hash,
    mid,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/paytm /verify/paytm/transaction?" +
          getQueryString({
            deal_id: dealId,
            order_id: orderId,
            quantity: quantity,
            mobile: mobile,
            amount: amount,
            hash: hash,
            mid: mid
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(fnbPaytm => resolve(fnbPaytm));
      });
    });
  },
  fnbVenueApi: (
    mobile,
    dealId,
    amount,
    quantity,
    time,
    reservationDate,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v5/customer/deal/pav/payment?" +
          getQueryString({
            mobile: mobile,
            deal_id: dealId,
            amount: amount,
            quantity: quantity,
            time: time,
            reservation_date: reservationDate
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(fnbVenue => resolve(fnbVenue));
      });
    });
  },

  deliveryRazorpayApi: (
    mobile,
    dealId,
    amount,
    deliveryDate,
    deliveryTime,
    razorpayPaymentId,
    customerDetail,
    itemDetail,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v5/customer/deal/delivery/payment?" +
          getQueryString({
            mobile: mobile,
            deal_id: dealId,
            amount: amount,
            delivery_date: deliveryDate,
            delivery_time: deliveryTime,
            razorpay_payment_id: razorpayPaymentId,
            customer_details: customerDetail,
            item_details: itemDetail
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(deliveryRazorpay => resolve(deliveryRazorpay));
      });
    });
  },
  deliveryWalletApi: (
    mobile,
    dealId,
    amount,
    deliveryDate,
    deliveryTime,
    customerDetail,
    itemDetail,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v5/customer/deal/delivery/pointredeem?" +
          getQueryString({
            mobile: mobile,
            deal_id: dealId,
            amount: amount,
            delivery_date: deliveryDate,
            delivery_time: deliveryTime,
            customer_details: customerDetail,
            item_details: itemDetail
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(deliveryWallet => resolve(deliveryWallet));
      });
    });
  },
  deliveryPaytmApi: (
    mobile,
    dealId,
    orderId,
    hash,
    mid,
    amount,
    deliveryDate,
    deliveryTime,
    customerDetail,
    itemDetail,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v5/customer/delivery/capturepaytmresponse?" +
          getQueryString({
            mobile: mobile,
            deal_id: dealId,
            order_id: orderId,
            hash: hash,
            mid: mid,
            amount: amount,
            delivery_date: deliveryDate,
            delivery_time: deliveryTime,
            customer_details: customerDetail,
            item_details: itemDetail
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(deliveryPaytm => resolve(deliveryPaytm));
      });
    });
  },
  deliveryVenueApi: (
    mobile,
    dealId,
    amount,
    deliveryDate,
    deliveryTime,
    customerDetail,
    itemDetail,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v5/customer/deal/delivery/cashorder?" +
          getQueryString({
            mobile: mobile,
            deal_id: dealId,
            amount: amount,
            delivery_date: deliveryDate,
            delivery_time: deliveryTime,
            customer_details: customerDetail,
            item_details: itemDetail
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(deliveryVenue => resolve(deliveryVenue));
      });
    });
  },
  newCategoryRazorpayApi: (
    offerId,
    mobile,
    amount,
    paymentId,
    bookingAt,
    orderItemList,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/other/category/razor/purchase?" +
          getQueryString({
            offer_id: offerId,
            mobile: mobile,
            amount: amount,
            payment_id: paymentId,
            booking_at: bookingAt,
            order_item_list: orderItemList
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response
          .json()
          .then(newCategoryRazorpay => resolve(newCategoryRazorpay));
      });
    });
  },
  newCategoryWalletApi: (
    offerId,
    mobile,
    amount,
    bookingAt,
    orderItemList,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/other/category/wallet/purchase?" +
          getQueryString({
            offer_id: offerId,
            mobile: mobile,
            amount: amount,
            booking_at: bookingAt,
            order_item_list: orderItemList
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(newCategoryWallet => resolve(newCategoryWallet));
      });
    });
  },
  newCategoryPaytmApi: (
    offerId,
    orderId,
    mid,
    hash,
    mobile,
    amount,
    bookingAt,
    orderItemList,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/other/category/paytm/purchase?" +
          getQueryString({
            offer_id: offerId,
            order_id: orderId,
            mid: mid,
            hash: hash,
            mobile: mobile,
            amount: amount,
            booking_at: bookingAt,
            order_item_list: orderItemList
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(newCategoryPaytm => resolve(newCategoryPaytm));
      });
    });
  },
  newCategoryVenueApi: (
    offerId,
    mobile,
    amount,
    bookingAt,
    orderItemList,
    token
  ) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/other/category/pav/purchase?" +
          getQueryString({
            offer_id: offerId,
            mobile: mobile,
            amount: amount,
            booking_at: bookingAt,
            order_item_list: orderItemList
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(newCategoryVenue => resolve(newCategoryVenue));
      });
    });
  },
  saloonReservationApi: (offerId, mobile, bookingAt, token) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/other/category/online/reserve?" +
          getQueryString({
            offer_id: offerId,
            mobile: mobile,
            booking_at: bookingAt
          }),
        {
          method: "post",
          headers: new Headers({
            Authorization: "Bearer " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          })
        }
      ).then(response => {
        response.json().then(saloonReservation => resolve(saloonReservation));
      });
    });
  }
};
