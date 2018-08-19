import React from "react";
import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/note.css";

export default class Note extends React.Component {
  render() {
    return (
      <div>
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
