import React from "react";

import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";
import Trending from "./trendingComponent/trending";
import Facebook from "./facebookComponent/facebookEvent";
import Locality from "./localityComponent/locality";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);

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
    this.props.getDiscoverFilter();
    this.props.getFacebookEvent();
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

  parentStateChange = (name, flag) => {
    if (flag) {
      this.setState({ defaultCity: name });
    } else {
      this.setState({ defaultLocality: name });
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
          parentStateChange={this.parentStateChange}
          url={this.state.url}
          match={this.props.match}
        />
        <Category categoryFilter={this.props.categoryFilter} />
        <Discover facebookEvent={this.props.facebookEvent} />
        <Trending />
        <Facebook getFacebookEvent={this.props.getFacebookEvent} />
        <Locality
          defaultCity={this.state.defaultCity}
          cityLocality={this.props}
        />
      </div>
    );
  }
}
