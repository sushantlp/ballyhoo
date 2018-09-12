import React from "react";
import Sticky from "react-stickynode";

import AirImage from "./airImageComponent/airImage";
import Map from "./mapComponent/map";
import Content from "./contentComponent";
import ImageCarousel from "./imageCarouselComponent/imageCarousel";
import MenuCarousel from "./menuCarouselComponent/menuCarousel";
import Review from "./reviewComponent/review";
import Book from "./bookComponent/book";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCall: false,
      which: undefined
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);

    if (this.props.history.location.state !== undefined) {
      this.setState({
        apiCall: false
      });
    } else {
      let which = undefined;
      if (
        this.props.match.params.category === "escapes" ||
        this.props.match.params.category === "events" ||
        this.props.match.params.category === "activities" ||
        this.props.match.params.category === "saloon-&-spa"
      ) {
        this.props.getNewViewDetail(this.props.match.params.id);
        which = "new";
      } else {
        this.props.getOldViewDetail(this.props.match.params.id);
        which = "old";
      }

      this.setState({
        apiCall: true,
        which: which
      });
    }
  }

  render() {
    return (
      <div>
        <Container fluid>
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
                  newViewDetail={this.props.newViewDetail}
                  oldViewDetail={this.props.oldViewDetail}
                />
              </Grid.Column>

              <Grid.Column width={2}>
                <Sticky enabled={true} top={50} bottomBoundary={2100}>
                  <Book />
                </Sticky>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <ImageCarousel
          history={this.props.history}
          detailState={this.state}
          newViewDetail={this.props.newViewDetail}
          oldViewDetail={this.props.oldViewDetail}
        />
        <MenuCarousel
          history={this.props.history}
          detailState={this.state}
          newViewDetail={this.props.newViewDetail}
          oldViewDetail={this.props.oldViewDetail}
        />
        <Map
          history={this.props.history}
          detailState={this.state}
          newViewDetail={this.props.newViewDetail}
          oldViewDetail={this.props.oldViewDetail}
        />
        <Review
          history={this.props.history}
          detailState={this.state}
          newViewDetail={this.props.newViewDetail}
          oldViewDetail={this.props.oldViewDetail}
        />
      </div>
    );
  }
}
