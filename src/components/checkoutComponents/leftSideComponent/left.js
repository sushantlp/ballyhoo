import React from "react";
import _ from "lodash";

import {
  Segment,
  Button,
  Divider,
  Icon
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/left.css";

export default class Left extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Segment style={{ width: "400px" }}>
          <label
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "14px",
              lineHeight: "20px"
            }}
          >
            Your order from
          </label>
          <div>
            <label
              style={{
                fontSize: "22px",
                lineHeight: "26px"
              }}
            >
              DELIBOX
            </label>
          </div>
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
            Place Order
          </Button>

          <Divider />

          <label
            style={{
              fontSize: "20px"
            }}
          >
            Lunch Buffet
          </label>

          <span
            style={{
              position: "absolute",
              left: "190px"
            }}
          >
            <Icon
              name="minus square outline"
              style={{
                color: "rgba(0,0,0,.6)",
                fontSize: "18px",
                display: "inline",
                cursor: "pointer"
              }}
            />
            <label
              style={{
                fontSize: "16px",
                paddingLeft: "5px",
                paddingRight: "7px",
                display: "inline"
              }}
            >
              2
            </label>
            <Icon
              name="plus square outline"
              style={{
                color: "rgba(0,0,0,.6)",
                fontSize: "18px",
                display: "inline",
                cursor: "pointer"
              }}
            />
          </span>

          <span
            style={{
              float: "right"
            }}
          >
            <label
              style={{
                fontSize: "20px"
              }}
            >
              $200
            </label>
          </span>
          <Divider />

          <div
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "14px",
              lineHeight: "20px",
              justifyContent: "space-between"
            }}
          >
            <label>Subtotal</label>

            <label
              style={{
                float: "right"
              }}
            >
              $200
            </label>
          </div>

          <div
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "14px",
              lineHeight: "20px",
              justifyContent: "space-between"
            }}
          >
            <label>Service Charge</label>

            <label
              style={{
                float: "right"
              }}
            >
              $50
            </label>
          </div>

          <div
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "14px",
              lineHeight: "20px",
              justifyContent: "space-between"
            }}
          >
            <label>Cgst</label>

            <label
              style={{
                float: "right"
              }}
            >
              $9
            </label>
          </div>

          <div
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "14px",
              lineHeight: "20px",
              justifyContent: "space-between"
            }}
          >
            <label>Sgst</label>

            <label
              style={{
                float: "right"
              }}
            >
              $9
            </label>
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "bold",
              justifyContent: "space-between",
              paddingTop: "10px"
            }}
          >
            <label>Total</label>

            <label
              style={{
                float: "right"
              }}
            >
              $269
            </label>
          </div>
        </Segment>
      </div>
    );
  }
}
