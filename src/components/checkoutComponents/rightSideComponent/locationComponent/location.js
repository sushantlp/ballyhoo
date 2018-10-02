import React from "react";

import { Segment, Button } from "semantic-ui-react/dist/commonjs";

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <label style={{ fontSize: "20px" }}>Confirm Location</label>
          </Segment>

          <Segment>
            <div style={{ width: "300px" }} />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
