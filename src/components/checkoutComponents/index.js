import React from "react";

import Checkout from "./checkoutComponent/checkout";
import Header from "../header/header";
import Footer from "../footer/footer";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verify: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
    if (this.props.history.location.state !== undefined) {
    } else {
      this.props.history.push("/web");
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Checkout history={this.props.history} parentState={this.state} />
        <Footer />
      </div>
    );
  }
}
