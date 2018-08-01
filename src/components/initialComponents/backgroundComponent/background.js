import React from "react";
import _ from "lodash";

import {
  Segment,
  Dropdown,
  Grid,
  Icon,
  Button
} from "semantic-ui-react/dist/commonjs";

import BackgroundLoader from "../../loaderComponents/backgroundLoader";

import classes from "./static/css/background.css";

export default class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityLocalityProps: {},
      cityList: [],
      localityList: [],
      categoryList: [],
      cityId: 0,
      localityId: 0,
      cityValue: "",
      localityValue: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    // City Locality
    if (Object.keys(nextProps.cityLocality).length !== 0) {
      // Update State
      this.setState({
        cityLocalityProps: nextProps.cityLocality
      });

      // Find city
      this.findCity(nextProps);

      // Find Locality
      this.findLocality(nextProps);

      // Create City List
      this.createCityList(nextProps.cityLocality.city);
    }

    // Category Filter
    if (Object.keys(nextProps.categoryFilter).length !== 0) {
      // Create Category Filter
      this.createCategoryFilter(nextProps.categoryFilter);
    }
  }

  // Find city
  findCity = props => {
    for (let i = 0; i < props.cityLocality.city.length; i++) {
      if (typeof props.defaultCity === "string") {
        // String come
        if (
          props.defaultCity
            .replace(/-/g, " ")
            .replace(/ /g, "")
            .toLowerCase() ===
          props.cityLocality.city[i].c_text.replace(/ /g, "").toLowerCase()
        ) {
          if (Object.keys(this.props.url).length !== 0) {
            this.props.history.push(this.props.url);
          }
          this.setState(
            {
              cityId: props.cityLocality.city[i].c_key,
              cityValue: props.cityLocality.city[i].c_text
            },
            function() {
              this.props.parentCityChange(
                this.state.cityId,
                props.cityLocality.city[i].c_text,
                true
              );
            }
          );
          break;
        }
      } else if (props.defaultCity === props.cityLocality.city[i].c_key) {
        this.setState({
          cityId: props.cityLocality.city[i].c_key,
          cityValue: props.cityLocality.city[i].c_text
        });

        break;
      }
    }
  };

  // Find city
  findLocality = props => {
    for (let i = 0; i < props.cityLocality.locality.length; i++) {
      if (typeof props.defaultLocality === "string") {
        // String come
        if (
          props.defaultLocality
            .replace(/-/g, " ")
            .replace(/ /g, "")
            .toLowerCase() ===
          props.cityLocality.locality[i].l_text.replace(/ /g, "").toLowerCase()
        ) {
          this.setState(
            {
              localityId: props.cityLocality.locality[i].l_key,
              localityValue: props.cityLocality.locality[i].l_text
            },
            function() {
              // Create Locality List
              this.createLocalityList(props.cityLocality.locality[i].c_key);
            }
          );

          break;
        }
      } else if (
        props.defaultLocality === props.cityLocality.locality[i].l_key
      ) {
        this.setState(
          {
            localityId: props.cityLocality.locality[i].l_key,
            localityValue: props.cityLocality.locality[i].l_text
          },
          function() {
            // Create Locality List
            this.createLocalityList(props.cityLocality.locality[i].c_key);
          }
        );
        break;
      } else if (props.defaultLocality === 0) {
        this.setState({ localityId: 0, localityValue: "" }, function() {
          // Create Locality List
          this.createLocalityList(this.state.cityId);
        });
        break;
      }
    }
  };

  // Create City List
  createCityList = city => {
    // Variable
    let cityArray = [];

    // Map
    city.map(obj => {
      const city = {};
      city.key = obj.c_key;
      city.value = obj.c_text;
      city.text = obj.c_text;
      cityArray.push(city);
    });

    this.setState({
      cityList: cityArray
    });
  };

  // Create Locality List
  createLocalityList = cityId => {
    // Variable
    let localityArray = [];

    // Locality Array
    this.state.cityLocalityProps.locality.map(obj => {
      if (cityId === obj.c_key) {
        const locality = {};
        locality.key = obj.l_key;
        locality.value = obj.l_text;
        locality.text = obj.l_text;
        localityArray.push(locality);
      }
    });

    this.setState({
      localityList: localityArray
    });
  };

  // Logic Click City
  logicClickCity = (event, data) => {
    this.setState({
      cityValue: data
    });

    this.setState({
      localityValue: ""
    });

    // City Array
    for (let i = 0; i < this.state.cityLocalityProps.city.length; i++) {
      if (data === this.state.cityLocalityProps.city[i].c_text) {
        this.setState(
          {
            cityId: this.state.cityLocalityProps.city[i].c_key,
            categoryList: []
          },
          function() {
            // Create Locality List
            this.createLocalityList(this.state.cityId);
            this.props.parentCityChange(this.state.cityId, data, false);

            const url = data.replace(/ /g, "-").toLowerCase();
            this.props.history.push("/");
            this.props.history.push(url);
          }
        );
      }
    }
  };

  // Logic Click Locality
  logicClickLocality = (event, data) => {
    this.setState(
      {
        localityValue: data
      },
      function() {
        this.props.parentStateChange(data, false);
        const url = data.replace(/ /g, "-").toLowerCase();
        if (
          this.props.match.params.hasOwnProperty("city") &&
          this.props.match.params.hasOwnProperty("locality")
        ) {
          this.props.history.push(url);
        } else {
          this.props.history.push(this.props.match.params.city + "/" + url);
        }
      }
    );
  };

  logicClickOfferning = (event, data) => {
    const url = data.value.replace(/ /g, "-").toLowerCase();

    const offerIndex = this.readOfferningIndex(data.value, data.options);

    if (
      this.props.match.params.hasOwnProperty("city") &&
      this.props.match.params.hasOwnProperty("locality")
    ) {
      const city = this.props.readCityIndex(
        this.props.match.params.city,
        this.state.cityLocalityProps
      );

      offerIndex.flag = 1;
      offerIndex.city_id = city.c_key;

      if (offerIndex.status === 4) {
        const locality1 = this.props.readLocalityIndex(
          data.value,
          this.state.cityLocalityProps
        );

        // this.props.history.push("/");
        this.props.history.push(locality1.l_text + "/collection/" + url, {
          offerData: offerIndex
        });
      } else {
        const locality2 = this.props.readLocalityIndex(
          this.props.match.params.locality,
          this.state.cityLocalityProps
        );
        offerIndex.locality_id = locality2.l_key;

        this.props.history.push(
          this.props.match.params.locality + "/collection/" + url,
          {
            offerData: offerIndex
          }
        );
      }
    }
  };

  readOfferningIndex = (value, option) => {
    for (let i = 0; i < option.length; i++) {
      if (value.toLowerCase() === option[i].value.toLowerCase()) {
        return option[i];
      }
    }
  };

  // Create Category Filter
  createCategoryFilter = filter => {
    // Variable
    let filterArray = [];

    // Map
    filter.map((obj, index) => {
      const category = {};
      category.key = index;
      category.text = obj.title;
      category.value = obj.title;
      category.api_type = obj.Api_Type;
      category.category_id = obj.c_id;
      category.offering_id = obj.o_id;
      category.status = obj.status;
      category.locality_id = obj.locality;
      category.filter = obj.filter;
      category.hashtag_id = obj.h_id;
      category.city_id = 0;
      category.image = {
        avatar: true,
        src: obj.icon
      };
      filterArray.push(category);
    });

    this.setState({
      categoryList: filterArray
    });
  };

  render() {
    if (
      this.props.cityLocality === null ||
      this.props.cityLocality === undefined ||
      this.props.categoryFilter === null ||
      this.props.categoryFilter === undefined
    ) {
      return <BackgroundLoader />;
    }

    if (
      _.isEmpty(this.props.cityLocality) ||
      _.isEmpty(this.props.categoryFilter)
    ) {
      return <BackgroundLoader />;
    }

    const { cityList, localityList, categoryList } = this.state;

    return (
      <Segment
        raised
        style={{
          width: "auto",
          height: "500px",
          backgroundImage: "url(" + require("./static/img/dashboard.png") + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden"
        }}
      >
        <Grid divided="vertically" style={{ marginTop: "50px" }}>
          <Grid.Row columns={1}>
            <Grid.Column>
              <h1 className={classes.BackgroundHeading}>
                Discover. Eat. Trend. Escape.
              </h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid divided="vertically">
          <Grid.Row>
            <Grid.Column width={2} />
            <Grid.Column width={3} style={{ paddingLeft: "75px" }}>
              <Dropdown
                placeholder="City"
                search
                selection
                options={cityList}
                onChange={(event, data) =>
                  this.logicClickCity(event, data.value)
                }
                value={this.state.cityValue}
                text={this.state.cityValue}
                icon={
                  <Icon
                    position="right"
                    name="marker"
                    style={{
                      marginRight: "-11%",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </Grid.Column>
            <Grid.Column width={3} style={{ paddingLeft: "45px" }}>
              <Dropdown
                placeholder="Locality"
                search
                selection
                options={localityList}
                onChange={(event, data) =>
                  this.logicClickLocality(event, data.value)
                }
                value={this.state.localityValue}
                text={this.state.localityValue}
                icon={
                  <Icon
                    position="right"
                    name="marker"
                    style={{
                      marginRight: "-11%",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </Grid.Column>
            <Grid.Column width={5}>
              <Dropdown
                placeholder="Offer"
                fluid
                selection
                options={categoryList}
                onChange={(event, data) =>
                  this.logicClickOfferning(event, data)
                }
                icon={
                  <Icon
                    position="right"
                    name="search"
                    style={{
                      marginTop: "-13px",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button style={{ backgroundColor: "#7A52C0", color: "white" }}>
                Search
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
