import React from "react";

import {
  Card,
  Container,
  Image,
  Button,
  Dimmer,
  Loader
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/facebook.css";

export default class Trending extends React.Component {
  render() {
    if (
      this.props.facebookEvent === null ||
      this.props.facebookEvent === undefined
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (
      Object.keys(this.props.facebookEvent).length === 0 ||
      Object.keys(this.props.facebookEvent).length === 0
    ) {
      return;
    }

    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>Facebook Event</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={4} doubling stackable>
          <Card className={classes.FacebookCard} raised>
            <Image src="https://d13genyhhfmqry.cloudfront.net/large/mc_1_2018-02-01-19-25-39-000475.jpg" />
            <Card.Content>
              <Card.Header
                style={{
                  fontWeight: "500",
                  color: "#7a52c0"
                }}
              >
                RESTAURANTS
              </Card.Header>
              <Card.Meta>
                <span
                  style={{
                    color: "#F79F6D"
                  }}
                >
                  Amazons
                </span>
              </Card.Meta>
              <Card.Description>
                JP Nagar 2nd phase, Bengaluru.
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>

        <Button
          onClick={this.toggle}
          size="large"
          basic
          color="violet"
          style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            marginLeft: "45%"
          }}
        >
          View More
          {/* {viewMore ? "View Less" : "View More"} */}
        </Button>
      </Container>
    );
  }
}
