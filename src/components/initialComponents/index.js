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
      defaultCity: "Bengaluru",
      defaultLocality: "JP Nagar"
    };
  }

  componentDidMount() {
    this.props.getCityLocality();
    // this.props.getCategoryFilter(1);
    this.props.getDiscoverFilter();
  }

  parentCityChange = (cityId, flag) => {
    if (flag) {
      this.setState({ defaultCity: cityId }, function() {
        this.props.getCategoryFilter(this.state.defaultCity);
      });
    } else {
      this.setState({ defaultCity: cityId, defaultLocality: 0 }, function() {
        this.props.getCategoryFilter(this.state.defaultCity);
      });
    }
  };

  render() {
    return (
      <div>
        <Background
          cityLocality={this.props.cityLocality}
          categoryFilter={this.props.categoryFilter}
          history={this.props.history}
          defaultCity={this.state.defaultCity}
          defaultLocality={this.state.defaultLocality}
          categoryFilter={this.props.categoryFilter}
          parentCityChange={this.parentCityChange}
        />
        <Category categoryFilter={this.props.categoryFilter} />
        <Discover discoverFilter={this.props.discoverFilter} />
        <Trending />
        <Locality
          defaultCity={this.state.defaultCity}
          cityLocality={this.props.cityLocality}
        />
      </div>
    );
  }
}
