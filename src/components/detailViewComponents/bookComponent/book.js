import React from "react";

import {
  Card,
  Container,
  Segment,
  Rating,
  Button
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/book.css";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Segment style={{ width: "400px", height: "400px" }}>
          <label
            style={{
              fontSize: "14px"
            }}
          >
            ₹9,077
          </label>
        </Segment>
      </div>
    );
  }
}
