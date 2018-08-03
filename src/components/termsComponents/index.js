import React from "react";

import { Container, Header, Segment } from "semantic-ui-react";

import classes from "./static/css/terms.css";

const TermsOfService = () => (
  <Container>
    {/* <Header as="h1" textAlign="center" style={{ marginTop: "2%" }}>
        Terms Of Service
      </Header> */}
    <div className={classes.HeaderContainer}>
      <h4 className={classes.HeaderName}>TERMS OF SERVICE</h4>
      <div className={classes.UnderScore} />
    </div>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        1. Your Acceptance
      </Header>
      <p>
        This is an agreement between LiveIntuitions Technologies Pvt. Ltd., a
        Bangalore-based technology company ("liveintech"), the owner and
        operator of www.ballyhoo.today (the "Ballyhoo Site"), the Ballyhoo
        software (collectively, including all content provided by liveintech
        through the apps and the Ballyhoo Site, the "Ballyhoo Service", or the
        "Service"), and you ("you" or "You"), a user of the Service. BY USING
        THE SERVICE, YOU ACKNOWLEDGE AND AGREE TO THESE TERMS OF SERVICE, AND
        liveintech's PRIVACY POLICY, WHICH CAN BE FOUND AT
        https://ballyhoo.today/privacy, AND WHICH ARE INCORPORATED HEREIN BY
        REFERENCE. If you choose to not agree with any of these terms, you may
        not use the Service.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        2. Ballyhoo Service
      </Header>
      <p>
        These Terms of Service apply to all users of the Ballyhoo Service.
        Information provided by our users through the Ballyhoo Service may
        contain links to third party websites that are not owned or controlled
        by liveintech. liveintech has no control over, and assumes no
        responsibility for, the content, privacy policies, or practices of any
        third party websites. In addition, liveintech will not and cannot censor
        or edit the content of any third-party site. By using the Service, you
        expressly acknowledge and agree that liveintech shall not be responsible
        for any damages, claims or other liability arising from or related to
        your use of any third-party website.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        3. Ballyhoo Access
      </Header>
      <p>
        <strong>A.</strong> Subject to your compliance with these Terms of
        Service, liveintech hereby grants you permission to use the Service,
        provided that: (i) your use of the Service as permitted is solely for
        your personal use, and you are not permitted to resell or charge others
        for use of or access to the Service, or in any other manner inconsistent
        with these Terms of Service; (ii) you will not duplicate, transfer, give
        access to, copy or distribute any part of the Service in any medium
        without liveintech's prior written authorization; (iii) you will not
        attempt to reverse engineer, alter or modify any part of the Service;
        and (iv) you will otherwise comply with the terms and conditions of
        these Terms of Service and Privacy Policy.
      </p>
      <p>
        <strong>B.</strong> In order to access and use the features of the
        Service, you acknowledge and agree that you will have to provide
        liveintech with your mobile phone number. You expressly acknowledge and
        agree that in order to provide the Service, liveintech may periodically
        access your contact list and/or address book on your mobile device to
        find and keep track of mobile phone numbers of other users of the
        Service. When providing your mobile phone number, you must provide
        accurate and complete information. You hereby give your express consent
        to liveintech to access your contact list and/or address book for mobile
        phone numbers in order to provide and use the Service. We collect the
        mobile phone number of all users, and the e-mail address of users who
        opt in to receive e-mail newsletters during registration. You must
        notify liveintech immediately of any breach of security or unauthorized
        use of your mobile phone. Although liveintech will not be liable for
        your losses caused by any unauthorized use of your account, you may be
        liable for the losses of liveintech or others due to such unauthorized
        use.
      </p>
      <p>
        <strong>C.</strong> You agree not to use or launch any automated system,
        including without limitation, "robots," "spiders," "offline readers,"
        etc. or "load testers" such as wget, apache bench, mswebstress,
        httpload, blitz, Xcode Automator, Android Monkey, etc., that accesses
        the Service in a manner that sends more request messages to the
        liveintech servers in a given period of time than a human can reasonably
        produce in the same period by using a Ballyhoo application, and you are
        forbidden from ripping the content unless specifically allowed.
        Notwithstanding the foregoing, liveintech grants the operators of public
        search engines permission to use spiders to copy materials from the
        website for the sole purpose of creating publicly available searchable
        indices of the materials, but not caches or archives of such materials.
        liveintech reserves the right to revoke these exceptions either
        generally or in specific cases. While we don't disallow the use of
        sniffers such as Ethereal, tcpdump or HTTPWatch in general, we do
        disallow any efforts to reverse-engineer our system, our protocols, or
        explore outside the boundaries of the normal requests made by liveintech
        clients. We have to disallow using request modification tools such as
        fiddler or whisker, or the like or any other such tools activities that
        are meant to explore or harm, penetrate or test the site. You must
        secure our permission before you measure, test, health check or
        otherwise monitor any network equipment, servers or assets hosted on our
        domain. You agree not to collect or harvest any personally identifiable
        information, including phone number, from the Service, nor to use the
        communication systems provided by the Service for any commercial
        solicitation or spam purposes. You agree not to spam, or solicit for
        commercial purposes, any users of the Service.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        4. Intellectual Property Rights
      </Header>
      <p>
        The design of the Ballyhoo Service along with all associated properties,
        are owned by or licensed to liveintech, subject to copyright and other
        intellectual property rights under Indian Law. The Service is provided
        to you AS IS for your information and personal use only. liveintech
        reserves all rights not expressly granted in and to the Service. You
        agree to not engage in the use, copying, or distribution of any of the
        Service other than expressly permitted herein, including any use,
        copying, or distribution of Status Submissions of third parties obtained
        through the Service for any commercial purposes.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        5. Governing Law
      </Header>
      <p>
        These Terms of Service will be governed by the laws of India. You thus
        agree that any cause of action, suit or any other legal proceeding, you
        may have with respect to Ballyhoo shall be subject to the jurisdiction
        of courts in Bangalore or Benguluru. We reserve the right to change
        these Terms of Service at any time and to notify users of any such
        changes solely by changing this Terms of Service. Your continued use of
        the Web site or mobile app after the posting of any amended Terms of
        Service shall be taken as your agreement to any such changes. Also, we
        may deny access to any user at any time for any reason. We hereby
        reserve the right to block usage of the Website and the App if any
        breach of the Terms of Service is caused by a User.
      </p>
    </Segment>
    <Segment>
      <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
        <strong>6.</strong> liveintech reserves the right to discontinue any
        aspect of the Ballyhoo Service at any time.
      </Header>
    </Segment>
  </Container>
);

export default TermsOfService;
