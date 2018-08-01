import React from "react";
import ContentLoader from "react-content-loader";

const DiscoverLoader = props => (
  <ContentLoader
    height={200}
    width={1000}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="0" rx="4" ry="4" width="100" height="13" />
    <rect x="30" y="25" rx="5" ry="5" width="230" height="160" />
    <rect x="270" y="25" rx="5" ry="5" width="230" height="160" />
    <rect x="510" y="25" rx="5" ry="5" width="230" height="160" />
    <rect x="750" y="25" rx="5" ry="5" width="230" height="160" />
  </ContentLoader>
);

export default DiscoverLoader;
