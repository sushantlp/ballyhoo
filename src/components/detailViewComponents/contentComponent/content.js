import React from "react";
import Truncate from "react-truncate";
import { Label, Icon, Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/content.css";

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Label
          style={{
            float: "right",
            backgroundColor: "#fa4a4d",
            color: "white",
            marginTop: "4px"
          }}
        >
          <Icon name="star" style={{ padding: "0px" }} />
          3.5
        </Label>

        <h2
          style={{
            fontWeight: "500",
            color: "rgb(122, 82, 192)",
            margin: "0px"
          }}
        >
          Lunch Buffet
        </h2>
        <label style={{ color: "rgba(0,0,0,.6)" }}>Toscano - Whitefeild</label>

        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>INCLUSIONS</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)" }}>
            About Buffet:- Enjoy Authentic BBQ Cuisine with Unlimited spread for
            Dinner Buffet @BBQ Nation.↵↵Inclusions: An indoor barbecue concept
            venue offering a 'Do-It-Yourself' grilling experience at every
            table↵↵T&C:↵Validity: Monday – Sunday.↵All inclusive per
            person↵Taxes may Apply.↵Can not be shared.↵Rights of reservation
            reserved.↵Management reserved the rights to change the prices
            without any notice.
          </label>
        </Segment>
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
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>NOTES</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)" }}>
            erchants are solely responsible for the service, availability and
            quality of the food and/or events including all or any
            cancellations/ modifications/ complaints. For any cancellations on
            online purchases please send an email to contact@ballyhoo.today
          </label>
        </Segment>
      </div>
    );
  }
}
