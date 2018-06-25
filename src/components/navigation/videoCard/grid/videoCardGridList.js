import React from "react";

import { Grid, Dimmer, Loader } from "semantic-ui-react";
import VideoCardGrid from "./videoCardGrid";
//import Loader from "react-loaders";

import classes from "./static/css/videoCardGridList.css";
//const Loader = require("react-loaders").Loader;
export default class VideoCardGridList extends React.Component {
  getPlaylist = (name, videos) => {
    return (
      <div key={name}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>{name}</h4>
          <div className={classes.UnderScore} />
        </div>
        <Grid relaxed columns={4}>
          {videos.map(video => (
            <VideoCardGrid
              video={video}
              key={video.id}
              playSong={this.props.playSong}
              addToNowPlaying={this.props.addToNowPlaying}
            />
          ))}
        </Grid>
      </div>
    );
  };

  getPlaylists = () => {
    let keys = Object.keys(this.props.playlists);
    return keys.map(key => {
      let name = key
        .split("_")
        .join(" ")
        .toUpperCase();
      return this.getPlaylist(name, this.props.playlists[key]);
    });
  };
  render() {
    if (this.props.playlists === null || this.props.playlists === undefined) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (Object.keys(this.props.playlists).length === 0) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    return <div>{this.getPlaylists()}</div>;
  }
}
