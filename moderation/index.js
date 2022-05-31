const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const { default: axios } = require("axios");
const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {});

app.listen(4003, () => {
  console.log("Listening port 4003: events..");
});
