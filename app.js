const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys.js").mongoURI;

const items = require('./routes/api/Items.js');


const app = new express();
//bodyparser middleware
app.use(bodyParser.json());

//db connection
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(() => console.log(err));


  //use Routes
  app.use('/api/items.js',items)

//may deploy to heroku
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port ${port}"));

app.get("/", function (req, res) {
  res.send("hi index ");
});
