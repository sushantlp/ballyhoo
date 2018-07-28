import getQueryString from "./paramParser";

// Base Url
// const host = "https://ballyhoo-ajayballyhoo.c9users.io/";

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
  oldOfferingApi: (cityId, localityId, offeringId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/offering?" +
          getQueryString({
            c_id: cityId,
            l_id: localityId,
            offering: offeringId,
            level: level
          })
      ).then(response => {
        response.json().then(offeringOffer => resolve(offeringOffer));
      });
    });
  },
  oldCategoryApi: (cityId, localityId, categoryId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/category?" +
          getQueryString({
            c_id: cityId,
            l_id: localityId,
            category: categoryId,
            level: level
          })
      ).then(response => {
        response.json().then(categoryOffer => resolve(categoryOffer));
      });
    });
  },
  activeOfferApi: (cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/active?" +
          getQueryString({
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(activeOffer => resolve(activeOffer));
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
        response.json().then(localityOffer => resolve(localityOffer));
      });
    });
  },
  yoloOfferApi: (cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/yolo?" +
          getQueryString({
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(yoloOffer => resolve(yoloOffer));
      });
    });
  },
  hashtagOfferApi: (hashtagId, cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/hashtag?" +
          getQueryString({
            hash_id: hashtagId,
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(hashtagOffer => resolve(hashtagOffer));
      });
    });
  },
  discoverOldOfferApi: (tabId, cityId, localityId, level) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/offer/category" +
          getQueryString({
            category: tabId,
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
          "api/v4/web/latest/offer/category" +
          getQueryString({
            category: tabId,
            c_id: cityId,
            l_id: localityId,
            level: level
          })
      ).then(response => {
        response.json().then(discoverNewOffer => resolve(discoverNewOffer));
      });
    });
  }
};
