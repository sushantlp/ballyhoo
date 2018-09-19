import React from "react";

import Facebook from "./facebookComponent/facebookEvent";
import Header from "../header/header";
import Footer from "../footer/footer";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookSeo: true
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.history.location.state !== undefined) {
      this.props.getFacebookEvent(
        this.props.history.location.state.cityId,
        0,
        true
      );
    } else {
      this.setState({ facebookSeo: false });
      this.props.getCityLocality();
    }
  }

  parentLoadFacebookEvent = (cityId, skip) => {
    if (this.state.facebookSeo) {
      this.props.getFacebookEvent(
        this.props.history.location.state.cityId,
        skip,
        true
      );
    } else {
      this.props.getFacebookEvent(cityId, skip, true);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Facebook
          facebookEvent={this.props.facebookEvent}
          history={this.props.history}
          match={this.props.match}
          facebookSeo={this.state.facebookSeo}
          parentLoadFacebookEvent={this.parentLoadFacebookEvent}
          cityLocality={this.props.cityLocality}
        />
        <Footer />
      </div>
    );
  }
}
