import React from "react";

import Offerning from "./cardOfferComponent/cardOfferning";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiType: 0,
      apiStatus: 0
    };
  }

  componentDidMount() {
    if (this.props.history.location.state !== undefined) {
      if (this.props.history.location.state.offerData.api_type === 1) {
        this.setState({
          apiType: 1
        });
        if (this.props.history.location.state.offerData.status === 1) {
          this.setState({
            apiStatus: 1
          });
          // Active Offer
          this.props.activeOfferData(
            this.props.history.location.state.offerData.city_id,
            this.props.history.location.state.offerData.locality_id,
            0
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
            0
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
            0
          );
        } else if (this.props.history.location.state.offerData.status === 5) {
          this.setState({
            apiStatus: 5
          });
          // Yolo Offer
          this.props.yoloOfferData(
            this.props.history.location.state.offerData.city_id,
            this.props.history.location.state.offerData.locality_id,
            0
          );
        } else if (this.props.history.location.state.offerData.status === 6) {
          this.setState({
            apiStatus: 6
          });
          // Hashtag Offer
          this.props.hashtagOfferData(
            this.props.history.location.state.offerData.hashtag_id,
            this.props.history.location.state.offerData.city_id,
            this.props.history.location.state.offerData.locality_id,
            0
          );
        }
      } else {
        this.setState({
          apiType: 2
        });
      }
    } else {
    }
  }

  parentLoadOldOfferData = (
    cityId,
    localityId,
    hashtagId,
    offeringId,
    categoryId,
    level,
    status
  ) => {
    if (status === 1) {
      // Active Offer
      this.props.activeOfferData(cityId, localityId, level, false);
    } else if (status === 2) {
      // Category Offer
      this.props.oldCategoryData(cityId, localityId, categoryId, level, false);
    } else if (status === 3) {
      // Offering Offer
      this.props.oldOfferingData(cityId, localityId, offeringId, level, false);
    } else if (status === 4) {
      // Locality Offer
      this.props.localityOfferData(localityId, level, false);
    } else if (status === 5) {
      // Yolo Offer
      this.props.yoloOfferData(cityId, localityId, level, false);
    } else if (status === 6) {
      // Hashtag Offer
      this.props.hashtagOfferData(hashtagId, cityId, localityId, level, false);
    }
  };

  render() {
    return (
      <div>
        <Offerning
          oldOffering={this.props.oldOffering}
          activeOffer={this.props.activeOffer}
          hashtagOffer={this.props.hashtagOffer}
          oldCategory={this.props.oldCategory}
          localityOffer={this.props.localityOffer}
          yoloOffer={this.props.yoloOffer}
          apiType={this.state.apiType}
          apiStatus={this.state.apiStatus}
          parentLoadOldOfferData={this.parentLoadOldOfferData}
          location={this.props.location}
          match={this.props.match}
        />
      </div>
    );
  }
}