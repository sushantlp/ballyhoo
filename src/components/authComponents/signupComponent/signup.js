import React from "react";
import _ from "lodash";

import { DateInput } from "semantic-ui-calendar-react";

import { Button, Input, Radio } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/signup.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: false,
      lastName: false,
      dob: false,
      gender: false,
      otpLoading: false,
      otpButton: false,

      userDob: "",
      userFirstName: "",
      userLastName: "",
      userGender: ""
    };
  }

  componentWillMount() {
    if (!_.isEmpty(this.props.userRecord)) {
      if (
        this.props.userRecord.First_Name !== null &&
        this.props.userRecord.First_Name !== undefined
      ) {
        this.setState({
          userFirstName: this.props.userRecord.First_Name
        });
      }

      if (
        this.props.userRecord.Last_Name !== null &&
        this.props.userRecord.Last_Name !== undefined
      ) {
        this.setState({
          userLastName: this.props.userRecord.Last_Name
        });
      }

      if (
        this.props.userRecord.Sex !== null &&
        this.props.userRecord.Sex !== undefined
      ) {
        this.setState({
          userGender: this.props.userRecord.Sex
        });
      } else {
        this.setState({
          userGender: "male"
        });
      }

      if (
        this.props.userRecord.Dob !== null &&
        this.props.userRecord.Dob !== undefined
      ) {
        this.setState({
          userDob: this.props.userRecord.Dob
        });
      }
    }

    console.log(this.props.updateUserRecord);
  }

  // First Name Update
  firstHandleChange = (event, data) => {
    this.setState({
      userFirstName: data.value
    });
  };

  // Last Name Update
  lastHandleChange = (event, data) => {
    this.setState({
      userLastName: data.value
    });
  };

  // Dob Update
  dobHandleChange = (event, data) => {
    this.setState({
      userDob: data.value
    });
  };

  // Gender Update
  genderHandleChange = (event, data) => {
    this.setState({
      userGender: data.value
    });
  };

  // Button Click Call
  otpSignupClick = () => {
    if (
      this.state.userFirstName === "" ||
      this.state.userFirstName === undefined
    ) {
      // Call Error Message
      this.props.errorMessage(true, "Please fill first name");
    } else if (
      this.state.userLastName === "" ||
      this.state.userLastName === undefined
    ) {
      // Call Error Message
      this.props.errorMessage(true, "Please fill last name");
    } else if (this.state.userDob === "" || this.state.userDob === undefined) {
      // Call Error Message
      this.props.errorMessage(true, "Please fill date of birth");
    } else if (
      this.state.userGender === "" ||
      this.state.userGender === undefined
    ) {
      // Call Error Message
      this.props.errorMessage(true, "Please select gender");
    } else {
      // Store in Session Storage
      const ballyKey = sessionStorage.getItem(
        this.props.BALLY_KEY,
        JSON.stringify(ballyKey)
      );

      // Update State
      this.setState({
        firstName: true,
        lastName: true,
        dob: true,
        gender: true,
        otpLoading: true,
        otpButton: true
      });

      // Call Error Message
      this.props.errorMessage(false, "");

      // Update User Record
      this.props.postUpdateUserRecord(
        this.props.userRecord.Customer_Mobile,
        this.state.userFirstName,
        this.state.userLastName,
        this.props.userRecord.Customer_Email,
        this.state.userDob,
        this.state.userGender,
        ballyKey.token
      );
    }
  };

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
          onChange={(event, data) => this.firstHandleChange(event, data)}
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
          onChange={this.lastHandleChange}
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
          name="userDob"
          placeholder="Date"
          value={this.state.userDob}
          iconPosition="left"
          onChange={this.dobHandleChange}
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
            onChange={this.genderHandleChange}
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
            onChange={this.genderHandleChange}
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
          onClick={() => this.otpSignupClick()}
        >
          Next
        </Button>
      </div>
    );
  }
}
