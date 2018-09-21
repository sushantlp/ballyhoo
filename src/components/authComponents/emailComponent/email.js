import React from "react";

import { Button, Input } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/email.css";

const Email = props => {
  return (
    <div>
      <label className={classes.H2}>Create an account</label>
      <label className={classes.P}>Enter your email (required)</label>

      <Input
        disabled={props.emailInput}
        type="text"
        style={{
          width: "450px",
          height: "50px",
          marginLeft: "320px"
        }}
        placeholder="Email..."
        onChange={(event, data) => props.checkEmailInput(event, data)}
      />

      <Button
        disabled={props.emailButton}
        loading={props.emailLoading}
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
        onClick={() => props.emailButtonClick()}
      >
        Next
      </Button>
    </div>
  );
};

export default Email;
