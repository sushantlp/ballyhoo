import React from "react";
import { Container, Grid } from "semantic-ui-react/dist/commonjs";
import Carousel from "nuka-carousel";

import classes from "./static/css/content.css";

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <label>Casa Piccosa</label>
              <h2
                style={{
                  fontWeight: "500",
                  color: "rgb(122, 82, 192)",
                  margin: "0px"
                }}
              >
                Sunday Sundowner
              </h2>
              <label>PUBS & BREWERY</label>
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
