import React from "react";

import { searchStatus } from "../../../actions/searchActions";
import VideoCardListList from "../../../components/navigation/videoCard/list/videoCardListList";
import classes from "./static/css/index.css";
import { Dimmer, Loader } from "semantic-ui-react";

export default class NavigationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.query = null;
  }

  componentDidMount() {
    this.makeSearch(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.makeSearch(nextProps);
  }

  makeSearch = props => {
    const query = props.match.params.q;
    if (this.query === query) {
      return;
    }
    this.query = query;
    this.startSearch();
  };

  startSearch = () => {
    this.props.initSearch();
    this.props.search(this.query);
  };

  playSong = video => {
    this.props.playSong(video);
  };

  getHeadline = () => {
    if (this.props.searchStatus === searchStatus.searching) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    } else if (this.props.searchStatus === searchStatus.searching) {
      return;
    }
  };

  render() {
    return (
      <div className={classes.Container}>
        <h2 className={classes.HeaderName}>
          Top Results for{" "}
          <span className={classes.HeaderSpan}>{this.query}</span>
        </h2>
        <div>{this.getHeadline()}</div>
        {
          <VideoCardListList
            videos={this.props.videos}
            addToNowPlaying={this.props.addToNowPlaying}
            playSong={this.props.playSong}
          />
        }
      </div>
    );
  }
}
