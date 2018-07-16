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
  trendingMerchantApi: cityId => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v4/web/merchant/trending?" +
          getQueryString({ c_key: cityId })
      ).then(response => {
        response.json().then(categoryFilter => resolve(categoryFilter));
      });
    });
  }
};
