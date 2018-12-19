const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

// cors({credentials: true, origin: true})

// Enable All Cors
app.use(cors());

app.options("*", cors());

app.use(express.static(path.join(__dirname, "build")));

app.get("/web", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/web/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000);
