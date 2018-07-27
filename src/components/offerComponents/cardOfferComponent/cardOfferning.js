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
  // Rating,
  Button
} from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/cardOfferning.css";

// Default
const MAX_DESCRIPTION_LENGTH = 140;

// Current Time
const currentTime = moment()
  .tz("Asia/Kolkata")
  .format("HH:mm");

const currentDate = moment()
  .tz("Asia/Kolkata")
  .format("YYYY-MM-DD");

export default class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      disabled: false,
      level: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.oldOffering.oldOffering).length !== 0) {
      if (
        nextProps.oldOffering.level !== this.props.oldOffering.level ||
        this.state.level === 0
      ) {
        // show loading again
        this.setState(this.getInitialLevel(nextProps.oldOffering.level));
      }
    } else if (Object.keys(nextProps.oldCategory.oldCategory).length !== 0) {
      if (
        nextProps.oldCategory.level !== this.props.oldCategory.level ||
        this.state.level === 0
      ) {
        // show loading again
        this.setState(this.getInitialLevel(nextProps.oldCategory.level));
      }
    } else if (Object.keys(nextProps.activeOffer.activeOffer).length !== 0) {
      if (
        nextProps.activeOffer.level !== this.props.activeOffer.level ||
        this.state.level === 0
      ) {
        // show loading again
        this.setState(this.getInitialLevel(nextProps.activeOffer.level));
      }
    } else if (Object.keys(nextProps.hashtagOffer.hashtagOffer).length !== 0) {
      if (
        nextProps.hashtagOffer.level !== this.props.hashtagOffer.level ||
        this.state.level === 0
      ) {
        // show loading again
        this.setState(this.getInitialLevel(nextProps.hashtagOffer.level));
      }
    } else if (
      Object.keys(nextProps.localityOffer.localityOffer).length !== 0
    ) {
      if (
        nextProps.localityOffer.level !== this.props.localityOffer.level ||
        this.state.level === 0
      ) {
        // show loading again
        this.setState(this.getInitialLevel(nextProps.localityOffer.level));
      }
    } else if (Object.keys(nextProps.yoloOffer.yoloOffer).length !== 0) {
      if (
        nextProps.yoloOffer.level !== this.props.yoloOffer.level ||
        this.state.level === 0
      ) {
        // show loading again
        this.setState(this.getInitialLevel(nextProps.yoloOffer.level));
      }
    }
  }

  createOfferningCard = (
    key,
    popularity,
    calendar,
    image,
    femaleVeg,
    maleNonveg,
    businessName,
    offeringTitle,
    content,
    actualPrice,
    discountPrice,
    discount,
    distance,
    sponsored,
    frequency,
    full,
    half,
    empty
  ) => {
    return (
      <Card className={classes.OfferningCard} key={key}>
        <div className="ui fluid image">
          <span
            className={classes.Heart}
            style={{
              display: popularity === 0 ? "none" : "intial"
            }}
          >
            <img
              src="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1532419222/ballyhoo/EMAIL/heart.png"
              alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
            />
            <strong className={classes.HeartPercent}>{popularity + "%"}</strong>
          </span>

          <Label
            as="a"
            ribbon
            style={{
              display: sponsored === 0 ? "none" : "intial",
              backgroundColor: "#fa4a4d",
              borderColor: "#fa4a4d",
              color: "#fff"
            }}
          >
            Sponsored
          </Label>

          <img
            src={image}
            alt="non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
          />
          <span
            className={classes.Calendar}
            // hidden={calendar === undefined ? true : false}
            style={{
              display: calendar === undefined ? "none" : "intial"
            }}
          >
            {calendar}
          </span>
        </div>

        <Card.Content>
          <Image
            style={{
              marginLeft: "0.4em"
            }}
            floated="right"
            src={femaleVeg}
            alt={
              femaleVeg === undefined
                ? ""
                : "non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
            }
            hidden={femaleVeg === undefined ? true : false}
          />

          <Image
            floated="right"
            src={maleNonveg}
            alt={
              maleNonveg === undefined
                ? ""
                : "non-veg, food, restaurants, dinner buffet, lunch buffet, pubs & brewery, reservation, event"
            }
            hidden={maleNonveg === undefined ? true : false}
          />
          <Card.Header
            style={{
              fontWeight: "500",
              color: "#7a52c0"
            }}
          >
            {businessName}
          </Card.Header>
          <Card.Meta>
            <span className="date">{offeringTitle}</span>
          </Card.Meta>
          <Card.Description>
            {content}
            <div
              style={{
                marginTop: "0.5em",
                display: actualPrice === 0 && discount === 0 ? "none" : "intial"
              }}
            >
              <Icon
                style={{
                  fontSize: "18px",
                  lineHeight: "25px"
                }}
                name={actualPrice === 0 ? "" : "rupee"}
              >
                <label
                  style={{
                    fontSize: "18px",
                    lineHeight: "25px",
                    paddingLeft: "1px"
                  }}
                  hidden={actualPrice === 0 ? true : false}
                >
                  {actualPrice}
                </label>
              </Icon>
              <span
                className={classes.DiscountPricePercent}
                hidden={discount === 0 ? true : false}
              >
                {discount}
              </span>
            </div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon
            name="rupee"
            style={{
              marginLeft: "0.5em",
              display:
                actualPrice === 0 || discountPrice === 0 ? "none" : "intial"
            }}
          >
            <span
              style={{
                display:
                  actualPrice === 0 || discountPrice === 0 ? "none" : "intial"
              }}
            >
              {/* hidden={actualPrice === 0 ? true : false} */}
              <label
                style={{
                  textDecoration: "line-through"
                }}
              >
                {actualPrice}
              </label>
            </span>
          </Icon>

          <Icon
            // name={discountPrice === 0 ? null : "rupee"}
            name="rupee"
            style={{
              marginLeft: actualPrice === 0 ? "0em" : "1.5em",
              fontSize: "15px",
              color: "rgba(0,0,0,.68)",
              display: discountPrice === 0 ? "none" : "intial"
            }}
            // className={discountPrice === 0 ? classes.DiscountPrice : ""}
          >
            <span style={{ display: discountPrice === 0 ? "none" : "intial" }}>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  paddingLeft: "1px"
                }}
              >
                {discountPrice}
              </label>
            </span>
          </Icon>

          <label
            style={{
              fontWeight: "bold",
              // marginLeft: "3em",
              color: "rgba(0,0,0,.68)",
              marginLeft:
                actualPrice === 0 && discountPrice === 0
                  ? "0em"
                  : discountPrice === 0
                    ? "0em"
                    : "3em"
            }}
          >
            {distance}km
          </label>
          <label
            style={{
              float: "right"
            }}
          >
            <span>
              {full}
              {half}
              {empty}
            </span>
            {/* <Rating defaultRating={rating} maxRating={5} disabled /> */}
          </label>
        </Card.Content>
      </Card>
    );
  };

  oldOfferingCard = json => {
    if (json === undefined) {
      return;
    }

    return json.map((obj, key) => {
      let discount = 0;
      let discountPrice = 0;
      let calendar = undefined;
      let maleNonveg = undefined;
      let femaleVeg = undefined;

      let content = obj.Description;
      if (content !== undefined && content !== "" && content !== null) {
        if (content.length > MAX_DESCRIPTION_LENGTH) {
          content = content.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
        }
      }

      if (obj.Offering === "Delivery Only") {
        const start = moment.utc(obj.TIMINGS.Start, "HH:mm").format("HH:mm");
        if (currentTime < start) {
          calendar = "Opening Soon";
        } else {
          const differnce = moment
            .utc(
              moment(currentTime, "HH:mm").diff(
                moment(obj.TIMINGS.End, "HH:mm")
              )
            )
            .format("HH:mm");
          if (differnce <= moment.utc("01:00", "HH:mm").format("HH:mm")) {
            calendar = "Closing Soon";
          }
        }
      }

      if (
        obj.Offering === "Lunch Buffet" ||
        obj.Offering === "Breakfast Buffet"
      ) {
        const startDate = moment
          .utc(obj.DATE.Start, "YYYY-MM-DD")
          .format("YYYY-MM-DD");

        if (currentDate !== startDate) {
          calendar = "Next Day Offer";
        }
      }

      if (obj.DISCOUNT.Type === "flat") {
        discount = parseInt(obj.DISCOUNT.Value, 10);
        if (obj.DISCOUNT.ActualPrice !== 0 && discount !== 0) {
          discountPrice = (obj.DISCOUNT.ActualPrice * discount) / 100;
          discount = discount + "%" + " OFF";
        } else if (discount !== 0) {
          discount = discount + "%" + " OFF";
        }
      } else if (obj.DISCOUNT.Type === "combo1,1") {
        discount = "1 + 1";
      } else {
        discount = "2 + 1";
      }

      if (obj.Offering !== "Event") {
        if (obj.foodpreference === "veg") {
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg";
        } else if (obj.foodpreference === "nonveg") {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png";
        } else {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921936/ballyhoo/EMAIL/non-veg.png";
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/v1503921787/ballyhoo/EMAIL/veg.62b68100_1.jpg";
        }
      } else {
        if (obj.EVENTS.gender_preference === 1) {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
        } else if (obj.EVENTS.gender_preference === 2) {
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
        } else {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
        }
      }

      const rating = obj.MERCHANT.merchant_rating + "";
      const totalArray = rating.split(".");

      let emptyVar = 5;
      let half = undefined;
      let fullArray = [];
      let emptyArray = [];

      // Half Star
      if (totalArray[1] !== undefined) {
        emptyVar = emptyVar - Number(totalArray[0]);
        emptyVar = emptyVar - 1;

        half = (
          <Icon
            name="star half full"
            style={{
              color: "#7a52c0",
              padding: "0px",
              margin: "0px"
            }}
          />
        );
      } else {
        emptyVar = emptyVar - Number(totalArray[0]);
      }

      // Full Star
      for (let i = 0; i < Number(totalArray[0]); i++) {
        fullArray.push(i);
      }

      // Full Star
      let full = fullArray.map(function(i) {
        return (
          <Icon
            key={i}
            name="star"
            style={{
              color: "#7a52c0",
              padding: "0px",
              margin: "0px"
            }}
          />
        );
      });

      // Empty Star
      for (let i = 0; i < emptyVar; i++) {
        emptyArray.push(i);
      }

      // Empty Star
      let empty = emptyArray.map(function(i) {
        return (
          <Icon
            key={i}
            name="star empty"
            style={{
              color: "#7a52c0",
              padding: "0px",
              margin: "0px"
            }}
          />
        );
      });

      return this.createOfferningCard(
        obj.id,
        obj.Popularity,
        calendar,
        obj.img_url,
        femaleVeg,
        maleNonveg,
        obj.MERCHANT.Business,
        obj.offering_title,
        content,
        obj.DISCOUNT.ActualPrice,
        discountPrice,
        discount,
        obj.calculated_distance,
        obj.sponsored,
        obj.Frequency,
        full,
        half,
        empty
      );
    });
  };

  logicOfferningCard = json => {
    if (this.props.apiType === 1) {
      return this.oldOfferingCard(json);
    } else {
      return;
    }
  };

  getInitialLevel = level => {
    this.setState(
      {
        level: level + 1
      },
      function() {
        this.setState({
          loading: false
        });
      }
    );
  };
  loadingStart = () => {
    this.setState({
      loading: true
    });

    if (this.props.location.state !== undefined) {
      this.props.parentLoadOldOfferData(
        this.props.location.state.offerData.city_id,
        this.props.location.state.offerData.locality_id,
        this.props.location.state.offerData.hashtag_id,
        this.props.location.state.offerData.offering_id,
        this.props.location.state.offerData.category_id,
        this.state.level,
        this.props.apiStatus
      );
    } else {
    }
  };

  render() {
    let offerData = [];

    if (this.props.apiStatus === 0 || this.props.apiType === 0) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (this.props.apiType === 1) {
      if (this.props.apiStatus === 1) {
        if (
          this.props.activeOffer.activeOffer === null ||
          this.props.activeOffer.activeOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.activeOffer.activeOffer).length === 0) {
          return <div />;
        }

        offerData = this.props.activeOffer.activeOffer.deal;
      } else if (this.props.apiStatus === 2) {
        if (
          this.props.oldCategory.oldCategory === null ||
          this.props.oldCategory.oldCategory === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.oldCategory.oldCategory).length === 0) {
          return <div />;
        }
        offerData = this.props.oldCategory.oldCategory.deal;
      } else if (this.props.apiStatus === 3) {
        if (
          this.props.oldOffering.oldOffering === null ||
          this.props.oldOffering.oldOffering === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.oldOffering.oldOffering).length === 0) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        offerData = this.props.oldOffering.oldOffering;
      } else if (this.props.apiStatus === 4) {
        if (
          this.props.localityOffer.localityOffer === null ||
          this.props.localityOffer.localityOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.localityOffer.localityOffer).length === 0) {
          return <div />;
        }
        offerData = this.props.localityOffer.localityOffer.deal;
      } else if (this.props.apiStatus === 5) {
        if (
          this.props.yoloOffer.yoloOffer === null ||
          this.props.yoloOffer.yoloOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.yoloOffer.yoloOffer).length === 0) {
          return <div />;
        }
        offerData = this.props.yoloOffer.yoloOffer.deal;
      } else if (this.props.apiStatus === 6) {
        if (
          this.props.hashtagOffer.hashtagOffer === null ||
          this.props.hashtagOffer.hashtagOffer === undefined
        ) {
          return (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          );
        }

        if (Object.keys(this.props.hashtagOffer.hashtagOffer).length === 0) {
          return <div />;
        }
        offerData = this.props.hashtagOffer.hashtagOffer.deal;
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
          disabled={this.state.level === 4 ? true : false}
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
