import React from "react";

import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";
import Trending from "./trendingComponent/trending";

export default class Initial extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Background />
        <Category />
        <Discover />
        <Trending />
      </div>
    );
  }
}
