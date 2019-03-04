import React from "react";
import { Grid } from "semantic-ui-react/dist/commonjs";
import classes from "./static/css/cardLoader.css";

const CardLoader = props => (
  <Grid
    doubling
    stackable
    columns={4}
    style={{
      marginLeft: "80px",
      marginTop: "20px",
      paddingBottom: "50px"
    }}
  >
    <Grid.Row>
      <div className={classes.DummyProductCardWrapper}>
        <div className={classes.ProductImageWrapper} />
        <div className={classes.ProductContentWrapper}>
          <div className={classes.ProductTitle} />
          <div className={classes.ProductDetail} />
        </div>
      </div>

      <div className={classes.DummyProductCardWrapper}>
        <div className={classes.ProductImageWrapper} />
        <div className={classes.ProductContentWrapper}>
          <div className={classes.ProductTitle} />
          <div className={classes.ProductDetail} />
        </div>
      </div>

      <div className={classes.DummyProductCardWrapper}>
        <div className={classes.ProductImageWrapper} />
        <div className={classes.ProductContentWrapper}>
          <div className={classes.ProductTitle} />
          <div className={classes.ProductDetail} />
        </div>
      </div>
    </Grid.Row>
  </Grid>
);

export default CardLoader;
