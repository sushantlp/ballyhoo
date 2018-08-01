import React from "react";
import ContentLoader from "react-content-loader";

const CategoryLoader = props => (
  <ContentLoader
    height={300}
    width={1000}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="0" rx="4" ry="4" width="100" height="13" />
    <rect x="30" y="25" rx="5" ry="5" width="290" height="200" />
    <rect x="350" y="25" rx="5" ry="5" width="290" height="200" />
    <rect x="670" y="25" rx="5" ry="5" width="290" height="200" />
  </ContentLoader>
);

export default CategoryLoader;
