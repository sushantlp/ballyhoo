import React from "react";

import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";
import Trending from "./trendingComponent/trending";
import Locality from "./localityComponent/locality";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    if (Object.keys(this.props.match.params).length === 0) {
      this.state = {
        defaultCity: "Bengaluru",
        defaultLocality: "JP Nagar",
        url: "bengaluru/jp-nagar"
      };
    } else if (
      this.props.match.params.hasOwnProperty("city") &&
      this.props.match.params.hasOwnProperty("locality")
    ) {
      this.state = {
        defaultCity: this.props.match.params.city,
        defaultLocality: this.props.match.params.locality,
        url: {}
      };
    } else if (this.props.match.params.hasOwnProperty("city")) {
      this.state = {
        defaultCity: this.props.match.params.city,
        defaultLocality: 0,
        url: {}
      };
    } else {
      this.state = {
        defaultCity: "Bengaluru",
        defaultLocality: "JP Nagar",
        url: "bengaluru/jp-nagar"
      };
    }
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
          stateLocation={this.state.url}
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
