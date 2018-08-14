import React from "react";
import { Container, Grid, Label, Icon } from "semantic-ui-react/dist/commonjs";
import Carousel from "nuka-carousel";

import classes from "./static/css/content.css";

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "10px" }}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Label
                style={{
                  float: "right",
                  backgroundColor: "#fa4a4d",
                  color: "white"
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
              <label>Toscano - Whitefeild</label>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
