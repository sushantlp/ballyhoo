import React from "react";

import {
  Card,
  Container,
  Image,
  Dimmer,
  Loader,
  Label,
  Icon,
  Rating
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
      <Container className={classes.OfferningContainer}>
        {/*         
          <div className={classes.DummyProductCardWrapper}>
            <div className={classes.ProductImageWrapper}>
              <div class="shimmer shimmer-position-1" />
            </div>
            <div className={classes.ProductContentWrapper}>
              <div className={classes.ProductTitle} />
              <div className={classes.ProductDetail} />
            </div>
          </div> */}

        <Card.Group itemsPerRow={3} doubling stackable>
          <Card className={classes.OfferningCard}>
            <div className="ui fluid image">
              <Label as="a" color="teal" ribbon>
                Overview
              </Label>
              <img src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1457670910/ballyhoo/CUSTOM/8.jpg" />
              <span className={classes.Calendar}>Next Day Offer</span>
            </div>

            <Card.Content>
              <Image
                floated="right"
                src="https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png"
              />
              <Card.Header
                style={{
                  fontWeight: "500",
                  color: "#7a52c0"
                }}
              >
                Barbeque Nation Jp N
              </Card.Header>
              <Card.Meta>
                <span className="date">Dinner Buffet</span>
              </Card.Meta>
              <Card.Description>
                Cuisine: North Indian, Chinese, Continental\nExpected average
                cost for two: 1200/-\n\nFeatures:- Home Delivery, Full Bar
                Available, Outdoor Seating, Valet Parking Available, Smoking
                Area.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="rupee">
                <span>
                  <label
                    style={{
                      fontWeight: "bold",
                      textDecoration: "line-through"
                    }}
                  >
                    1000
                  </label>
                </span>
              </Icon>

              <Icon
                name="rupee"
                style={{
                  marginLeft: "1.5em"
                }}
              >
                <span>
                  <label
                    style={{
                      fontWeight: "bold"
                    }}
                  >
                    500
                  </label>
                </span>
              </Icon>

              <label
                style={{
                  fontWeight: "bold",
                  marginLeft: "5em"
                }}
              >
                0.65km
              </label>
              <label
                style={{
                  float: "right"
                }}
              >
                <Rating defaultRating={3} maxRating={5} disabled />
              </label>
            </Card.Content>
          </Card>

          <Card className={classes.OfferningCard}>
            <div className="ui fluid image">
              <Label as="a" color="teal" ribbon>
                Overview
              </Label>
              <img src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1457670910/ballyhoo/CUSTOM/3.jpg" />
              <span className={classes.Calendar}>Closing Soon</span>
            </div>

            <Card.Content>
              <Image
                floated="right"
                src=" https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg"
              />

              <Card.Header
                style={{
                  fontWeight: "500",
                  color: "#7a52c0"
                }}
              >
                Deja Vu
              </Card.Header>
              <Card.Meta>
                <span className="date">Dinner Buffet</span>
              </Card.Meta>
              <Card.Description>
                Cuisines - Chinese, Thai, Seafood, North Indian.\nEstimated Cost
                for 2 persons - 1100/-\n\nFeatures : Home Delivery, Full Bar
                Available, Smoking Area, Outdoor Seating,
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <Card className={classes.OfferningCard}>
            <div className="ui fluid image">
              <Label as="a" color="teal" ribbon>
                Overview
              </Label>
              <img src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1457670910/ballyhoo/VEG/4.jpg" />
              <span className={classes.Calendar}>Opening soon</span>
            </div>
            <Card.Content>
              <Image
                style={{
                  marginLeft: "0.4em"
                }}
                floated="right"
                src=" https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg"
              />
              <Image
                floated="right"
                src="https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png"
              />
              <Card.Header
                style={{
                  fontWeight: "500",
                  color: "#7a52c0"
                }}
              >
                Melt - Eden Park
              </Card.Header>
              <Card.Meta>
                <span className="date">Lunch Buffet</span>
              </Card.Meta>
              <Card.Description>
                Cuisines - Chinese, Thai, Seafood, North Indian.\nEstimated Cost
                for 2 persons - 1100/-\n\nFeatures : Home Delivery, Full Bar
                Available, Smoking Area, Outdoor Seating,
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <Card className={classes.OfferningCard}>
            <Image
              className={classes.OfferningImage}
              src="https://assets.box8.co.in/picture_resolutions/photos/000/000/409/original/1110-X-810.jpg?1512572605"
            />
            <Card.Content>
              <Image
                style={{
                  marginLeft: "0.4em"
                }}
                floated="right"
                src=" https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg"
              />
              <Image
                floated="right"
                src="https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png"
              />
              <Card.Header
                style={{
                  fontWeight: "500",
                  color: "#7a52c0"
                }}
              >
                Area78
              </Card.Header>
              <Card.Meta>
                <span className="date">Custom Package</span>
              </Card.Meta>
              <Card.Description>
                Cuisines - Chinese, Thai, Seafood, North Indian.\nEstimated Cost
                for 2 persons - 1100/-\n\nFeatures : Home Delivery, Full Bar
                Available, Smoking Area, Outdoor Seating,
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
