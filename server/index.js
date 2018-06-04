const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search/:query', function (req, res) {
  console.log(req.params.query);
  let query = req.params.query;
  console.log('QUERY',query);

  db.selectAll(function (err, data) {
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