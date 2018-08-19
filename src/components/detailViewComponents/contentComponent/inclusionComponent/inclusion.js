import React from "react";

import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/inclusion.css";

export default class Inclusion extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
