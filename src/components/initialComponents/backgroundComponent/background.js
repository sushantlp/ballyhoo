import React from "react";

import {
  Segment,
  Dropdown,
  Grid,
  Icon,
  Button,
  Dimmer,
  Loader
} from "semantic-ui-react";

import classes from "./static/css/background.css";

export default class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityLocalityProps: [],
      cityList: [],
      localityList: [],
      cityId: 0,
      localityId: 0,
      cityValue: "City",
      localityValue: "Locality"
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // Update State
    this.setState({
      cityLocalityProps: nextProps.cityLocality
    });

    // // Find city
    // this.findCity(nextProps);

    // // Find Locality
    // this.findLocality(nextProps);

    // // Create City List
    // this.createCityList(nextProps.cityLocality.city);
  }

  // Find city
  findCity = props => {
    props.cityLocality.city.map(obj => {
      // String come

      if (props.defaultCity === obj.c_text) {
        // Update State
        this.setState({
          cityId: obj.c_key,
          cityValue: obj.c_text
        });
      } else if (props.defaultCity === obj.c_key) {
        // Update State
        this.setState({
          cityId: obj.c_key,
          cityValue: obj.c_text
        });
      }
    });
  };

  // Find city
  findLocality = props => {
    props.cityLocality.locality.map(obj => {
      // String come

      if (props.defaultLocality === obj.l_text) {
        // Update State
        this.setState(
          { localityId: obj.l_key, localityValue: obj.l_text },
          function() {
            // Create Locality List
            this.createLocalityList(obj.c_key);
          }
        );
      } else if (props.defaultLocality === obj.l_key) {
        // Update State
        this.setState(
          { localityId: obj.l_key, localityValue: obj.l_text },
          function() {
            // Create Locality List
            this.createLocalityList(obj.c_key);
          }
        );
      }
    });
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

    // Update State
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

    // Update State
    this.setState({
      localityList: localityArray
    });
  };

  // Logic Click City
  logicClickCity = (event, data) => {
    //this.props.history.push(data);

    // Update State
    this.setState({
      cityValue: data
    });

    // Update State
    this.setState({
      localityValue: ""
    });

    // City Array
    this.state.cityLocalityProps.city.map(obj => {
      if (data === obj.c_text) {
        this.setState({ cityId: obj.c_key }, function() {
          // Create Locality List
          this.createLocalityList(this.state.cityId);
        });
      }
    });
  };

  // Logic Click City
  logicClickLocality = (event, data) => {
    // Update State
    this.setState({
      localityValue: data
    });
  };

  render() {
    if (
      this.props.cityLocality === null ||
      this.props.cityLocality === undefined
    ) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    if (Object.keys(this.props.cityLocality).length === 0) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }

    const { cityList, localityList } = this.state;

    const friendOptions = [
      {
        text: "Happy Hours",
        value: "Jenny Hess",
        image: {
          avatar: true,
          src:
            "http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_28,w_28/v1474443032/ballyhoo/BREAKFAST/5.jpg"
        }
      },
      {
        value: "Lunch Buffet",
        image: {
          avatar: true,
          src:
            "http://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_28,w_28/v1474443032/ballyhoo/BREAKFAST/5.jpg"
        }
      }
    ];
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
                options={friendOptions}
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

// Background.propTypes = {
//   history: PropTypes.object.isRequired
// };
