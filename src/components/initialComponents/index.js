import React from "react";

import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";
import Trending from "./trendingComponent/trending";
import Locality from "./localityComponent/locality";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCity: 1,
      defaultLocality: 267
    };
  }

  componentDidMount() {
    this.props.getCityLocality();
    this.props.getCategoryFilter(this.state.defaultCity);
  }

  render() {
    return (
      <div>
        <Background
          cityLocality={this.props.cityLocality}
          categoryFilter={this.props.categoryFilter}
          history={this.props.history}
          defaultCity={this.state.defaultCity}
          defaultLocality={this.state.defaultLocality}
        />
        <Category />
        <Discover />
        <Trending />
        <Locality />
      </div>
    );
  }
}
