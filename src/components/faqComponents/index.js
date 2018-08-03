import React from "react";

import { Container, Header, Segment } from "semantic-ui-react";

import classes from "./static/css/faq.css";

const FaqComponent = () => (
  <Container>
    {/* <Header
        as="h1"
        textAlign="center"
        style={{
          marginTop: "2%",
          fontWeight: "600",
          color: "rgb(122, 82, 192)"
        }}
      >
        FAQ's
      </Header> */}
    <div className={classes.HeaderContainer}>
      <h4 className={classes.HeaderName}>FAQ'S</h4>
      <div className={classes.UnderScore} />
    </div>

    <Header as="h3" style={{ color: "rgba(0,0,0,.68)" }}>
      Ballyhoo Today is a hyper-local that helps you find the best deals on
      restaurants, pubs, breweries, night life and much more around you, just
      when you want. Find a deal that catches your fancy, pay for it through the
      app, and go to the merchant location to redeem it.
    </Header>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        FIND DEALS WHERE YOU ARE
      </Header>
      <p>
        Ballyhoo uses your location to show the best deals near you. We can even
        alert you when a great discount comes up in your neighbourhood, if you
        want us to do so.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        SEAMLESS PAYMENT
      </Header>
      <p>
        You can buy most deals by paying the full amount through the app, and
        redeem at the merchant for a cashless experience.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        CONFIRMATION CODE
      </Header>
      <p>
        This is just a friendly service for you to get a confirmed code for the
        deal. The payments in full can be done at merchant.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        NO PLANNING REQUIRED
      </Header>
      <p>
        Ballyhoo is meant for immediate consumption. Just open the app, buy a
        deal, and you can redeem it immediately.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        EASY REDEMPTION
      </Header>
      <p>
        You can redeem deals with just a tap on a button - no printouts
        required!
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        THE BEST DEALS
      </Header>
      <p>
        We work incredibly hard to get you the best discounts on the services
        you use the most. But please do not believe us- Try and decide yourself
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        REALTIME..?
      </Header>
      <p>
        We encourage businesses to offer a deal in real-time i.e. rest assured
        the deals get updated atleast daily and sometimes hourly!
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        How will I get a confirmation once I buy a deal?
      </Header>
      <p>
        You will receive a notification alert with a numeric code which you
        would use while redeeming the deal
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        How do I redeem a deal that I’ve bought through the Ballyhoo app?
      </Header>
      <p>
        Once your payment is confirmed just present a confirmation code to
        merchant before billing or payment
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        Do I need to take a print out of it?
      </Header>
      <p>Absolutely not.</p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        Are the deals time bound or I can go avail them anytime?
      </Header>
      <p>
        Yes, almost every deal has an expiry date and time within which you
        would need to redeem.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        Is the reservation or the booking taken care by Ballyhoo?
      </Header>
      <p>
        No. Please call the respective merchant and take a prior appointment to
        avoid any hassle.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        What if the merchant refuses to honour my deal?
      </Header>
      <p>Please write to us at contact@ballyhoo.today</p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        Do I get an alert before my purchase is about to expire?
      </Header>
      <p>
        Yes we do our best to remind you but we strongly advice to redeem the
        deals asap as the ballyhoo deals are all real-time, hence the expiry
        time would be very short.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        Can I cancel the deal after making a booking at the hotel or wellness
        centre?
      </Header>
      <p>
        Almost always NO. We work hard to get you an awesome deal and due to its
        nature of real-time we do not offer any cancellations or refunds
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        How can I cancel the deal?
      </Header>
      <p>Not possible.</p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        {" "}
        Refund
      </Header>
      <p>
        In a rare scenario where merchant is not abel to fulfill an agreed
        obligation we will consider for refund? 48 hours.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        What do I do, if I don’t get my refund on time?
      </Header>
      <p>
        Please write back to us at
        <a href="mailto:contact@ballyhoo.today" target="_top">
          &nbsp; contact@ballyhoo.today &nbsp;
        </a>
        Contact Us
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        I have a problem, where and whom should I contact for it?
      </Header>
      <p>
        Please reach out to us at
        <a href="mailto:contact@ballyhoo.today" target="_top">
          &nbsp; contact@ballyhoo.today .
        </a>
      </p>
    </Segment>
  </Container>
);

export default FaqComponent;
