const express = require("express");
const app = new express();

app.get("/", function (req, res) {
  res.send("hi index ");
});
app.listen(3000, (err) => {
    console.log('app started');
  });
