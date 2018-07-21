import React from "react";

import Offerning from "./cardOfferComponent/cardOfferning";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Offerning />
      </div>
    );
  }
}
