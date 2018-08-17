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
                    <label style={{ color: "rgba(0,0,0,.6)" }}>
                      This is my personal favourite for it's praws even though
                      it's expensive. If you've got a big appetite for non veg
                      starters, there's a lot of...
                    </label>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Avatar
                    color={Avatar.getRandomColor("sitebase", [
                      "#ec1943",
                      "#7a52c0",
                      "#ff5a5f",
                      "#f0486a",
                      "#60E7F2"
                    ])}
                    name="Shivani Moray"
                    size="40"
                    round={true}
                    style={{ marginTop: "5px" }}
                  />
                </Feed.Label>
                <Feed.Content>
                  <label>
                    Shivani Moray
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
                    <label style={{ color: "rgba(0,0,0,.6)" }}>
                      Asusual the starters were amazing and tasty.. In the main
                      course, mutton wasnt cooked properly. The server got us
                      another dish of mutton and...
                    </label>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Avatar
                    color={Avatar.getRandomColor("sitebase", [
                      "#60E7F2",
                      "#7a52c0",
                      "#ff5a5f",
                      "#f0486a",
                      "#ec1943"
                    ])}
                    name="Akshay Gupta"
                    size="40"
                    round={true}
                    style={{ marginTop: "5px" }}
                  />
                </Feed.Label>
                <Feed.Content>
                  <label>
                    Akshay Gupta
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
                    <label style={{ color: "rgba(0,0,0,.6)" }}>
                      I visited this place for a corporate lunch organised by my
                      office. This place is essentially good for non vegetarian
                      food. However, I liked ...
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
