const express = require("express");
const path = require("path");
const app = express();

// // REACT (for SEO)
// const React = require("react");
// const ReactDOMServer = require("react-dom/server");

// // This is our React component
// // NOTE : we require the app.js file NOT the main.js
// const Comp = React.createFactory(require("./public/index"));

// // HTML REACT OUTPUT
// const seo = ReactDOMServer.renderToString(Comp());

app.use(express.static(path.join(__dirname, "build")));

app.get("/web", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/web/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000);
