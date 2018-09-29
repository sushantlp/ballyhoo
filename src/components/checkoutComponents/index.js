import React from "react";

import Sticky from "react-stickynode";
import Left from "./leftSideComponent/left";
// import Right from "./rightSideComponent/right";
import Header from "../header/header";
import Footer from "../footer/footer";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
    if (this.props.history.location.state !== undefined) {
    } else {
      this.props.history.push("/web");
    }
  }

  render() {
    return (
      <div>
        <Header />

        <Container style={{ marginTop: "10px" }}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={10}>
                {/* <Right history={this.props.history} parentState={this.state} /> */}
              </Grid.Column>

              <Grid.Column width={2}>
                <Sticky enabled={true} top={50} bottomBoundary={1400}>
                  <Left history={this.props.history} parentState={this.state} />
                </Sticky>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Footer />
      </div>
    );
  }
}
