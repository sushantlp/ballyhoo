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

      errorMessage: false,
      errorText: "",
      sweetAlert: false,

      userMobile: "",
      userEmail: "",
      userOtp: "",
      userMobileCode: "",

      mobileButton: true,
      mobileInput: false,
      mobileDropdown: false,
      mobileLoading: false,

      emailButton: true,
      emailInput: false,
      emailLoading: false,

      otpButton: true,
      otpInput: false,
      otpLoading: false
    };
  }

  componentWillMount() {
    this.createCountryCode(countryCode);
  }

  componentWillReceiveProps(nextProp) {
    if (
      this.props.registerNewUser.registerNewUser !==
      nextProp.registerNewUser.registerNewUser
    ) {
      if (nextProp.registerNewUser.registerNewUser) {
        this.setState({
          sweetAlert: true,
          emailInput: false,
          emailLoading: false,
          emailButton: false
        });
      } else {
        const errorText =
          "Please provide the original email associated with the account. For email update send a request to  contact@ballyhoo.today";
        this.setState({
          errorMessage: true,
          errorText: errorText,
          emailInput: false,
          emailLoading: false,
          emailButton: false
        });
      }
    } else if (
      this.props.verifyOtp.verifyOtp !== nextProp.verifyOtp.verifyOtp
    ) {
      if (nextProp.verifyOtp.verifyOtp) {
        this.goCheckoutRoute();
      } else {
        this.setState({
          errorMessage: true,
          errorText: "wrong otp",
          otpInput: false,
          otpLoading: false,
          otpButton: false
        });
      }
    }
  }

  goCheckoutRoute = () => {
    console.log(this.props);
  };

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

    this.setState({
      userMobileCode: heaven.value
    });
  };

  mobileButtonClick = () => {
    this.setState({
      mobile: false,
      email: true,
      mobileInput: true,
      mobileDropdown: true,
      mobileLoading: true
    });
  };

  emailButtonClick = () => {
    if (!emailReg.test(this.state.userEmail)) {
      this.setState({
        errorMessage: true,
        errorText: "This email is invalid"
      });
    } else {
      this.setState({
        emailButton: true,
        emailInput: true,
        emailLoading: true
      });

      const mobile = this.state.userMobileCode + this.state.userMobile;
      this.props.getRegisterNewUser(mobile, this.state.userEmail);
    }
  };

  otpButtonClick = () => {
    this.setState({
      otpButton: true,
      otpInput: true,
      otpLoading: true
    });

    const mobile = this.state.userMobileCode + this.state.userMobile;
    this.props.postVerifyOtp(mobile, this.state.userOtp);
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

  checkOtpInput = (event, data) => {
    if (data.value.length >= 4) {
      this.setState({
        otpButton: false,
        userOtp: data.value
      });
    } else {
      this.setState({
        otpButton: true,
        userOtp: data.value
      });
    }
  };

  mobileInput = () => {
    return (
      <div>
        <label className={classes.H2}>Create an account</label>
        <label className={classes.P}>Enter your phone number (required)</label>

        <Input
          disabled={this.state.mobileInput}
          type="number"
          style={{
            width: "450px",
            height: "50px",
            marginLeft: "320px"
          }}
          onChange={(event, data) => this.checkMobileInput(event, data)}
          label={
            <Dropdown
              disabled={this.state.mobileDropdown}
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
          loading={this.state.mobileLoading}
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
          disabled={this.state.emailInput}
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
          loading={this.state.emailLoading}
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
          disabled={this.state.otpInput}
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
        text="We will be sending the otp to the mentioned email."
        onConfirm={() => this.sweetAlertButtonClick()}
      />
    );
  };

  errorMessage = () => {
    return (
      <Message negative>
        <Message.Header>Oops error</Message.Header>
        <p>{this.state.errorText}</p>
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
