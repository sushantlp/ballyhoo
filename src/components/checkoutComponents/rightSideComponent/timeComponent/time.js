import React from "react";
import TimePicker from "react-times";
import moment from "moment-timezone";

import { Segment, Button } from "semantic-ui-react/dist/commonjs";

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("HH:mm A")
    };
  }

  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <label style={{ fontSize: "20px" }}>Delivery Time</label>
          </Segment>

          <Segment>
            <div style={{ width: "300px" }}>
              <TimePicker
                time={this.state.time}
                timeMode="12"
                timezone="Asia/Kolkata"
                //   onTimeChange={this.onTimeChange.bind(this)}
              />
            </div>
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
