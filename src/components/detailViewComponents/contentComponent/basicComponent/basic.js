import React from "react";

import {
  Label,
  Segment,
  Icon,
  Grid,
  Image
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/basic.css";

export default class Basic extends React.Component {
  render() {
    return (
      <div>
        <Label
          style={{
            float: "right",
            backgroundColor: "#fa4a4d",
            color: "white",
            marginTop: "4px"
          }}
        >
          <Icon name="star" style={{ padding: "0px" }} />
          3.5
        </Label>

        <h2
          style={{
            fontWeight: "500",
            color: "rgb(122, 82, 192)",
            margin: "0px"
          }}
        >
          Lunch Buffet
        </h2>
        <label
          style={{
            color: "rgba(0,0,0,.6)"
          }}
        >
          Toscano - Whitefeild
        </label>

        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>BASIC</h4>
          <div className={classes.UnderScore} />
        </div>

        <Segment>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column width={12} style={{ marginBottom: "8px" }}>
                <label
                  style={{
                    color: "rgba(0,0,0,.6)",

                    fontSize: "18px",
                    display: "inline"
                  }}
                >
                  Food-type :
                </label>

                <Image
                  style={{
                    display: "inline",
                    marginLeft: "10px"
                  }}
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg"
                />
                <Image
                  style={{
                    display: "inline",
                    marginLeft: "5px"
                  }}
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png"
                />
              </Grid.Column>

              <Grid.Column width={12} style={{ marginBottom: "8px" }}>
                <label
                  style={{
                    color: "rgba(0,0,0,.6)",
                    fontSize: "18px",
                    display: "inline"
                  }}
                >
                  Actual-price :
                </label>

                <Icon
                  style={{
                    fontSize: "18px",
                    lineHeight: "25px",
                    marginLeft: "10px",
                    color: "rgba(0,0,0,.68)"
                  }}
                  name="rupee"
                >
                  <label
                    style={{
                      fontSize: "18px",
                      lineHeight: "25px",
                      paddingLeft: "1px",
                      color: "rgba(0,0,0,.68)"
                    }}
                  >
                    750
                    <span
                      style={{
                        fontSize: "16px",
                        paddingLeft: "2px",
                        color: "rgba(0,0,0,.68)"
                      }}
                    >
                      Onwards
                    </span>
                  </label>
                </Icon>
              </Grid.Column>

              <Grid.Column width={12} style={{ marginBottom: "8px" }}>
                <label
                  style={{
                    color: "rgba(0,0,0,.6)",
                    fontSize: "18px",
                    display: "inline"
                  }}
                >
                  Pay-only :
                </label>

                <Icon
                  name="rupee"
                  style={{
                    marginLeft: "10px",
                    fontSize: "18px",
                    textDecoration: "line-through",
                    color: "rgba(0,0,0,.68)"
                  }}
                >
                  <span>
                    <label
                      style={{
                        textDecoration: "line-through",
                        fontSize: "18px",
                        color: "rgba(0,0,0,.68)"
                      }}
                    >
                      750
                    </label>
                  </span>
                </Icon>

                <Icon
                  name="rupee"
                  style={{
                    fontSize: "18px",
                    color: "rgba(0,0,0,.68)",
                    marginLeft: "30px",
                    color: "rgba(0,0,0,.68)"
                  }}
                >
                  <span>
                    <label
                      style={{
                        fontSize: "18px",
                        paddingLeft: "1px"
                      }}
                    >
                      500
                    </label>
                  </span>
                </Icon>

                <Label
                  as="a"
                  basic
                  style={{
                    marginLeft: "35px",
                    fontSize: "12px",
                    color: "rgba(0,0,0,.68)"
                  }}
                >
                  10% OFF
                </Label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
