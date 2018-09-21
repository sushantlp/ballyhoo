import React from "react";
import moment from "moment-timezone";

import { DateInput } from "semantic-ui-calendar-react";

import { Button, Input, Radio, Form } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/signup.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: false,
      lastName: false,
      dob: false,
      gender: false,

      userDob: "",
      userFirstName: "",
      userLastName: "",
      userGender: ""
    };
  }

  componentWillMount() {
    if (this.props.userRecord.First_Name !== null) {
      this.setState({
        userFirstName: this.props.userRecord.First_Name
      });
    }

    if (this.props.userRecord.Last_Name !== null) {
      this.setState({
        userLastName: this.props.userRecord.Last_Name
      });
    }

    if (this.props.userRecord.Sex !== null) {
      this.setState({
        userGender: this.props.userRecord.Sex
      });
    }

    if (this.props.userRecord.Dob !== null) {
      this.setState({
        userDob: this.props.userRecord.Dob
      });
    }
  }
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <div>
        <Input
          disabled={this.state.firstName}
          type="text"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="First-Name..."
          value={this.state.userFirstName}
          onChange={(event, data) => this.checkOtpInput(event, data)}
        />

        <Input
          disabled={this.state.lastName}
          type="text"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="Last-Name..."
          value={this.state.userLastName}
        />

        <Input
          disabled={true}
          type="text"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="Email..."
          value={
            this.props.userRecord.Customer_Email === null
              ? ""
              : this.props.userRecord.Customer_Email
          }
        />

        <Input
          disabled={true}
          type="number"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          placeholder="Mobile..."
          value={
            this.props.userRecord.Customer_Mobile === null
              ? ""
              : this.props.userRecord.Customer_Mobile
          }
        />

        <DateInput
          disabled={this.state.dob}
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "20px"
          }}
          name="date"
          placeholder="Date"
          value={this.state.userDob}
          iconPosition="left"
        />

        <div
          style={{
            marginLeft: "320px",
            marginRight: "320px"
          }}
        >
          <label className={classes.L}>Gender : </label>
          <Radio
            disabled={this.state.gender}
            style={{
              marginLeft: "10px"
            }}
            label="Male"
            name="radioGroup"
            value="male"
            checked={this.state.userGender === "male"}
            onChange={this.handleChange}
          />

          <Radio
            disabled={this.state.gender}
            style={{
              marginLeft: "10px"
            }}
            label="Female"
            name="radioGroup"
            value="female"
            checked={this.state.userGender === "female"}
            onChange={this.handleChange}
          />
        </div>
        <Button
          disabled={this.state.otpButton}
          loading={this.state.otpLoading}
          style={{
            backgroundColor: "#FF5A5F",
            color: "white",
            opacity: "1",
            width: "450px",
            height: "50px",
            fontSize: "20px",
            fontWeight: "500",
            marginTop: "30px",
            marginLeft: "320px",
            marginRight: "320px",
            marginBottom: "30px"
          }}
          //   onClick={() => this.otpButtonClick()}
        >
          Next
        </Button>
      </div>
    );
  }
}
