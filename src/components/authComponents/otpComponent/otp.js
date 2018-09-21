import React from "react";

import { Button, Input } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/otp.css";

const Otp = props => {
  return (
    <div>
      <label className={classes.H2}>Create an account</label>
      <label className={classes.P}>Enter otp (required)</label>

      <Input
        disabled={props.otpInput}
        type="number"
        style={{
          width: "450px",
          height: "50px",
          marginLeft: "320px"
        }}
        placeholder="Otp..."
        onChange={(event, data) => props.checkOtpInput(event, data)}
      />

      <Button
        disabled={props.otpButton}
        loading={props.otpLoading}
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
        onClick={() => props.otpButtonClick()}
      >
        Next
      </Button>

      <p className={classes.Anchor}>Resend otp</p>
    </div>
  );
};

export default Otp;
