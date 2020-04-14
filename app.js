const express = require("express");
const app = new express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

//bodyparser middleware
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hi index ");
});
app.listen(3000, (err) => {
    console.log('app started');
  });
