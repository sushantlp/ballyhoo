import getQueryString from "./paramParser";

export const host =
  /*"https://api-any-tune-sushantlp.c9users.io/";*/ "http://localhost:8080/";

export default {
  search: query => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/search?" + getQueryString({ type: query })).then(
        response => {
          response.json().then(videos => resolve(videos));
        }
      );
    });
  },
  getDownloadLink: getUrl => {
    return new Promise((resolve, reject) => {
      fetch(host + getUrl).then(response =>
        response.json().then(data => resolve(data))
      );
    });
  },
  getPlaylists: () => {
    return new Promise((resolve, reject) => {
      fetch(host + "api/v1/playlist?").then(response =>
        response.json().then(data => resolve(data.results))
      );
    });
  },
  getPlaylistSongs: (playlists, count) => {
    let commaSeparatedPlaylists = playlists.map(a => a.playlist).join();
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/trending?" +
          getQueryString({ type: commaSeparatedPlaylists, number: count })
      ).then(response => response.json().then(data => resolve(data.results)));
    });
  }
};
