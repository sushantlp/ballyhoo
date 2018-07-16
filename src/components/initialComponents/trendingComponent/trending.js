import React from "react";

import {
  Card,
  Container,
  Image,
  Button
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/trending.css";

export default class Trending extends React.Component {
  render() {
    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>TRENDING</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={4} doubling stackable>
          <Card className={classes.TrendingCard} raised>
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
          <Card className={classes.TrendingCard} raised>
            <Image src="https://d13genyhhfmqry.cloudfront.net/large/mc_195813_2017-12-23-18-55-28-000636.jpg" />
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
          <Card className={classes.TrendingCard} raised>
            <Image src="https://d13genyhhfmqry.cloudfront.net/large/mc_1462_2017-12-08-12-05-27-000180.jpg" />
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
          <Card className={classes.TrendingCard} raised>
            <Image src="https://d13genyhhfmqry.cloudfront.net/large/mc_195813_2017-12-23-18-55-28-000636.jpg" />
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
