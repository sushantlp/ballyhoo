import React from "react";

import { Segment, Button } from "semantic-ui-react/dist/commonjs";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <label style={{ fontSize: "20px" }}>Payment</label>
          </Segment>

          <Segment />
        </Segment.Group>
      </div>
    );
  }
}
