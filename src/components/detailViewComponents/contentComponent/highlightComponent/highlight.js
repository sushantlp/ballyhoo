import React from "react";

import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/highlight.css";

export default class Highlight extends React.Component {
  render() {
    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>HIGHLIGHTS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)" }}>
            Cuisine: North Indian, European, Mediterranean, BBQ,
            Kebab.↵↵Expected average cost for two: 1600/-↵↵Features : Full Bar
            Available, Buffet, Kid Friendly.↵↵Popularity:- Mutton Curry, Kulfi,
            Mutton Seekh Kebab, Chicken Biryani, Kheer, Vegetable Biryani,
            Mocktails.↵↵Other offers:- Currently no Promotional Offers are
            Available.↵↵Ballyhoo Brings exciting Live offers in real time, where
            you can Discover, Trend, Eat & Escape! ↵↵Follow us on Social Media-
            Facebook/Twitter/Instagram (@BallyhooToday)for latest
            updates/contest.
          </label>
        </Segment>
      </div>
    );
  }
}
