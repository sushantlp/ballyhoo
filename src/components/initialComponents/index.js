import React from "react";

import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";
import Trending from "./trendingComponent/trending";
import Locality from "./localityComponent/locality";

export default class Initial extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Background />
        <Category />
        <Discover />
        <Trending />
        <Locality />
      </div>
    );
  }
}
