import React from "react";
import _ from "lodash";

import Avatar from "react-avatar";

import {
  Card,
  Feed,
  Container,
  Segment,
  Rating,
  Button
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/review.css";

// Default Number of Items for View More Button
const MAX_ITEMS = 6;

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMore: false
    };
  }

  zomatoFeedbackComponent = (rating, reviewText, reviewer, key) => {
    return (
      <Feed key={key}>
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
              name={reviewer}
              size="40"
              round={true}
              style={{ marginTop: "5px" }}
            />
          </Feed.Label>
          <Feed.Content>
            <label>
              {reviewer}
              <span style={{ marginLeft: "10px" }}>
                <Rating
                  icon="star"
                  defaultRating={rating}
                  maxRating={5}
                  disabled
                />
              </span>
            </label>
            <Feed.Summary>
              <label style={{ color: "rgba(0,0,0,.6)", fontWeight: "400" }}>
                {reviewText}
              </label>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  };

  logicZomatoFeedback = zomatoData => {
    return zomatoData.map((zomato, key) => {
      return this.zomatoFeedbackComponent(
        zomato.rating,
        zomato.review_text,
        zomato.reviewer,
        key
      );
    });
  };

  sliceZomatoReview = zomatoData => {
    if (this.state.isMore) {
      return zomatoData;
    }
    return zomatoData.slice(0, MAX_ITEMS);
  };

  toggle = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };

  render() {
    const { isMore } = this.state;
    let zomatoData = [];

    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          _.isEmpty(this.props.history.location.state.offerData.data.ZOMATO)
        ) {
          return <div />;
        } else {
          zomatoData = this.props.history.location.state.offerData.data.ZOMATO;
        }
      } else {
        if (
          _.isEmpty(this.props.history.location.state.offerData.data.ZOMATO)
        ) {
          return <div />;
        } else {
          zomatoData = this.props.history.location.state.offerData.data.ZOMATO;
        }
      }
    }

    return (
      <Container style={{ marginTop: "20px" }}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>REVIEWS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <Card.Content>
            {" "}
            {this.logicZomatoFeedback(this.sliceZomatoReview(zomatoData))}{" "}
          </Card.Content>

          <Button
            onClick={this.toggle}
            disabled={Object.keys(zomatoData).length < MAX_ITEMS ? true : false}
            size="large"
            basic
            color="violet"
            style={{
              marginTop: "1em",
              marginBottom: "1em",
              marginLeft: "42%"
            }}
          >
            {isMore ? "Show Less Reviews" : "Show All Reviews"}
          </Button>
        </Segment>
      </Container>
    );
  }
}
