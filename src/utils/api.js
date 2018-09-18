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
          "api/v4/web/similar" +
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
          "api/v4/web/check/payment/mode" +
          getQueryString({
            mobile: merchantMobile
          })
      ).then(response => {
        response.json().then(paymentMode => resolve(paymentMode));
      });
    });
  },
  otherAdditionalChargeApi: amount => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v6/customer/purchase/additional/charges" +
          getQueryString({
            amount: amount
          })
      ).then(response => {
        response
          .json()
          .then(otherAdditionalCharge => resolve(otherAdditionalCharge));
      });
    });
  },
  deliveryAdditionalChargeApi: merchantMobile => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v5/customer/deliveryadditionalcharges" +
          getQueryString({
            mobile: merchantMobile
          })
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
          "api/v4/web/user" +
          getQueryString({
            mobile: mobile
          })
      ).then(response => {
        response.json().then(userRecord => resolve(userRecord));
      });
    });
  },
  updateUserRecordApi: (mobile, firstName, lastName, email, birth, gender) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/user/profile" +
          getQueryString({
            mobile: mobile,
            first_name: firstName,
            last_name: lastName,
            email: email,
            birth: birth,
            gender: gender
          })
      ).then(response => {
        response.json().then(updateUserRecord => resolve(updateUserRecord));
      });
    });
  },

  registerNewUserApi: (mobile, email) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v7/customer/newuser" +
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
          "api/v3/generic/otp/verify" +
          getQueryString({
            mobile: mobile,
            code: code
          })
      ).then(response => {
        response.json().then(verifyOtp => resolve(verifyOtp));
      });
    });
  }
};
