import React from "react";

import { Label, Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/business.css";

export default class Business extends React.Component {
  render() {
    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>BUSINESS HOUR</h4>
          <div className={classes.UnderScore} />
        </div>

        <Segment>
          <Label
            as="a"
            basic
            style={{
              color: "rgba(0,0,0,.6)",
              fontSize: "16px"
            }}
          >
            Morning - 00:00 00:00
          </Label>
        </Segment>
      </div>
    );
  }
}
