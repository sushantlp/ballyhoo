import getQueryString from "./paramParser";

// Base Url
const host = "https://ballyhoo-ajayballyhoo.c9users.io/"; //"https://ballyhoo.today/";

export default {
  cityLocalityAPI: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v4/web/city/locality").then(response => {
        response.json().then(cityLocality => resolve(cityLocality));
      });
    });
  }
};
