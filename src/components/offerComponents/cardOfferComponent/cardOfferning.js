import React from "react";
import moment from "moment-timezone";
import _ from "lodash";
import SweetAlert from "sweetalert2-react";

import {
  Card,
  Container,
  Image,
  Label,
  Icon,
  Button,
  Breadcrumb,
  Segment
} from "semantic-ui-react/dist/commonjs";

import CardLoader from "../../loaderComponents/cardLoader";

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
      click_disabled: false,
      loading: false,
      level: 0,
      cityId: 0,
      localityId: 0,
      alert: false,
      apiObject: {
        tab_id: 0,
        hashtag_id: 0,
        offering_id: 0,
        category_id: 0,
        api_status: 0,
        api_type: 0,
        flag: 0,
        screen_id: 0
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== undefined) {
      if (nextProps.offerSeo) {
        if (
          Object.keys(nextProps.discoverOldOffer.discoverOldOffer).length !== 0
        ) {
          this.getInitialLevel(nextProps.discoverOldOffer.level);
        } else if (
          Object.keys(nextProps.discoverNewOffer.discoverNewOffer).length !== 0
        ) {
          this.getInitialLevel(nextProps.discoverNewOffer.level);
        } else if (
          Object.keys(nextProps.collectionOldOffer.collectionOldOffer)
            .length !== 0
        ) {
          this.getInitialLevel(nextProps.collectionOldOffer.level);
        } else if (
          Object.keys(nextProps.collectionNewOffer.collectionNewOffer)
            .length !== 0
        ) {
          this.getInitialLevel(nextProps.collectionNewOffer.level);
        } else if (
          Object.keys(nextProps.localityOldOffer.localityOldOffer).length !== 0
        ) {
          this.getInitialLevel(nextProps.localityOldOffer.level);
        }
      } else {
        if (
          Object.keys(nextProps.cityLocality).length !== 0 &&
          Object.keys(nextProps.discoverFilter).length === 0 &&
          Object.keys(nextProps.categoryFilter).length === 0 &&
          this.state.cityId === 0
        ) {
          this.offerSeoLogic(nextProps.cityLocality);
        } else if (Object.keys(nextProps.discoverFilter).length !== 0) {
          this.readDiscoverIndex(
            nextProps.discoverFilter,
            this.props.match.params.discover
          );
        } else if (Object.keys(nextProps.categoryFilter).length !== 0) {
          this.readCategoryIndex(
            nextProps.categoryFilter,
            this.props.match.params.offering
          );
        } else {
          console.log("Check");
        }
      }
    }
  }

  readDiscoverIndex = (discoverList, discoverName) => {
    for (let i = 0; i < discoverList.length; i++) {
      if (
        discoverName
          .replace(/-/g, " ")
          .replace(/ /g, "")
          .toLowerCase() ===
        discoverList[i].title.replace(/ /g, "").toLowerCase()
      ) {
        this.setState({
          apiObject: {
            tab_id: discoverList[i].t_id,
            api_type: discoverList[i].api_type,
            flag: 2,
            screen_id: discoverList[i].scr_id
          }
        });

        this.props.parentLoadOldOfferData(
          discoverList[i].t_id,
          this.state.cityId,
          this.state.localityId,
          0,
          discoverList[i].api_type,
          2,
          true,
          true,
          discoverList[i].scr_id
        );
      }
    }
  };

  readCategoryIndex = (categoryList, offeringName) => {
    for (let i = 0; i < categoryList.length; i++) {
      if (
        offeringName
          .replace(/-/g, " ")
          .replace(/ /g, "")
          .toLowerCase() ===
        categoryList[i].title.replace(/ /g, "").toLowerCase()
      ) {
        this.setState({
          apiObject: {
            tab_id: 0,
            api_type: categoryList[i].Api_Type,
            flag: 1,
            screen_id: categoryList[i].scr_id
          }
        });

        this.props.parentLoadOldOfferData(
          0,
          this.state.cityId,
          this.state.localityId,
          0,
          categoryList[i].Api_Type,
          1,
          true,
          true,
          categoryList[i].scr_id
        );
      }
    }
  };

  offerSeoLogic = cityList => {
    const cityIndex = this.readCityIndex(
      this.props.match.params.city,
      cityList
    );
    const localityIndex = this.readLocalityIndex(
      this.props.match.params.locality,
      cityList
    );

    this.setState({ cityId: cityIndex.c_key, localityId: localityIndex.l_key });
    if (this.props.match.params.hasOwnProperty("offering")) {
      this.props.callCategoryFilter(cityIndex.c_key);
    } else if (this.props.match.params.hasOwnProperty("discover")) {
      this.props.callDiscoverFilter();
    } else {
      this.setState({
        apiObject: {
          tab_id: 0,
          api_type: 1,
          flag: 3,
          screen_id: 0
        }
      });

      this.props.parentLoadOldOfferData(
        0,
        cityIndex.c_key,
        localityIndex.l_key,
        0,
        1,
        3,
        true,
        true,
        0
      );
    }
  };

  readCityIndex = (cityName, cityList) => {
    for (let i = 0; i < cityList.city.length; i++) {
      if (
        cityName
          .replace(/-/g, " ")
          .replace(/ /g, "")
          .toLowerCase() ===
        cityList.city[i].c_text.replace(/ /g, "").toLowerCase()
      ) {
        return cityList.city[i];
      }
    }
  };

  readLocalityIndex = (localityName, localityList) => {
    for (let i = 0; i < localityList.locality.length; i++) {
      if (
        localityName
          .replace(/-/g, " ")
          .replace(/ /g, "")
          .toLowerCase() ===
        localityList.locality[i].l_text.replace(/ /g, "").toLowerCase()
      ) {
        return localityList.locality[i];
      }
    }
  };

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
    empty,
    priceStatus,
    object
  ) => {
    return (
      <Card
        className={classes.OfferningCard}
        key={key}
        style={{ cursor: "pointer" }}
      >
        <div
          className="ui fluid image"
          onClick={() => this.logicClickButton(true)}
        >
          <span
            className={classes.Heart}
            style={{
              display: popularity === 0 ? "none" : "intial"
            }}
          >
            <img
              src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1532419222/ballyhoo/EMAIL/heart.png"
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
              display: calendar === undefined ? "none" : "intial",
              marginLeft: object.Offering === "Event" ? "22em" : "20em"
            }}
          >
            {calendar}
          </span>
        </div>

        <Card.Content onClick={() => this.logicClickButton(true)}>
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
                    paddingLeft: "1px",
                    display: actualPrice === 0 ? "none" : "intial"
                  }}
                  // hidden={actualPrice === 0 ? true : false}
                >
                  {actualPrice}
                  <span
                    style={{
                      display: priceStatus === 0 ? "none" : "intial",
                      fontSize: "16px",
                      paddingLeft: "2px"
                    }}
                  >
                    Onwards
                  </span>
                </label>
              </Icon>
              <span
                className={classes.DiscountPricePercent}
                // hidden={discount === 0 ? true : false}
                style={{
                  display: discount === 0 ? "none" : "intial"
                }}
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

        calendar = obj.EVENTS.event_day;
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
        empty,
        0,
        obj
      );
    });
  };

  newOfferingCard = json => {
    if (json === undefined) {
      return;
    }

    return json.map((obj, key) => {
      let discount = 0;
      let discountPrice = 0;
      let calendar = undefined;
      let maleNonveg = undefined;
      let femaleVeg = undefined;
      let content = undefined;

      if (Object.keys(obj.ACTIVITY).length !== 0) {
        content = obj.ACTIVITY.Offer_Description;

        // Description
        if (content !== undefined && content !== "" && content !== null) {
          if (content.length > MAX_DESCRIPTION_LENGTH) {
            content = content.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
          }
        }
      } else if (Object.keys(obj.EVENT).length !== 0) {
        content = obj.EVENT.Offer_Description;

        // Description
        if (content !== undefined && content !== "" && content !== null) {
          if (content.length > MAX_DESCRIPTION_LENGTH) {
            content = content.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
          }
        }
      } else if (Object.keys(obj.GETAWAY).length !== 0) {
        content = obj.GETAWAY.Offer_Description;

        // Description
        if (content !== undefined && content !== "" && content !== null) {
          if (content.length > MAX_DESCRIPTION_LENGTH) {
            content = content.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
          }
        }
      } else if (Object.keys(obj.SALOON).length !== 0) {
        content = obj.SALOON.Offer_Description;

        // Description
        if (content !== undefined && content !== "" && content !== null) {
          if (content.length > MAX_DESCRIPTION_LENGTH) {
            content = content.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
          }
        }

        if (obj.SALOON.Gender_Preference === 1) {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
        } else if (obj.SALOON.Gender_Preference === 2) {
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
        } else {
          maleNonveg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/male-face01.png";
          femaleVeg =
            "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_26,w_20/v1532592222/ballyhoo/EMAIL/female-face03.png";
        }
      } else {
        return;
      }

      // Discount
      discount = parseInt(obj.Offer_Basic_Details.Offer_Min_Discount, 10);
      if (obj.Offer_Basic_Details.Offer_Min_Price !== 0 && discount !== 0) {
        discountPrice =
          (obj.Offer_Basic_Details.Offer_Min_Price * discount) / 100;
        discount = discount + "%" + " OFF";
      } else if (discount !== 0) {
        discount = discount + "%" + " OFF";
      }

      const priceStatus = obj.Offer_Basic_Details.Offer_Min_Price === 0 ? 0 : 1;

      const rating = obj.Merchant_Details.Merchant_Ratings + "";
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
        key,
        obj.Offer_Basic_Details.Offer_Popularity,
        calendar,
        obj.Offer_Basic_Details.Offer_Image,
        femaleVeg,
        maleNonveg,
        obj.Merchant_Details.Merchant_Bname,
        obj.Offer_Basic_Details.Offering_Title,
        content,
        obj.Offer_Basic_Details.Offer_Min_Price,
        discountPrice,
        discount,
        obj.Offer_Basic_Details.Calculated_Distance,
        obj.Offer_Basic_Details.Sponsored,
        undefined,
        full,
        half,
        empty,
        priceStatus,
        obj
      );
    });
  };

  logicOfferningCard = json => {
    if (this.props.apiType === 1) {
      return this.oldOfferingCard(json);
    } else {
      return this.newOfferingCard(json);
    }
  };

  getInitialLevel = level => {
    this.setState(
      {
        level: level + 1
      },
      function() {
        this.setState({
          loading: false,
          click_disabled: false
        });
      }
    );
  };

  loadingStart = level => {
    this.setState(
      {
        loading: true,
        click_disabled: true,
        level: level
      },
      function() {
        if (this.props.location.state !== undefined) {
          this.props.parentLoadOldOfferData(
            this.props.location.state.offerData.tab_id,
            this.props.location.state.offerData.city_id,
            this.props.location.state.offerData.locality_id,
            this.state.level,
            this.props.apiType,
            this.props.flag,
            false,
            false,
            this.props.location.state.offerData.scr_id
          );
        } else {
          this.props.parentLoadOldOfferData(
            this.state.apiObject.tab_id,
            this.state.cityId,
            this.state.localityId,
            this.state.level,
            this.state.apiObject.api_type,
            this.state.apiObject.flag,
            false,
            false,
            this.state.apiObject.screen_id
          );
        }
      }
    );
  };

  // Logic Button Click
  logicClickButton = boolean => {
    this.setState({
      alert: boolean
    });
  };

  // Back History
  backHistory = () => {
    this.props.history.go(-1);
  };

  render() {
    let offerData = [];
    let level = 0;

    if (this.props.apiType === 0 || this.props.flag === 0) {
      return <CardLoader />;
    }

    // Collection
    if (this.props.flag === 1) {
      if (this.props.apiType === 1) {
        if (
          this.props.collectionOldOffer.collectionOldOffer === null ||
          this.props.collectionOldOffer.collectionOldOffer === undefined
        ) {
          return <CardLoader />;
        }

        if (!_.isArray(this.props.collectionOldOffer.collectionOldOffer)) {
          return <CardLoader />;
        }

        if (_.isEmpty(this.props.collectionOldOffer.collectionOldOffer)) {
          return (
            <div>
              <CardLoader />
              <SweetAlert
                show={true}
                title="Ballyhoo"
                imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
                text="Gosh! seems like all the offers are gone already! Please try in few hours to explore new ones"
                onConfirm={() => this.backHistory()}
              />
            </div>
          );
        }

        offerData = this.props.collectionOldOffer.collectionOldOffer;
        level = this.props.collectionOldOffer.level;
      } else {
        if (
          this.props.collectionNewOffer.collectionNewOffer === null ||
          this.props.collectionNewOffer.collectionNewOffer === undefined
        ) {
          return <CardLoader />;
        }

        if (!_.isArray(this.props.collectionNewOffer.collectionNewOffer)) {
          return <CardLoader />;
        }

        if (_.isEmpty(this.props.collectionNewOffer.collectionNewOffer)) {
          return (
            <div>
              <CardLoader />
              <SweetAlert
                show={true}
                title="Ballyhoo"
                imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
                text="Gosh! seems like all the offers are gone already! Please try in few hours to explore new ones"
                onConfirm={() => this.backHistory()}
              />
            </div>
          );
        }

        offerData = this.props.collectionNewOffer.collectionNewOffer;
        level = this.props.collectionNewOffer.level;
      }
    } else if (this.props.flag === 2) {
      // Discover
      if (this.props.apiType === 1) {
        if (
          this.props.discoverOldOffer.discoverOldOffer === null ||
          this.props.discoverOldOffer.discoverOldOffer === undefined
        ) {
          return <CardLoader />;
        }

        if (!_.isArray(this.props.discoverOldOffer.discoverOldOffer)) {
          return <CardLoader />;
        }

        if (_.isEmpty(this.props.discoverOldOffer.discoverOldOffer)) {
          return (
            <div>
              <CardLoader />
              <SweetAlert
                show={true}
                title="Ballyhoo"
                imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
                text="Gosh! seems like all the offers are gone already! Please try in few hours to explore new ones"
                onConfirm={() => this.backHistory()}
              />
            </div>
          );
        }

        offerData = this.props.discoverOldOffer.discoverOldOffer;
        level = this.props.discoverOldOffer.level;
      } else {
        if (
          this.props.discoverNewOffer.discoverNewOffer === null ||
          this.props.discoverNewOffer.discoverNewOffer === undefined
        ) {
          return <CardLoader />;
        }

        if (!_.isArray(this.props.discoverNewOffer.discoverNewOffer)) {
          return <CardLoader />;
        }

        if (_.isEmpty(this.props.discoverNewOffer.discoverNewOffer)) {
          return (
            <div>
              <CardLoader />
              <SweetAlert
                show={true}
                title="Ballyhoo"
                imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
                text="Gosh! seems like all the offers are gone already! Please try in few hours to explore new ones"
                onConfirm={() => this.backHistory()}
              />
            </div>
          );
        }

        offerData = this.props.discoverNewOffer.discoverNewOffer;
        level = this.props.discoverNewOffer.level;
      }
    } else if (this.props.flag === 3) {
      if (
        this.props.localityOldOffer.localityOldOffer === null ||
        this.props.localityOldOffer.localityOldOffer === undefined
      ) {
        return <CardLoader />;
      }

      if (!_.isArray(this.props.localityOldOffer.localityOldOffer)) {
        return <CardLoader />;
      }

      if (_.isEmpty(this.props.localityOldOffer.localityOldOffer)) {
        return (
          <div>
            <CardLoader />
            <SweetAlert
              show={true}
              title="Ballyhoo"
              imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
              text="Gosh! seems like all the offers are gone already! Please try in few hours to explore new ones"
              onConfirm={() => this.backHistory()}
            />
          </div>
        );
      }

      offerData = this.props.localityOldOffer.localityOldOffer;
      level = this.props.localityOldOffer.level;
    } else {
      return <div />;
    }

    const { loading, click_disabled } = this.state;

    return (
      <Container className={classes.OfferningContainer}>
        {/* <Segment>
          <Breadcrumb size="large">
            <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section link>Store</Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section active>Shirt</Breadcrumb.Section>
          </Breadcrumb>
        </Segment> */}

        <Card.Group itemsPerRow={3} doubling stackable>
          {this.logicOfferningCard(offerData)}
        </Card.Group>

        <Button
          size="large"
          color="violet"
          loading={loading}
          disabled={this.state.level > 4 ? true : click_disabled}
          onClick={() => this.loadingStart(level + 1)}
          style={{
            marginTop: "1.5em",
            marginBottom: "1.5em",
            marginLeft: "45%"
          }}
        >
          Load More
        </Button>
        {this.state.alert ? (
          <SweetAlert
            show={true}
            title="Ballyhoo"
            imageUrl="http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_30/v1503906380/ballyhoo/EMAIL/logo.png"
            html="Please download the Ballyhoo App for Ios <a href= https://itunes.apple.com/in/app/ballyhoo-food-drinks-offers/id1138306421?mt=8>App Store</a> for Android <a href= https://play.google.com/store/apps/details?id=com.sense.today.ballyhoo>Play Store</a>"
            onConfirm={() => this.logicClickButton(false)}
          />
        ) : null}
      </Container>
    );
  }
}
