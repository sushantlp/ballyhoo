import React from "react";

import AirImage from "./airImageComponent/airImage";
import Map from "./mapComponent/map";
import Content from "./contentComponent";
import ImageCarousel from "./imageCarouselComponent/imageCarousel";
import MenuCarousel from "./menuCarouselComponent/menuCarousel";
import Review from "./reviewComponent/review";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCall: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.history.location.state !== undefined) {
      this.setState({
        apiCall: false
      });
      console.log(this.props.history.location.state);
    } else {
      this.setState(
        {
          apiCall: true
        },
        function() {
          if (
            this.props.match.params.category === "escapes" ||
            this.props.match.params.category === "events" ||
            this.props.match.params.category === "activities" ||
            this.props.match.params.category === "saloon-&-spa"
          ) {
            this.props.getNewViewDetail(this.props.match.params.id);
          } else {
            this.props.getOldViewDetail(this.props.match.params.id);
          }
        }
      );
    }
  }

  render() {
    console.log("Render");
    return (
      <div>
        {/* <Container fluid>
          <AirImage
            history={this.props.history}
            detailState={this.state}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
        </Container>

        <Container style={{ marginTop: "10px" }}>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={10}>
                <Content
                  history={this.props.history}
                  detailState={this.state}
                />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
          </Grid>
        </Container>
        <ImageCarousel history={this.props.history} detailState={this.state} />
        <MenuCarousel history={this.props.history} detailState={this.state} />
        <Map history={this.props.history} detailState={this.state} />
        <Review history={this.props.history} detailState={this.state} /> */}
      </div>
    );
  }
}
