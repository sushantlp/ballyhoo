import React from "react";
import Helmet, { HelmetProvider } from 'react-helmet-async';

import Header from "../header/header";
import Footer from "../footer/footer";
import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";
import Popular from "./popularComponent/popular";
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
    window.scrollTo(0, 0);
    this.props.getCityLocality();
    this.props.getDiscoverFilter();
  }

  parentCityChange = (cityId, cityName, flag) => {
    if (flag) {
      this.setState({ defaultCity: cityId, cityName: cityName }, function() {
        this.props.getCategoryFilter(this.state.defaultCity);
        this.props.getFacebookEvent(this.state.defaultCity, 0, false);
        this.props.getPopularFilter(this.state.defaultCity);
        this.props.getPopularLocality(this.state.defaultCity);
      });
    } else {
      this.setState(
        { defaultCity: cityId, cityName: cityName, defaultLocality: 0 },
        function() {
          this.props.getCategoryFilter(this.state.defaultCity);
          this.props.getFacebookEvent(this.state.defaultCity, 0, false);
          this.props.getPopularFilter(this.state.defaultCity);
          this.props.getPopularLocality(this.state.defaultCity);
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

  readCityIndex = (cityName, cityList) => {
    for (let i = 0; i < cityList.city.length; i++) {
      if (
        cityName
          .replace(/-/g, " ")
          .replace(/ /g, "")
          .toLowerCase() ===
        cityList.city[i].c_text.replace(/ /g, "").toLowerCase()
      ) {
        return cityList.city[i];
      }
    }
  };

  readLocalityIndex = (localityName, localityList) => {
    for (let i = 0; i < localityList.locality.length; i++) {
      if (
        localityName
          .replace(/-/g, " ")
          .replace(/ /g, "")
          .toLowerCase() ===
        localityList.locality[i].l_text.replace(/ /g, "").toLowerCase()
      ) {
        return localityList.locality[i];
      }
    }
  };

  render() {
    return (
      <HelmetProvider>
        <div>
          <Helmet>
            <meta name="keywords" content="ballyhoo bengaluru experience online offers lunch dinner wine beer" /> 
          </Helmet>
          <Header />
          <Background
            cityLocality={this.props.cityLocality}
            categoryFilter={this.props.categoryFilter}
            defaultCity={this.state.defaultCity}
            defaultLocality={this.state.defaultLocality}
            parentCityChange={this.parentCityChange}
            parentStateChange={this.parentStateChange}
            history={this.props.history}
            url={this.state.url}
            match={this.props.match}
            readCityIndex={this.readCityIndex}
            readLocalityIndex={this.readLocalityIndex}
          />
          <Category
            categoryFilter={this.props.categoryFilter}
            readCityIndex={this.readCityIndex}
            readLocalityIndex={this.readLocalityIndex}
            cityLocality={this.props.cityLocality}
            match={this.props.match}
            history={this.props.history}
          />
          <Discover
            discoverFilter={this.props.discoverFilter}
            readCityIndex={this.readCityIndex}
            readLocalityIndex={this.readLocalityIndex}
            cityLocality={this.props.cityLocality}
            match={this.props.match}
            history={this.props.history}
          />
          <Popular popularFilter={this.props.popularFilter} />
          <Facebook
            facebookEvent={this.props.facebookEvent}
            cityName={this.state.cityName}
            cityId={this.state.defaultCity}
            history={this.props.history}
          />
          <Locality
            popularLocality={this.props.popularLocality}
            cityName={this.state.cityName}
            cityId={this.state.defaultCity}
            match={this.props.match}
            history={this.props.history}
          />
          <Footer />
        </div>      
      </HelmetProvider>
    );
  }
}
