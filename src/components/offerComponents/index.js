import React from "react";

import Offerning from "./cardOfferComponent/cardOfferning";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiType: 0,
      apiStatus: 0,
      flag: 0,
      offerSeo: true
    };
  }

  componentDidMount() {
    if (this.props.history.location.state !== undefined) {
      if (this.props.history.location.state.offerData.flag === 1) {
        // Collection
        if (this.props.history.location.state.offerData.api_type === 1) {
          this.setState({
            apiType: 1,
            flag: 1
          });
          if (this.props.history.location.state.offerData.status === 1) {
            this.setState({
              apiStatus: 1
            });
            // Active Offer
            this.props.activeOfferData(
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              0,
              true
            );
          } else if (this.props.history.location.state.offerData.status === 2) {
            this.setState({
              apiStatus: 2
            });
            // Category Offer
            this.props.oldCategoryData(
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              this.props.history.location.state.offerData.category_id,
              0,
              true
            );
          } else if (this.props.history.location.state.offerData.status === 3) {
            this.setState({
              apiStatus: 3
            });
            // Offering Offer
            this.props.oldOfferingData(
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              this.props.history.location.state.offerData.offering_id,
              0,
              true
            );
          } else if (this.props.history.location.state.offerData.status === 4) {
            this.setState({
              apiStatus: 4
            });
            // Locality Offer
            this.props.localityOfferData(
              this.props.history.location.state.offerData.locality_id,
              0,
              true
            );
          } else if (this.props.history.location.state.offerData.status === 5) {
            this.setState({
              apiStatus: 5
            });
            // Yolo Offer
            this.props.yoloOfferData(
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              0,
              true
            );
          } else if (this.props.history.location.state.offerData.status === 6) {
            this.setState({
              apiStatus: 6
            });
            // Hashtag Offer
            this.props.hashtagOfferData(
              this.props.history.location.state.offerData.scr_id,
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              0,
              true
            );
          }
        } else {
          this.setState({
            apiType: 2,
            flag: 1
          });

          if (this.props.history.location.state.offerData.status === 2) {
            this.setState({
              apiStatus: 2
            });
            // New Category Offer
            this.props.newCategoryData(
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              this.props.history.location.state.offerData.category_id,
              0,
              true
            );
          } else if (this.props.history.location.state.offerData.status === 3) {
            this.setState({
              apiStatus: 3
            });
            // New Offering Offer
            this.props.newOfferingData(
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              this.props.history.location.state.offerData.offering_id,
              0,
              true
            );
          } else if (this.props.history.location.state.offerData.status === 6) {
            this.setState({
              apiStatus: 6
            });
            console.log("Helo");
            this.props.newHashtagOfferData(
              this.props.history.location.state.offerData.scr_id,
              this.props.history.location.state.offerData.city_id,
              this.props.history.location.state.offerData.locality_id,
              0,
              true
            );
          }
        }
      } else if (this.props.history.location.state.offerData.flag === 2) {
        if (this.props.history.location.state.offerData.api_type === 1) {
          this.setState({
            apiType: 1,
            flag: 2,
            apiStatus: this.props.history.location.state.offerData.status
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
            flag: 2,
            apiStatus: this.props.history.location.state.offerData.status
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
    hashtagId,
    offeringId,
    categoryId,
    level,
    apiStatus,
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
        apiStatus: apiStatus,
        flag: flag
      });
    }

    if (flag === 1) {
      if (apiType === 1) {
        if (apiStatus === 1) {
          // Active Offer
          this.props.activeOfferData(cityId, localityId, level, boolean);
        } else if (apiStatus === 2) {
          // Category Offer
          this.props.oldCategoryData(
            cityId,
            localityId,
            categoryId,
            level,
            boolean
          );
        } else if (apiStatus === 3) {
          // Offering Offer
          this.props.oldOfferingData(
            cityId,
            localityId,
            offeringId,
            level,
            boolean
          );
        } else if (apiStatus === 4) {
          // Locality Offer
          this.props.localityOfferData(localityId, level, boolean);
        } else if (apiStatus === 5) {
          // Yolo Offer
          this.props.yoloOfferData(cityId, localityId, level, boolean);
        } else if (apiStatus === 6) {
          // Hashtag Offer
          this.props.hashtagOfferData(
            screenId,
            cityId,
            localityId,
            level,
            boolean
          );
        }
      } else {
        if (apiStatus === 2) {
          // New Category Offer
          this.props.newCategoryData(
            cityId,
            localityId,
            categoryId,
            level,
            boolean
          );
        } else if (apiStatus === 3) {
          // New Offering Offer
          this.props.newOfferingData(
            cityId,
            localityId,
            offeringId,
            level,
            boolean
          );
        } else if (apiStatus === 6) {
          // New Hashtag Offer
          this.props.newHashtagOfferData(
            screenId,
            cityId,
            localityId,
            level,
            boolean
          );
        }
      }
    } else {
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
    }
  };

  render() {
    return (
      <div>
        <Offerning
          discoverOldOffer={this.props.discoverOldOffer}
          discoverNewOffer={this.props.discoverNewOffer}
          oldOffering={this.props.oldOffering}
          activeOffer={this.props.activeOffer}
          hashtagOffer={this.props.hashtagOffer}
          oldCategory={this.props.oldCategory}
          localityOffer={this.props.localityOffer}
          yoloOffer={this.props.yoloOffer}
          apiType={this.state.apiType}
          apiStatus={this.state.apiStatus}
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
          newCategory={this.props.newCategory}
          newOffering={this.props.newOffering}
          newHashtagOffer={this.props.newHashtagOffer}
        />
      </div>
    );
  }
}
