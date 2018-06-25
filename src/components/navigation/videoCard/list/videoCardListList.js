import React from "react";

//import VideoCardList from "./videoCardList";
import VideoCardGrid from "../grid/videoCardGrid";
import "./static/css/videoCardListList.css";

import { Grid } from "semantic-ui-react";

export default class VideoCardListList extends React.Component {
  render() {
    return (
      <div>
        <Grid relaxed columns={4}>
          {this.props.videos &&
            this.props.videos.map(video => (
              <VideoCardGrid
                video={video}
                key={video.id}
                addToNowPlaying={this.props.addToNowPlaying}
                playSong={this.props.playSong}
              />
            ))}
        </Grid>
      </div>
    );
  }
}
