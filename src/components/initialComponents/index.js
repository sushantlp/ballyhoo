import React from "react";

import Background from "./backgroundComponent/background";
import Category from "./categoryComponent/category";
import Discover from "./discoverComponent/discover";

export default class Initial extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Background />
        <Category />
        <Discover />
      </div>
    );
  }
}
