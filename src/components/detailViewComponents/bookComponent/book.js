import React from "react";
import moment from "moment-timezone";
import "react-dates/initialize";
// import "react-dates/lib/css/_datepicker.css";

import { SingleDatePicker } from "react-dates";

// import DayPicker from "react-day-picker";

import {
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/book.css";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz("Asia/Kolkata"),
      focused: false
    };
  }

  render() {
    console.log(this.state.date);
    return (
      <div>
        <Segment style={{ width: "400px" }}>
          <label
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "rgba(0,0,0,.9)"
            }}
          >
            ₹9,077
          </label>

          <Divider />

          <span
            style={{
              marginLeft: "24px",
              marginRight: "24px"
            }}
          >
            <label
              style={{
                fontSize: "22px",
                color: "rgba(0,0,0,.6)"
              }}
            >
              Quantity
            </label>

            <Icon
              disabled
              name="minus square outline"
              style={{
                fontSize: "25px",
                marginLeft: "20px"
              }}
            />
            <label
              style={{
                fontSize: "22px",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}
            >
              1
            </label>
            <Icon
              disabled
              name="plus square outline"
              style={{
                fontSize: "25px"
              }}
            />
          </span>

          <div
            style={{
              marginLeft: "24px",
              marginRight: "24px",
              marginTop: "20px"
            }}
          >
            <label
              style={{
                fontSize: "22px",
                color: "rgba(0,0,0,.6)"
              }}
            >
              Date
            </label>
            <span
              style={{
                marginLeft: "60px",
                marginRight: "60px"
              }}
            >
              <SingleDatePicker
                displayFormat="DD-MM-YYYY"
                date={this.state.date} // momentPropTypes.momentObj or null
                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                id="date_input"
              />
            </span>
          </div>
          <Button
            style={{
              backgroundColor: "#FF5A5F",
              color: "white",
              opacity: "1",
              width: "320px",
              height: "50px",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "20px",
              marginLeft: "24px",
              marginRight: "24px"
            }}
          >
            Procced
          </Button>
          <p
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: "5px"
            }}
          >
            You won’t be charged yet
          </p>
        </Segment>
        {/* <DayPicker /> */}
      </div>
    );
  }
}
