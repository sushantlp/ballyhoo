import React from "react";
import { Segment } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/note.css";

export default class Note extends React.Component {
  render() {
    let note = "";
    if (this.props.detailState.apiCall) {
    } else {
      if (this.props.history.location.state.offerData.api_type === 1) {
        if (
          this.props.history.location.state.offerData.data.NOTE === null ||
          this.props.history.location.state.offerData.data.NOTE === ""
        ) {
          return <div />;
        } else {
          note = this.props.history.location.state.offerData.data.NOTE;
        }
      } else {
      }
    }

    return (
      <div>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>NOTES</h4>
          <div className={classes.UnderScore} />
        </div>
        <Segment>
          <label style={{ color: "rgba(0,0,0,.6)", whiteSpace: "pre-line" }}>
            {note}
          </label>
        </Segment>
      </div>
    );
  }
}
