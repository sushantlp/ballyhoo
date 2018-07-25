import React from "react";
import moment from "moment-timezone";

import {
  Card,
  Container,
  Image,
  Dimmer,
  Loader,
  Label,
  Icon,
  Rating,
  Button
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/cardOfferning.css";

// Default
const MAX_DESCRIPTION_LENGTH = 90;

// Current Time
const currentTime = moment()
  .tz("Asia/Kolkata")
  .format("HH:mm");

export default class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      disabled: false
    };
  }

  createOfferningCard = (
    key,
    heartPercent,
    calendar,
    image,
    veg,
    nonVeg,
    bName,
    offerName,
    description,
    amount,
    flat,
    onePlusOne,
    distance,
    rating
  ) => {
    return (
      <Card className={classes.OfferningCard} key={key}>
        <div className="ui fluid image">
          <span className={classes.Heart}>
            <img
              src="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1532419222/ballyhoo/EMAIL/heart.png"
              alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
            />
            <strong className={classes.HeartPercent}>40%</strong>
          </span>
          <Label as="a" color="teal" ribbon>
            Overview
          </Label>
          <img
            src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1457670910/ballyhoo/CUSTOM/8.jpg"
            alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
          />
          <span className={classes.Calendar}>Next Day Offer</span>
        </div>

        <Card.Content>
          <Image
            style={{
              marginLeft: "0.4em"
            }}
            floated="right"
            src=" https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg"
            alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
          />
          <Image
            floated="right"
            src="https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png"
            alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
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
            Cuisine: North Indian, Chinese, Continental\nExpected average cost
            for two: 1200/-\n\nFeatures:- Home Delivery, Full Bar Available.
            <div
              style={{
                marginTop: "0.5em"
              }}
            >
              <Icon
                name="rupee"
                style={{
                  fontSize: "18px",
                  lineHeight: "25px"
                }}
              >
                <label
                  style={{
                    fontSize: "18px",
                    lineHeight: "25px",
                    paddingLeft: "1px"
                  }}
                >
                  1000
                </label>
              </Icon>
              <span className={classes.discountPricePercent}>50 %</span>
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="rupee" style={{ marginLeft: "0.5em" }}>
            <span>
              <label
                style={{
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
              marginLeft: "1.5em",
              fontSize: "15px",
              color: "rgba(0,0,0,.68)"
            }}
          >
            <span>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingLeft: "1px"
                }}
              >
                500
              </label>
            </span>
          </Icon>

          <label
            style={{
              fontWeight: "bold",
              marginLeft: "3em",
              color: "rgba(0,0,0,.68)"
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
    );
  };

  logicOfferningCard = json => {
    let content = undefined;
    let discount = 0;
    let discountPrice = 0;
    let calendar = "";

    return json.map((obj, key) => {
      content = obj.content;

      if (content !== undefined && content !== "" && content !== null) {
        if (content.length > MAX_DESCRIPTION_LENGTH) {
          content = content.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
        }
      }

      if (obj.Offering === "Delivery Only") {
        const start = moment(obj.TIMINGS.Start, "HH:mm");
        const end = moment(obj.TIMINGS.End, "HH:mm");
        console.log(moment.duration(end.diff(currentTime)));
        if (currentTime < start) {
          calendar = "Opening Soon";
        } else {
          calendar = "Closing Soon";
        }
      }

      if (obj.DISCOUNT.Type === "flat") {
        discount = parseInt(obj.DISCOUNT.Value, 10);

        if (obj.DISCOUNT.ActualPrice !== 0 && discount !== 0) {
          discountPrice = (obj.DISCOUNT.ActualPrice * discount) / 100;
        }
      } else {
      }

      return this.createOfferningCard(
        obj.id,
        obj.Popularity
        // calendar,
        // image,
        // veg,
        // nonVeg,
        // bName,
        // offerName,
        // description,
        // amount,
        // flat,
        // onePlusOne,
        // distance,
        // rating
      );
    });
  };

  loadingStart = () => {
    this.setState({
      loading: true
    });
  };
  render() {
    let offerData = undefined;

    if (this.props.apiStatus === 0 || this.props.apiType === 0) {
      console.log("Hello1");
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (this.props.apiType === 1) {
      if (this.props.apiStatus === 1) {
        if (
          this.props.activeOffer === null ||
          this.props.activeOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.activeOffer).length === 0) {
          return <div />;
        }
        offerData = this.props.activeOffer;
      } else if (this.props.apiStatus === 2) {
        if (
          this.props.oldCategory === null ||
          this.props.oldCategory === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.oldCategory).length === 0) {
          return <div />;
        }
        offerData = this.props.oldCategory;
      } else if (this.props.apiStatus === 3) {
        if (
          this.props.oldOffering === null ||
          this.props.oldOffering === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.oldOffering).length === 0) {
          return <div />;
        }
        offerData = this.props.oldOffering;
      } else if (this.props.apiStatus === 4) {
        if (
          this.props.localityOffer === null ||
          this.props.localityOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.localityOffer).length === 0) {
          return <div />;
        }
        offerData = this.props.localityOffer;
      } else if (this.props.apiStatus === 5) {
        if (
          this.props.yoloOffer === null ||
          this.props.yoloOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.yoloOffer).length === 0) {
          return <div />;
        }
        offerData = this.props.yoloOffer;
      } else if (this.props.apiStatus === 6) {
        if (
          this.props.hashtagOffer === null ||
          this.props.hashtagOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.hashtagOffer).length === 0) {
          return <div />;
        }
        offerData = this.props.hashtagOffer;
      } else {
        return <div />;
      }
    } else {
      return <div />;
    }

    const { loading, disabled } = this.state;
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
          {this.logicOfferningCard(offerData)}
        </Card.Group>

        <Button
          size="large"
          color="violet"
          loading={loading}
          disabled={disabled}
          onClick={() => this.loadingStart()}
          style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            marginLeft: "45%"
          }}
        >
          Load More
        </Button>
      </Container>
    );
  }
}
