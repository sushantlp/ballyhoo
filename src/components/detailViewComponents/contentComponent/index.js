import React from "react";
// import Truncate from "react-truncate";

import Header from "./headerComponent/header";
import Basic from "./basicComponent/basic";
import BusinessHour from "./businessHourComponent/business";
import Hashtag from "./hashtagComponent/hashtag";
import Highlight from "./highlightComponent/highlight";
import Inclusion from "./inclusionComponent/inclusion";
import Note from "./noteComponent/note";
import Term from "./termComponent/term";
import Faq from "./faqComponent/faq";
import Package from "./packageComponent/package";
import Menu from "./menuComponent/menu";
import Helmet, { HelmetProvider } from 'react-helmet-async';

export default class Content extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <div>
          <Helmet>
            <meta name="keywords" content="ballyhoo bengaluru experience online offers lunch dinner wine beer" /> 
          </Helmet>

          <Header
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <Basic
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <BusinessHour
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <Hashtag
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <Highlight
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <Inclusion
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <Package
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
            updateBookingDetail={this.props.updateBookingDetail}
          />
          <Menu
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
            updateBookingDetail={this.props.updateBookingDetail}
          />
          <Term
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <Faq
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
          <Note
            history={this.props.history}
            detailState={this.props.detailState}
            newViewDetail={this.props.newViewDetail}
            oldViewDetail={this.props.oldViewDetail}
          />
        </div>
      </HelmetProvider>
    );
  }
}