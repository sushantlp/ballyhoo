import React from "react";

import { Card, Container } from "semantic-ui-react";

import classes from "./static/css/category.css";

export default class Category extends React.Component {
  render() {
    return (
      <Container className={classes.CategoryContainer}>
        <div className={classes.HeaderContainer}>
          <h4 className={classes.HeaderName}>CATEGORY</h4>
          <div className={classes.UnderScore} />
        </div>
        <Card.Group itemsPerRow={3} doubling stackable>
          <Card className={classes.CategoryCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474444602/ballyhoo/VEG/3.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.CategoryHeader}>Lunch Buffet</span>
            </div>
          </Card>

          <Card className={classes.CategoryCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474444602/ballyhoo/VEG/3.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.CategoryHeader}>Dinner Buffet</span>
            </div>
          </Card>

          <Card className={classes.CategoryCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474444602/ballyhoo/VEG/3.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.CategoryHeader}>Takeaway</span>
            </div>
          </Card>

          <Card className={classes.CategoryCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474444602/ballyhoo/VEG/3.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.CategoryHeader}>Live Performance</span>
            </div>
          </Card>

          <Card className={classes.CategoryCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474444602/ballyhoo/VEG/3.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.CategoryHeader}>Happy Hours</span>
            </div>
          </Card>

          <Card className={classes.CategoryCard} raised>
            <div className="ui fluid image">
              <img
                src={
                  "https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_400,w_600/v1474444602/ballyhoo/VEG/3.jpg"
                }
                alt={"Ballyhoo"}
              />
              <span className={classes.CategoryHeader}>Restaurant</span>
            </div>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}
