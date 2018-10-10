import React from "react";

import { Button, Input, Dropdown } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/mobile.css";

const Mobile = props => {
  return (
    <div>
      <label className={classes.H2}>Create an account</label>
      <label className={classes.P}>Enter your phone number (required)</label>

      <Input
        disabled={props.mobileInput}
        type="number"
        style={{
          width: "450px",
          height: "50px",
          marginLeft: "320px"
        }}
        onChange={(event, data) => props.checkMobileInput(event, data)}
        label={
          <Dropdown
            disabled={props.mobileDropdown}
            options={props.code}
            onChange={(event, data) => props.onChangeCountry(event, data)}
            onClick={() => props.createCountryCode(props.countryCode)}
            defaultValue={"+91"}
            style={{
              paddingTop: "18px",
              backgroundColor: "rgb(39, 37, 37)",
              color: "white"
            }}
          />
        }
        labelPosition="left"
        placeholder="Mobile..."
      />

      <Button
        disabled={props.mobileButton}
        loading={props.mobileLoading}
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
        onClick={() => props.mobileButtonClick()}
      >
        Next
      </Button>
    </div>
  );
};

export default Mobile;
