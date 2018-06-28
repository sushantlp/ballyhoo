import React from "react";

import { Card, Container, Button } from "semantic-ui-react";

import classes from "./static/css/discover.css";

export default class Discover extends React.Component {
  render() {
    return (
      <Container className={classes.DiscoverContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>DISCOVER</h4>
          <div className={classes.UnderScore} />
        </div>

        <Card.Group doubling stackable itemsPerRow={4}>
          <Card className={classes.DiscoverCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474445065/ballyhoo/WALK-IN/13.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.DiscoverHeader}>Lunch Buffet</span>
            </div>
          </Card>

          <Card className={classes.DiscoverCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474445065/ballyhoo/WALK-IN/13.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.DiscoverHeader}>Dinner Buffet</span>
            </div>
          </Card>

          <Card className={classes.DiscoverCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474445065/ballyhoo/WALK-IN/13.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.DiscoverHeader}>Takeaway</span>
            </div>
          </Card>

          <Card className={classes.DiscoverCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474445065/ballyhoo/WALK-IN/13.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.DiscoverHeader}>Live Performance</span>
            </div>
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
