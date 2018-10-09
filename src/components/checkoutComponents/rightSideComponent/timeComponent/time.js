import React from "react";
import TimePicker from "react-times";
import moment from "moment-timezone";

import { Segment, Button } from "semantic-ui-react/dist/commonjs";

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("HH:mm:ss")
    };
  }
  componentDidMount() {
    this.props.updateTime(this.state.time);
  }

  onTimeChange(timeObject) {
    const time =
      timeObject.hour + ":" + timeObject.minute + " " + timeObject.meridiem;

    this.setState({ time: time });

    this.props.updateTime(time);
  }

  render() {
    let headerName = "Delivery Time";
    if (!this.props.parentState.delivery) {
      if (this.props.parentState.oldCategory) {
        const object = this.props.history.location.state.checkoutData;

        if (
          object.detailObject.Offering === "Happy Hours" ||
          object.detailObject.Offering === "Walk-In Service"
        ) {
          headerName = "Time";
        } else {
          return <div />;
        }
      } else {
        headerName = "Time";
      }
    }

    return (
      <div>
        <Segment.Group>
          <Segment>
            <label style={{ fontSize: "20px" }}>{headerName}</label>
          </Segment>

          <Segment>
            <div style={{ width: "300px" }}>
              <TimePicker
                time={this.state.time}
                timeMode="12"
                timezone="Asia/Kolkata"
                onTimeChange={this.onTimeChange.bind(this)}
              />
            </div>
          </Segment>
        </Segment.Group>

        <br />
        <br />
        <br />
      </div>
    );
  }
}
