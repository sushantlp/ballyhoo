import React from "react";
import { Container } from "semantic-ui-react/dist/commonjs";
import Carousel from "nuka-carousel";

import classes from "./static/css/image.css";

export default class ImageSlider extends React.Component {
  render() {
    return (
      <Container fluid>
        <Carousel wrapAround={true}>
          <img src="https://cdn-imgix.headout.com/tour/15628/TOUR-IMAGE/5d3e7c9c-0de0-4636-aaac-405defddf764-8789-budapest-danube-bend-tour-02.jpg?auto=compress&fm=pjpg&w=1200&h=400&crop=faces&fit=min" />
          <img src="https://cdn-imgix.headout.com/tour/15627/TOUR-IMAGE/62c11ff3-479a-4bf0-ae4a-a0bf998b382b-8788-budapest-sisi-tour-02.jpg?auto=compress&fm=pjpg&w=1200&h=400&crop=faces&fit=min" />
          <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_1200,h_400/v1518779631/ballyhoo/HOME_SCREEN/40.jpg?auto=compress&fm=pjpg&w=1200&h=600&crop=faces&fit=min" />
          <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_1200,h_400/v1518779799/ballyhoo/HOME_SCREEN/42.jpg" />
          <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_1200,h_400/v1526290357/ballyhoo/HOME_SCREEN/75.jpg" />
          <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_1200,h_400/v1514732714/ballyhoo/HOME_SCREEN/35.jpg" />
        </Carousel>
      </Container>
    );
  }
}

// const Decorators = CreateReactClass({
//   render() {
//     return <button onClick={this.props.previousSlide}>Previous Slide</button>;
//   },

//   position: "CenterLeft",
//   style: {
//     padding: 20,
//     height: 400
//   }
// });

// var LiveExample = CreateReactClass({
//   render: function() {
//     return (
//       <Carousel decorators={Decorators} wrapAround={true}>
//         <img src="https://cdn-imgix.headout.com/tour/15628/TOUR-IMAGE/5d3e7c9c-0de0-4636-aaac-405defddf764-8789-budapest-danube-bend-tour-02.jpg?auto=compress&fm=pjpg&w=1200&h=750&crop=faces&fit=min" />
//         <img src="https://cdn-imgix.headout.com/tour/15627/TOUR-IMAGE/62c11ff3-479a-4bf0-ae4a-a0bf998b382b-8788-budapest-sisi-tour-02.jpg?auto=compress&fm=pjpg&w=1200&h=750&crop=faces&fit=min" />

//         <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1518779631/ballyhoo/HOME_SCREEN/40.jpg?auto=compress&fm=pjpg&w=600&h=400&crop=faces&fit=min" />

//         <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1518779799/ballyhoo/HOME_SCREEN/42.jpg" />

//         <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1526290357/ballyhoo/HOME_SCREEN/75.jpg" />

//         <img src="https://res.cloudinary.com/dp67gawk6/image/upload/w_600,h_400/v1514732714/ballyhoo/HOME_SCREEN/35.jpg" />
//       </Carousel>
//     );
//   }
// });

// export default LiveExample;
