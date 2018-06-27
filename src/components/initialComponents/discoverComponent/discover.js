import React from "react";

import { Segment, Card, Container, Grid, Image } from "semantic-ui-react";

import classes from "./static/css/discover.css";

export default class Discover extends React.Component {
  render() {
    return (
      <Container>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>DISCOVER</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={3} doubling stackable>
          <Card className={classes.DiscoverCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474445065/ballyhoo/WALK-IN/13.jpg"
                }
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
              />
              <span className={classes.DiscoverHeader}>Live Performance</span>
            </div>
          </Card>

          <Card className={classes.DiscoverCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474445065/ballyhoo/WALK-IN/13.jpg"
                }
              />
              <span className={classes.DiscoverHeader}>Happy Hours</span>
            </div>
          </Card>

          <Card className={classes.DiscoverCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474445065/ballyhoo/WALK-IN/13.jpg"
                }
              />
              <span className={classes.DiscoverHeader}>Restaurant</span>
            </div>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}
