import React from "react";

import {
  Card,
  Container,
  Image,
  Dimmer,
  Loader,
  Icon
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/cardOfferning.css";

export default class Trending extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (
    //   this.props.facebookEvent === null ||
    //   this.props.facebookEvent === undefined
    // ) {
    //   return (
    //     <Dimmer active inverted>
    //       <Loader inverted>Loading</Loader>
    //     </Dimmer>
    //   );
    // }

    // if (
    //   Object.keys(this.props.facebookEvent).length === 0 ||
    //   Object.keys(this.props.facebookEvent).length === 0
    // ) {
    //   return (
    //     <Dimmer active inverted>
    //       <Loader inverted>Loading</Loader>
    //     </Dimmer>
    //   );
    // }

    return (
      <Container>
        <Card.Group itemsPerRow={3} doubling stackable>
          <Card>
            <Image src="https://assets.box8.co.in/picture_resolutions/photos/000/002/116/original/1110-X-810-WebRajma-Curry-_-Basmati-Rice.jpg?1515228294" />
            <Card.Content>
              <Card.Header>PUBS & BREWERY</Card.Header>
              <Card.Meta>
                <span className="date">Custom Package</span>
              </Card.Meta>
              <Card.Description>
                Cuisine: North Indian, Chinese, Continental\nExpected average
                cost for two: 1200/-
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://assets.box8.co.in/picture_resolutions/photos/000/002/100/original/1110-X-810-Web-Dal-Makhni-Curry-_-Paratha.jpg?1515227558" />
            <Card.Content>
              <Card.Header>PUBS & BREWERY</Card.Header>
              <Card.Meta>
                <span className="date">Custom Package</span>
              </Card.Meta>
              <Card.Description>
                Cuisine: North Indian, Chinese, Continental\nExpected average
                cost for two: 1200/-
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://assets.box8.co.in/picture_resolutions/photos/000/000/466/original/1110-x-810.jpg?1529746115" />
            <Card.Content>
              <Card.Header>PUBS & BREWERY</Card.Header>
              <Card.Meta>
                <span className="date">Custom Package</span>
              </Card.Meta>
              <Card.Description>
                Cuisine: North Indian, Chinese, Continental\nExpected average
                cost for two: 1200/-
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://assets.box8.co.in/picture_resolutions/photos/000/000/409/original/1110-X-810.jpg?1512572605" />
            <Card.Content>
              <Card.Header>RESTAURANTS</Card.Header>
              <Card.Meta>
                <span className="date">Custom Package</span>
              </Card.Meta>
              <Card.Description>
                Cuisine: North Indian, Chinese, Continental\nExpected average
                cost for two: 1200/-
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}
