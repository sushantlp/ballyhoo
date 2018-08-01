import React from "react";
import ContentLoader from "react-content-loader";

import { Grid } from "semantic-ui-react/dist/commonjs";

import classes from "./static/css/facebookLoader.css";

const FacebookLoader = props => (
  <div>
    <ContentLoader
      height={100}
      width={1000}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      primaryOpacity={1}
      {...props}
    >
      <rect x="30" y="0" rx="4" ry="4" width="100" height="13" />
    </ContentLoader>

    <Grid
      doubling
      stackable
      columns={4}
      style={{
        marginLeft: "30px",
        marginTop: "-130px",
        paddingBottom: "100px"
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

        <div className={classes.DummyProductCardWrapper}>
          <div className={classes.ProductImageWrapper} />
          <div className={classes.ProductContentWrapper}>
            <div className={classes.ProductTitle} />
            <div className={classes.ProductDetail} />
          </div>
        </div>
      </Grid.Row>
    </Grid>
  </div>
);

export default FacebookLoader;
