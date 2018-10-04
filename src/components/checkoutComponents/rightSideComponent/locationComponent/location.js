import React from "react";

import { Segment, Button, Card } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/location.css";

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.parentState.delivery) {
      return <div />;
    }

    return (
      <div>
        <Segment.Group>
          <Segment>
            <label style={{ fontSize: "20px" }}>Confirm Location</label>
          </Segment>

          <Segment>
            <Card.Group>
              <Card raised={true} centered={true}>
                <Card.Content>
                  <Card.Header
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: "#282c3f",
                      lineHeight: "1.18",
                      textTransform: "capitalize"
                    }}
                  >
                    Other
                  </Card.Header>
                  <Card.Description>
                    123, Rashid Manzil, 5th Cross St, TMC Layout, 1st Phase, JP
                    Nagar, Bengaluru, Karnataka 560078, India
                  </Card.Description>

                  <Button
                    style={{
                      padding: "9px 0",
                      color: "#fff",
                      textTransform: "uppercase",
                      backgroundColor: "#60b246",
                      border: "0",
                      cursor: "pointer",
                      width: "130px",
                      height: "34px",
                      fontWeight: "600",
                      textAlign: "center",
                      fontSize: "14px",
                      letterSpacing: ".3px",
                      position: "relative",
                      marginTop: "20px",
                      marginBottom: "10px"
                    }}
                  >
                    DELIVER HERE
                  </Button>
                </Card.Content>
              </Card>

              <Card raised={true} centered={true}>
                <Card.Content>
                  <Card.Header
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: "#282c3f",
                      lineHeight: "1.18",
                      textTransform: "capitalize"
                    }}
                  >
                    Add New Address
                  </Card.Header>
                  <Card.Description />

                  <Button
                    style={{
                      border: "1px solid #60b246",
                      color: "#60b246",
                      background: "#fff",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      width: "130px",
                      height: "34px",
                      fontWeight: "600",
                      textAlign: "center",
                      fontSize: "14px",
                      letterSpacing: ".3px",
                      position: "relative",
                      top: "70px",
                      marginBottom: "10px"
                    }}
                  >
                    ADD NEW
                  </Button>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
        </Segment.Group>

        <br />
        <br />
        <br />
      </div>
    );
  }
}
