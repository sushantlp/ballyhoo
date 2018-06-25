import React from "react";

import { downloadVideo } from "../../../../utils/downloadFile";
import "./static/css/videoCardList.css";

import { Card, Image, Icon } from "semantic-ui-react";

export default class videoCardList extends React.Component {
  addToNowPlaying() {
    this.props.addToNowPlaying(this.props.video);
  }

  playSong() {
    this.props.playSong(this.props.video);
  }

  downloadSong() {
    downloadVideo(this.props.video);
  }

  render() {
    return (
      <Card>
        <Image src={this.props.video.thumb} />
        {/* <div>
          <Image src={this.props.video.thumb} className={classes.ImageCard} />
          <span className={classes.PlayIcon}>
            <Icon name="video play" size="huge" />
          </span>
        </div> */}
        <Card.Content>
          <Card.Header>
            <span>{this.props.video.title}</span>
            <span>
              <Icon name="ellipsis vertical" size="small" color="grey" />
            </span>
          </Card.Header>
          <Card.Meta>
            <span>{this.props.video.uploader}</span>
            <br />
            <span>{this.props.video.views}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}
