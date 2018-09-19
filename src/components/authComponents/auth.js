import React from "react";

import {
  Container,
  Segment,
  Button,
  Divider
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/auth.css";

export default class Auth extends React.Component {
  mobileInput = () => {
    return (
      <div
        style={{
          width: "60%",
          height: "200px",
          margin: "0 auto"
        }}
      >
        <p>Enter your phone number (required)</p>
      </div>
    );
  };
  render() {
    console.log(this.props);
    return (
      <Container style={{ marginTop: "100px" }}>
        <h1 style={{ color: "#7a52c0", textAlign: "center" }}>BALLYHOO</h1>
        {this.mobileInput()}
      </Container>
    );
  }
}
