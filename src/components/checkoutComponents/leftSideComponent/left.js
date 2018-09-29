import React from "react";
import _ from "lodash";

import { Segment, Button } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/left.css";

export default class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Segment />
      </div>
    );
  }
}
