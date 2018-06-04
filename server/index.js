const express = require('express');
const bodyParser = require('body-parser');
const terms = require('../db');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.get('/terms', function (req, res) {
  terms.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function () {
  console.log("Server started.");
});