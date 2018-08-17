import React from "react";

import AirImage from "./airImageComponent/airImage";
import Map from "./mapComponent/map";
import Content from "./contentComponent/content";
import ImageCarousel from "./imageCarouselComponent/imageCarousel";
import MenuCarousel from "./menuCarouselComponent/menuCarousel";
import Review from "./reviewComponent/review";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiType: 0,
      apiState: false
    };
  }

  componentDidMount() {
    if (this.props.history.location.state !== undefined) {
      this.setState({
        apiType: 1
      });

      console.log(this.props.history.location.state);
    } else {
      this.setState({
        apiState: true
      });
    }
  }

  render() {
    return (
      <div>
        <Container fluid>
          <AirImage history={this.props.history} />
        </Container>

        <Container style={{ marginTop: "10px" }}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={10}>
                <Content history={this.props.history} />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
        </Container>
        <ImageCarousel />
        <MenuCarousel />
        <Map />
      </div>
    );
  }
}
