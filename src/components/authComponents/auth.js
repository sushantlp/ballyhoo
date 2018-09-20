import React from "react";
import _ from "lodash";
import SweetAlert from "sweetalert2-react";
import {
  Container,
  Dropdown,
  Button,
  Input,
  Message
} from "semantic-ui-react/dist/commonjs";

import { countryCode, emailReg } from "../../constants";
import classes from "./static/css/auth.css";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [],
      backupCode: [],
      mobile: true,
      email: false,
      otp: false,
      mobileButton: true,
      emailButton: true,
      errorMessage: false,
      sweetAlert: false,
      userMobile: "",
      userEmail: ""
    };
  }

  createCountryCode = countryCode => {
    const options = countryCode.map(({ name, dial_code }, key) => ({
      value: dial_code,
      text: dial_code + " " + name,
      key: key
    }));

    this.setState({
      code: options,
      backupCode: options
    });
  };

  onChangeCountry = (e, data) => {
    const heaven = _.find(
      this.state.code,
      _.matchesProperty("value", data.value)
    );

    this.state.code.splice(heaven.key, 1, {
      text: heaven.value,
      key: heaven.key,
      value: heaven.value
    });
  };

  componentWillMount() {
    this.createCountryCode(countryCode);
  }

  mobileButtonClick = () => {
    this.setState({
      mobile: false,
      email: true
    });
  };

  emailButtonClick = () => {
    if (!emailReg.test(this.state.userEmail)) {
      this.setState({
        errorMessage: true
      });
    } else {
      this.props.getRegisterNewUser(
        this.state.userMobile,
        this.state.userEmail
      );
      this.setState({
        sweetAlert: true
      });
    }
  };

  sweetAlertButtonClick = () => {
    this.setState({
      email: false,
      sweetAlert: false,
      otp: true
    });
  };

  checkMobileInput = (event, data) => {
    if (data.value.length > 0) {
      this.setState({
        mobileButton: false,
        userMobile: data.value
      });
    } else {
      this.setState({
        mobileButton: true,
        userMobile: data.value
      });
    }
  };

  checkEmailInput = (event, data) => {
    if (data.value.length > 0) {
      this.setState({
        emailButton: false,
        userEmail: data.value,
        errorMessage: false
      });
    } else {
      this.setState({
        emailButton: true,
        userEmail: data.value,
        errorMessage: false
      });
    }
  };

  mobileInput = () => {
    return (
      <div>
        <label className={classes.H2}>Create an account</label>
        <label className={classes.P}>Enter your phone number (required)</label>

        <Input
          type="number"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px"
          }}
          onChange={(event, data) => this.checkMobileInput(event, data)}
          label={
            <Dropdown
              options={this.state.code}
              onChange={(event, data) => this.onChangeCountry(event, data)}
              onClick={() => this.createCountryCode(countryCode)}
              defaultValue={"+91"}
              style={{
                paddingTop: "18px",
                backgroundColor: "#7a52c0",
                color: "white"
              }}
            />
          }
          labelPosition="left"
          placeholder="Mobile..."
        />

        <Button
          disabled={this.state.mobileButton}
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
            marginRight: "320px"
          }}
          onClick={() => this.mobileButtonClick()}
        >
          Next
        </Button>
      </div>
    );
  };

  emailInput = () => {
    return (
      <div>
        <label className={classes.H2}>Create an account</label>
        <label className={classes.P}>Enter your email (required)</label>

        <Input
          type="text"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px"
          }}
          placeholder="Email..."
          onChange={(event, data) => this.checkEmailInput(event, data)}
        />

        <Button
          disabled={this.state.emailButton}
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
            marginRight: "320px"
          }}
          onClick={() => this.emailButtonClick()}
        >
          Next
        </Button>
      </div>
    );
  };

  otpInput = () => {
    return (
      <div>
        <label className={classes.H2}>Create an account</label>
        <label className={classes.P}>Enter otp (required)</label>

        <Input
          type="number"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px"
          }}
          placeholder="Otp..."
          onChange={(event, data) => this.checkOtpInput(event, data)}
        />

        <Button
          disabled={this.state.emailButton}
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
            marginRight: "320px"
          }}
          onClick={() => this.otpButtonClick()}
        >
          Next
        </Button>

        <p className={classes.Anchor}>Resend otp</p>
      </div>
    );
  };

  sweetAlert = () => {
    return (
      <SweetAlert
        show={true}
        title="Ballyhoo"
        imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
        text="We will be sending the otp your mentioned email id."
        onConfirm={() => this.sweetAlertButtonClick()}
      />
    );
  };
  errorMessage = () => {
    return (
      <Message negative>
        <Message.Header>Oops error</Message.Header>
        <p>This Email is invalid</p>
      </Message>
    );
  };

  render() {
    return (
      <Container>
        <h1
          style={{
            color: "#7a52c0",
            textAlign: "center",
            fontSize: "35px",
            paddingTop: "70px",
            paddingBottom: "40px"
          }}
        >
          BALLYHOO
        </h1>

        {this.state.errorMessage ? (
          <Container text>{this.errorMessage()}</Container>
        ) : null}
        {this.state.sweetAlert ? this.sweetAlert() : null}
        {this.state.mobile ? this.mobileInput() : null}
        {this.state.email ? this.emailInput() : null}
        {this.state.otp ? this.otpInput() : null}
      </Container>
    );
  }
}
