import React from "react";
import { Link } from "react-router-dom";

import { Container, Divider, Grid, Image, List, Icon } from "semantic-ui-react";
import classes from "../footer/static/css/footer.css";

export default class Footer extends React.Component {
  render() {
    return <Container fluid className={classes.FooterContainer} />;
  }
}
