import React from "react";
import ContentLoader from "react-content-loader";

const BackgroundLoader = props => (
  <ContentLoader
    height={475}
    width={1000}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    primaryOpacity={1}
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="1000" height="400" />
  </ContentLoader>
);

export default BackgroundLoader;
