import React from "react";
import Truncate from "react-truncate";

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

export default class Content extends React.Component {
  render() {
    return (
      <div>
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
        />
        <Menu
          history={this.props.history}
          detailState={this.props.detailState}
          newViewDetail={this.props.newViewDetail}
          oldViewDetail={this.props.oldViewDetail}
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
    );
  }
}
