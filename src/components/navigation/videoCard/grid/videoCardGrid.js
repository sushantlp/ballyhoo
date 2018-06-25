import React from "react";

import { downloadVideo } from "../../../../utils/downloadFile";

import { Grid, Card, Icon, Image, Dropdown } from "semantic-ui-react";
import classes from "./static/css/videoCardGrid.css";

export default class VideoCardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Play Icon is closed initially
      isOpened: false
    };
    // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    //this.toggleBox = this.toggleBox.bind(this);
  }

  playsong = () => {
    this.props.playSong(this.props.video);
  };

  addToNowPlaying = () => {
    this.props.addToNowPlaying(this.props.video);
  };

  downloadSong = () => {
    downloadVideo(this.props.video);
  };

  mouseLeave = () => {
    this.setState({
      // Play Icon of `Closed`
      isOpened: false
    });
  };

  mouseEnter = () => {
    this.setState({
      // Play Icon of `Opened`
      isOpened: true
    });
  };
  render() {
    const isOpened = this.state.isOpened;

    const MAX_TITLE_LENGTH = 30;
    let videoTitle = this.props.video.title;

    if (videoTitle.length > MAX_TITLE_LENGTH) {
      videoTitle = videoTitle.substring(0, MAX_TITLE_LENGTH) + "... ";
    }

    return (
      <Grid columns={1} divided>
        <Card>
          <div
            onMouseLeave={() => this.mouseLeave()}
            onMouseEnter={() => this.mouseEnter()}
            onClick={() => this.playsong()}
          >
            <Image src={this.props.video.thumb} className={classes.ImageCard} />
            {isOpened && (
              <span className={classes.PlayIcon}>
                <Icon name="video play" size="huge" />
              </span>
            )}
          </div>
          <Card.Content>
            <Card.Header>
              <span className={classes.Header}>{videoTitle}</span>
              <span className={classes.Icon}>
                {/* <Icon name="ellipsis vertical" size="small" color="grey" /> */}
                <Dropdown
                  floating
                  labeled
                  className="icon"
                  className={classes.Dropdown}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item
                      //label={{ color: "red", empty: true, circular: true }}
                      text="Queue"
                      icon="add"
                      onClick={() => this.addToNowPlaying()}
                    />
                    <Dropdown.Item
                      text="Download"
                      icon="download"
                      onClick={() => this.downloadSong()}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </Card.Header>
            <Card.Meta>
              <span>{this.props.video.uploader}</span>
              <br />
              <span>{this.props.video.views}</span>
              <br />
              <span className={classes.Duration}>
                {this.props.video.duration}
              </span>
            </Card.Meta>
          </Card.Content>
        </Card>
      </Grid>
    );
  }
}
