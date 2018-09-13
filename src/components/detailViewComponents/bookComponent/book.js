import React from "react";

import {
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/book.css";

export default class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Segment style={{ width: "400px" }}>
          <label
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "rgba(0,0,0,.9)"
            }}
          >
            ₹9,077
          </label>

          <Divider />

          <span
            style={{
              marginLeft: "24px",
              marginRight: "24px"
            }}
          >
            <label
              style={{
                fontSize: "22px",
                color: "rgba(0,0,0,.6)"
              }}
            >
              Quantity
            </label>

            <Icon
              disabled
              name="minus square outline"
              style={{
                fontSize: "25px",
                marginLeft: "20px"
              }}
            />
            <label
              style={{
                fontSize: "22px",
                paddingLeft: "10px",
                paddingRight: "10px"
              }}
            >
              1
            </label>
            <Icon
              disabled
              name="plus square outline"
              style={{
                fontSize: "25px"
              }}
            />
          </span>

          <Button
            style={{
              backgroundColor: "#FF5A5F",
              color: "white",
              opacity: "1",
              width: "320px",
              height: "50px",
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "20px",
              marginLeft: "24px",
              marginRight: "24px"
            }}
          >
            Procced
          </Button>
          <p
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginTop: "5px"
            }}
          >
            You won’t be charged yet
          </p>
        </Segment>
      </div>
    );
  }
}
