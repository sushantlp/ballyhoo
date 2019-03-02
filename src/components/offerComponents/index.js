import React from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import Offerning from "./cardOfferComponent/cardOfferning";

import Helmet, { HelmetProvider } from 'react-helmet-async';


export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiType: 0,
      flag: 0,
      offerSeo: true
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.history.location.state !== undefined) {
      if (this.props.history.location.state.offerData.flag === 1) {
        // Collection
        if (this.props.history.location.state.offerData.api_type === 1) {
          this.setState({
            apiType: 1,
            flag: 1
          });

          this.props.collectionOldOfferData(
            this.props.history.location.state.offerData.scr_id,
            this.props.history.location.state.offerData.city_id,
            this.props.history.location.state.offerData.locality_id,
            0,
            true
          );
        } else {
          this.setState({
            apiType: 2,
            flag: 1
          });

          this.props.collectionNewOfferData(
            this.props.history.location.state.offerData.scr_id,
            this.props.history.location.state.offerData.city_id,
            this.props.history.location.state.offerData.locality_id,
            0,
            true
          );
        }
      } else if (this.props.history.location.state.offerData.flag === 2) {
        if (this.props.history.location.state.offerData.api_type === 1) {
          this.setState({
            apiType: 1,
            flag: 2
          });

          // Discover old offer
          this.props.discoverOldOfferData(
            this.props.history.location.state.offerData.tab_id,
            this.props.history.location.state.offerData.city_id,
            this.props.history.location.state.offerData.locality_id,
            0,
            true
          );
        } else {
          this.setState({
            apiType: 2,
            flag: 2
          });
          // Discover new offer
          this.props.discoverNewOfferData(
            this.props.history.location.state.offerData.tab_id,
            this.props.history.location.state.offerData.city_id,
            this.props.history.location.state.offerData.locality_id,
            0,
            true
          );
        }
      } else if (this.props.history.location.state.offerData.flag === 3) {
        this.setState({
          apiType: 1,
          flag: 3
        });

        // Trending Locality
        this.props.localityOldOfferData(
          this.props.history.location.state.offerData.locality_id,
          0,
          true
        );
      } else {
        return;
      }
    } else {
      this.setState({ offerSeo: false });
      this.props.getCityLocality();
    }
  }

  callDiscoverFilter = () => {
    this.props.getDiscoverFilter();
  };

  callCategoryFilter = cityId => {
    this.props.getCategoryFilter(cityId);
  };

  parentLoadOldOfferData = (
    tabId,
    cityId,
    localityId,
    level,
    apiType,
    flag,
    boolean,
    seo,
    screenId
  ) => {
    if (seo) {
      this.setState({
        offerSeo: true,
        apiType: apiType,
        flag: flag
      });
    }

    if (flag === 1) {
      if (apiType === 1) {
        this.props.collectionOldOfferData(
          screenId,
          cityId,
          localityId,
          level,
          boolean
        );
      } else {
        this.props.collectionNewOfferData(
          screenId,
          cityId,
          localityId,
          level,
          boolean
        );
      }
    } else if (flag === 2) {
      if (apiType === 1) {
        // Discover old offer
        this.props.discoverOldOfferData(
          tabId,
          cityId,
          localityId,
          level,
          boolean
        );
      } else {
        // Discover new offer
        this.props.discoverNewOfferData(
          tabId,
          cityId,
          localityId,
          level,
          boolean
        );
      }
    } else if (flag === 3) {
      // Trending Locality
      this.props.localityOldOfferData(localityId, level, boolean);
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
        <Offerning
          discoverOldOffer={this.props.discoverOldOffer}
          discoverNewOffer={this.props.discoverNewOffer}
          apiType={this.state.apiType}
          flag={this.state.flag}
          offerSeo={this.state.offerSeo}
          parentLoadOldOfferData={this.parentLoadOldOfferData}
          location={this.props.location}
          match={this.props.match}
          history={this.props.history}
          cityLocality={this.props.cityLocality}
          callDiscoverFilter={this.callDiscoverFilter}
          callCategoryFilter={this.callCategoryFilter}
          discoverFilter={this.props.discoverFilter}
          categoryFilter={this.props.categoryFilter}
          collectionOldOffer={this.props.collectionOldOffer}
          collectionNewOffer={this.props.collectionNewOffer}
          localityOldOffer={this.props.localityOldOffer}
        />
        <Footer />
      </div>
      </HelmetProvider>
    );
  }
}
