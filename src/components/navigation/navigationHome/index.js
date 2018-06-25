import React from "react";

import VideoCardGridList from "../videoCard/grid/videoCardGridList";
import classes from "./static/css/index.css";
//import { Container } from "semantic-ui-react";

export default class NavigationHome extends React.Component {
  componentDidMount() {
    this.props.getPlaylists(10);
  }

  render() {
    return (
      <div className={classes.Container}>
        <VideoCardGridList
          playlists={this.props.playlists}
          playSong={this.props.playSong}
          addToNowPlaying={this.props.addToNowPlaying}
        />
      </div>
    );
  }
}
