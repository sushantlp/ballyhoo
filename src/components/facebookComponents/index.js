import React from "react";

import Facebook from "./facebookComponent/facebookEvent";

export default class Initial extends React.Component {
  componentDidMount() {
    this.props.getFacebookEvent(
      this.props.history.location.state.cityId,
      0,
      true
    );
  }

  parentLoadFacebookEvent = skip => {
    this.props.getFacebookEvent(
      this.props.history.location.state.cityId,
      skip,
      true
    );
  };

  render() {
    return (
      <div>
        <Facebook
          facebookEvent={this.props.facebookEvent}
          history={this.props.history}
          parentLoadFacebookEvent={this.parentLoadFacebookEvent}
        />
      </div>
    );
  }
}
