import React from "react";
import ContentLoader from "react-content-loader";

const MapLoader = props => (
  <ContentLoader
    height={300}
    width={1000}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    primaryOpacity={1}
    {...props}
  >
    <rect x="30" y="0" rx="4" ry="4" width="100" height="13" />
    <rect x="30" y="18" rx="5" ry="5" width="400" height="8" />
    <rect x="30" y="38" rx="6" ry="6" width="900" height="200" />
  </ContentLoader>
);

export default MapLoader;
