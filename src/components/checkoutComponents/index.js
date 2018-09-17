import React from "react";

import Checkout from "./checkoutComponent/checkout";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.history.location.state !== undefined) {
      console.log(this.props);
    } else {
      this.props.history.push("/web");
    }
  }

  render() {
    return (
      <div>
        <Checkout />
      </div>
    );
  }
}
