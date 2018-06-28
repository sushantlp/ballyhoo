import React from "react";

import { Segment, Card, Container, Grid, Image } from "semantic-ui-react";

import classes from "./static/css/trending.css";

export default class Trending extends React.Component {
  render() {
    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>Trending</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={4} doubling stackable>
          <Card>
            <Image src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1474444914/ballyhoo/VEG/26.jpg" />
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
          <Card>
            <Image src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1474444914/ballyhoo/VEG/26.jpg" />
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
          <Card>
            <Image src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1474444914/ballyhoo/VEG/26.jpg" />
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
          <Card>
            <Image src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1474444914/ballyhoo/VEG/26.jpg" />
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
      </Container>
    );
  }
}
