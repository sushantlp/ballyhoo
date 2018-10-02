import React from "react";

import Sticky from "react-stickynode";
import Left from "./leftSideComponent/left";
import Right from "./rightSideComponent/right";
import Header from "../header/header";
import Footer from "../footer/footer";

import { Container, Grid } from "semantic-ui-react/dist/commonjs";

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: false,
      oldCategory: false,
      newCategory: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.history.location.state !== undefined) {
      const object = this.props.location.state.checkoutData;
      console.log(this.props);
      if (object.categoryFlag === "OLD") {
        if (object.detailObject.Offering === "Delivery Only") {
          this.setState({
            delivery: true,
            oldCategory: true
          });

          // Get Delivery Additional Charge
          this.props.getDeliveryAdditionalCharge(object.detailBookingPrice);
        } else {
          this.setState({
            oldCategory: true
          });

          // Get Additional Charge
          this.props.getOtherAdditionalCharge(object.detailBookingPrice);
        }

        // Check Payment Mode Active
        this.props.getPaymentMode(object.detailObject.MERCHANT.Contact);
      } else {
        this.setState({
          newCategory: true
        });

        // Get Additional Charge
        this.props.getOtherAdditionalCharge(object.detailBookingPrice);

        // Check Payment Mode Active
        this.props.getPaymentMode(object.detailObject.merchant_mobile);
      }
    } else {
      this.props.history.push("/web");
    }
  }

  render() {
    return (
      <div>
        <Header />

        <Container style={{ marginTop: "10px" }}>
          <h1
            style={{
              fontWeight: "500",
              color: "rgba(0,0,0,.6)"
            }}
          >
            Checkout
          </h1>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column width={10}>
                <Right
                  history={this.props.history}
                  parentState={this.state}
                  paymentMode={this.props.paymentMode}
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Sticky enabled={true} top={50} bottomBoundary={500}>
                  <Left
                    history={this.props.history}
                    parentState={this.state}
                    deliveryAdditionalCharge={
                      this.props.deliveryAdditionalCharge
                    }
                    otherAdditionalCharge={this.props.otherAdditionalCharge}
                  />
                </Sticky>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Footer />
      </div>
    );
  }
}
