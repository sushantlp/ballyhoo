import React from "react";
import _ from "lodash";

import { Container } from "semantic-ui-react/dist/commonjs";

import {
  COUNTRY_CODE,
  EMAIL_REG,
  USER_DATA,
  STORAGE,
  BALLY_KEY
} from "../../constants";

// Component
import Signup from "./signupComponent/signup";
import Otp from "./otpComponent/otp";
import Mobile from "./mobileComponent/mobile";
import Email from "./emailComponent/email";
import Sweet from "./sweetAlertComponent/sweet";
import Message from "./messageComponent/message";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [],
      backupCode: [],

      mobile: true,
      email: false,
      otp: false,
      signup: false,

      errorMessage: false,
      errorText: "",
      sweetAlert: false,

      userMobile: "",
      userEmail: "",
      userOtp: "",
      userMobileCode: "+91",

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
    this.createCountryCode(COUNTRY_CODE);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.registerNewUser !== nextProp.registerNewUser) {
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
    } else if (this.props.verifyOtp !== nextProp.verifyOtp) {
      if (nextProp.verifyOtp.verifyOtp) {
        this.callUserDetailApi();
      } else {
        // Success Action
        this.props.registerFailure(false);

        // Store in Session Storage
        sessionStorage.setItem(STORAGE, "FAILURE");

        // State Update
        this.setState({
          errorMessage: true,
          errorText: "wrong otp",
          otpInput: false,
          otpLoading: false,
          otpButton: false
        });
      }
    } else if (
      this.props.userRecord.userRecord !== nextProp.userRecord.userRecord
    ) {
      if (!_.isEmpty(nextProp.userRecord.userRecord)) {
        this.checkUserData(nextProp.userRecord.userRecord);
      }
    }
  }

  checkUserData = userRecord => {
    const ballyKey = {
      token: userRecord.Token.Token,
      role: userRecord.Token.Role,
      razorpay: userRecord.RazorPay_Key
    };

    // Store in Session Storage
    sessionStorage.setItem(BALLY_KEY, JSON.stringify(ballyKey));

    if (
      userRecord.Customer_Email === null ||
      userRecord.Customer_Mobile === null ||
      userRecord.First_Name === null ||
      userRecord.Last_Name === null ||
      userRecord.Dob === null ||
      userRecord.Sex === null
    ) {
      this.setState({
        otp: false,
        otpButton: true,
        otpInput: true,
        otpLoading: false,
        signup: true
      });
    } else {
      this.goCheckoutRoute();
    }
  };

  goCheckoutRoute = () => {
    const object = this.props.location.state.checkoutData;
    this.props.history.push("/web/checkout", {
      checkoutData: object
    });
  };

  callUserDetailApi = () => {
    const mobileString = this.state.userMobileCode.toString();
    const mobileSlice = mobileString.slice(1);
    const mobile = mobileSlice + this.state.userMobile;

    // Get User Record
    this.props.getUserRecord(mobile);

    // Success Action
    this.props.registerSuccess(true);

    // User Data Object
    const userData = {
      userMobile: this.state.userMobile,
      userEmail: this.state.userEmail
    };

    // Store in Session Storage
    sessionStorage.setItem(STORAGE, "SUCCESS");
    sessionStorage.setItem(USER_DATA, JSON.stringify(userData));
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

    this.setState({
      userMobileCode: heaven.value
    });

    this.state.code.splice(heaven.key, 1, {
      text: heaven.value,
      key: heaven.key,
      value: heaven.value
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
    if (!EMAIL_REG.test(this.state.userEmail)) {
      this.setState({
        errorMessage: true,
        errorText: "This email is invalid"
      });
    } else {
      this.setState({
        emailButton: true,
        emailInput: true,
        emailLoading: true,
        errorMessage: false
      });

      const mobileString = this.state.userMobileCode.toString();
      const mobileSlice = mobileString.slice(1);
      const mobile = mobileSlice + this.state.userMobile;
      this.props.getRegisterNewUser(mobile, this.state.userEmail);
    }
  };

  otpButtonClick = () => {
    this.setState({
      otpButton: true,
      otpInput: true,
      otpLoading: true
    });

    const mobileString = this.state.userMobileCode.toString();
    const mobileSlice = mobileString.slice(1);
    const mobile = mobileSlice + this.state.userMobile;
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
        userOtp: data.value,
        errorMessage: false
      });
    } else {
      this.setState({
        otpButton: true,
        userOtp: data.value,
        errorMessage: false
      });
    }
  };

  errorMessage = (flag, text) => {
    this.setState({
      errorMessage: flag,
      errorText: text
    });
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
          <Container text style={{ marginBottom: "10px" }}>
            <Message errorText={this.state.errorText} />
          </Container>
        ) : null}
        {this.state.sweetAlert ? (
          <Sweet sweetAlertButtonClick={this.sweetAlertButtonClick} />
        ) : null}

        {this.state.mobile ? (
          <Mobile
            mobileButtonClick={this.mobileButtonClick}
            checkMobileInput={this.checkMobileInput}
            mobileInput={this.state.mobileInput}
            mobileButton={this.state.mobileButton}
            mobileLoading={this.state.mobileLoading}
            countryCode={COUNTRY_CODE}
            createCountryCode={this.createCountryCode}
            onChangeCountry={this.onChangeCountry}
            code={this.state.code}
          />
        ) : null}

        {this.state.email ? (
          <Email
            emailInput={this.state.emailInput}
            checkEmailInput={this.checkEmailInput}
            emailButton={this.state.emailButton}
            emailLoading={this.state.emailLoading}
            emailButtonClick={this.emailButtonClick}
          />
        ) : null}

        {this.state.otp ? (
          <Otp
            otpButtonClick={this.otpButtonClick}
            checkOtpInput={this.checkOtpInput}
            otpInput={this.state.otpInput}
            otpButton={this.state.otpButton}
            otpLoading={this.state.otpLoading}
          />
        ) : null}

        {this.state.signup ? (
          <Signup
            userRecord={this.props.userRecord.userRecord}
            errorMessage={this.errorMessage}
            postUpdateUserRecord={this.props.postUpdateUserRecord}
            updateUserRecord={this.props.updateUserRecord}
            BALLY_KEY={BALLY_KEY}
            goCheckoutRoute={this.goCheckoutRoute}
          />
        ) : null}
      </Container>
    );
  }
}
