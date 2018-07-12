import React from "react";

import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";
import Trending from "./trendingComponent/trending";
import Locality from "./localityComponent/locality";

export default class Initial extends React.Component {
  componentDidMount() {
    this.props.getCityLocality();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Background
          cityLocality={this.props.cityLocality}
          history={this.props.history}
        />
        <Category />
        <Discover />
        <Trending />
        <Locality />
      </div>
    );
  }
}
