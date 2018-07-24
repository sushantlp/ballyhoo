import React from "react";

import Offerning from "./cardOfferComponent/cardOfferning";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOfferningData(
      this.props.history.location.state.cityId,
      this.props.history.location.state.localityId,
      this.props.history.location.state.offerningId,
      0
    );
  }

  render() {
    return (
      <div>
        <Offerning offerningData={this.props.offerningData} />
      </div>
    );
  }
}
