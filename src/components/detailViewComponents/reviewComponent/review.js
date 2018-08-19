import React from "react";

import Avatar from "react-avatar";

import {
  Card,
  Feed,
  Container,
  Segment,
  Rating
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/review.css";

export default class Review extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>REVIEWS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <Avatar
                    color={Avatar.getRandomColor("sitebase", [
                      "#7a52c0",
                      "#ff5a5f",
                      "#f0486a",
                      "#ec1943",
                      "#60E7F2"
                    ])}
                    name="Anurag Dash"
                    size="40"
                    round={true}
                    style={{ marginTop: "5px" }}
                  />
                </Feed.Label>
                <Feed.Content>
                  <label>
                    Anurag Dash
                    <span style={{ marginLeft: "10px" }}>
                      <Rating
                        icon="star"
                        defaultRating={3}
                        maxRating={5}
                        disabled
                      />
                    </span>
                  </label>
                  <Feed.Summary>
                    <label
                      style={{ color: "rgba(0,0,0,.6)", fontWeight: "400" }}
                    >
                      This is my personal favourite for it's praws even though
                      it's expensive. If you've got a big appetite for non veg
                      starters, there's a lot of...
                    </label>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Segment>
      </Container>
    );
  }
}
