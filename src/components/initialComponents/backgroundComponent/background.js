import React from "react";

import { Segment, Dropdown, Grid, Icon, Button } from "semantic-ui-react";

import classes from "./static/css/background.css";

export default class Background extends React.Component {
  render() {
    const cityOptions = [{ key: "AL", value: "AL", text: "Delhi" }];
    const stateOptions = [{ key: "AL", value: "AL", text: "Rajiv Chowk" }];
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
                options={cityOptions}
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
                placeholder="State"
                search
                selection
                options={stateOptions}
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
                placeholder="Select Friend"
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
    // if (
    //   this.props.cityLocality === null ||
    //   this.props.cityLocality === undefined
    // ) {
    //   return (
    //     <Segment
    //       raised
    //       style={{
    //         minHeight: 600,
    //         margin: "0",
    //         background: "url({backgroundImage})"
    //       }}
    //     />
    //   );
    // }

    // if (Object.keys(this.props.cityLocality).length === 0) {
    //   return (
    //     <Segment
    //       raised
    //       style={{
    //         minHeight: 600,
    //         margin: "0",
    //         background: "url({backgroundImage})"
    //       }}
    //     />
    //   );
    // }

    //return <div>{this.getPlaylists()}</div>;
  }
}
