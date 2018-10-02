import React from "react";

import { Segment, Input, Dropdown } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/payment.css";

import { PAYMENT_MODE } from "../../../../constants";

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <label style={{ fontSize: "20px" }}>Payment</label>
          </Segment>

          <Segment>
            <Dropdown
              style={{ width: "450px" }}
              selection
              options={PAYMENT_MODE}
              //   onChange={(event, data) => props.onChangeCountry(event, data)}
              //   onClick={() => props.createCountryCode(props.countryCode)}
              defaultValue={"Online payment"}
            />

            <label
              style={{
                display: "none",
                lineHeight: "16px",
                fontSize: "12px",
                paddingTop: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#7a52c0"
              }}
            >
              Add promo code
            </label>

            <Input
              style={{ marginTop: "20px" }}
              disabled={false}
              action={{
                color: "violet",
                labelPosition: "right",
                icon: "arrow right",
                content: "Apply",
                loading: false
              }}
            />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
