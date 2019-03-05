import React from "react";
import { Link } from "react-router-dom";

import {
  Divider,
  Grid,
  Image,
  List,
  Icon,
  Segment
} from "semantic-ui-react/dist/commonjs";
import classes from "./static/css/footer.css";
import AppStore from "./static/img/apple-store.png";
import GooglePlay from "./static/img/google-play.png";
import Helmet, { HelmetProvider } from 'react-helmet-async';


export default class Footer extends React.Component {
  render() {
    return (
    <HelmetProvider>
      <div className={classes.FooterContainer}>
          <Helmet>
            <meta name="keywords" content="ballyhoo bengaluru experience online offers lunch dinner wine beer" /> 
          </Helmet>
        <Segment
          style={{
            backgroundColor: "#444a62"
          }}
        >
          <Divider />
          <Grid doubling floated="left" centered inverted stackable>
            <Grid.Row columns="equal">
              <Grid.Column floated="left">
                <List horizontal link inverted relaxed>
                  <List.Item>
                    <Link to="/web/terms">Terms of Service </Link>
                  </List.Item>
                  <List.Item>
                    <Link to="/web/privacy">Privacy Policy</Link>
                  </List.Item>

                  <List.Item>
                    <Link to="/web/faq">FAQ's</Link>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="right">
                <List horizontal link inverted>
                  <List.Item
                    as="a"
                    href="https://www.facebook.com/ballyhootoday/"
                    target="_blank"
                  >
                    <Icon inverted circular name="facebook" style={{}} />
                  </List.Item>

                  <List.Item
                    as="a"
                    href="https://www.instagram.com/ballyhootoday/"
                    target="_blank"
                  >
                    <Icon inverted circular name="instagram" style={{}} />
                  </List.Item>

                  <List.Item
                    as="a"
                    href="https://twitter.com/BallyhooToday"
                    target="_blank"
                  >
                    <Icon inverted circular name="twitter" style={{}} />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />

          <Grid doubling stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={6} />
              <Grid.Column>
                <List horizontal link inverted relaxed>
                  <List.Item
                    as="a"
                    target="_blank"
                    href="https://itunes.apple.com/in/app/ballyhoo-food-drinks-offers/id1138306421?mt=8"
                  >
                    <Image
                      centered
                      src={AppStore}
                      style={{ width: "120px", height: "auto" }}
                    />
                  </List.Item>

                  <List.Item
                    as="a"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.sense.today.ballyhoo"
                  >
                    <Image
                      centered
                      src={GooglePlay}
                      style={{ width: "120px", height: "auto" }}
                    />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    </HelmetProvider>
    );
  }
}
