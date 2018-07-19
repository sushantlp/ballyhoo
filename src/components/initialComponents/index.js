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
        url: "bengaluru/jp-nagar",
        cityName: ""
      };
    } else if (
      this.props.match.params.hasOwnProperty("city") &&
      this.props.match.params.hasOwnProperty("locality")
    ) {
      this.state = {
        defaultCity: this.props.match.params.city,
        defaultLocality: this.props.match.params.locality,
        url: {},
        cityName: ""
      };
    } else if (this.props.match.params.hasOwnProperty("city")) {
      this.state = {
        defaultCity: this.props.match.params.city,
        defaultLocality: 0,
        url: {},
        cityName: ""
      };
    } else {
      this.state = {
        defaultCity: "Bengaluru",
        defaultLocality: "JP Nagar",
        url: "bengaluru/jp-nagar",
        cityName: ""
      };
    }
  }

  componentDidMount() {
    this.props.getCityLocality();
    this.props.getDiscoverFilter();
  }

  parentCityChange = (cityId, cityName, flag) => {
    if (flag) {
      this.setState({ defaultCity: cityId, cityName: cityName }, function() {
        this.props.getCategoryFilter(this.state.defaultCity);
        this.props.getFacebookEvent(this.state.defaultCity, 0, false);
      });
    } else {
      this.setState(
        { defaultCity: cityId, cityName: cityName, defaultLocality: 0 },
        function() {
          this.props.getCategoryFilter(this.state.defaultCity);
          this.props.getFacebookEvent(this.state.defaultCity, 0, false);
        }
      );
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
          parentCityChange={this.parentCityChange}
          parentStateChange={this.parentStateChange}
          url={this.state.url}
          match={this.props.match}
        />
        <Category categoryFilter={this.props.categoryFilter} />
        <Discover discoverFilter={this.props.discoverFilter} />
        <Trending />
        <Facebook
          facebookEvent={this.props.facebookEvent}
          cityName={this.state.cityName}
          cityId={this.state.defaultCity}
          history={this.props.history}
        />
        <Locality
          defaultCity={this.state.defaultCity}
          cityLocality={this.props}
        />
      </div>
    );
  }
}
