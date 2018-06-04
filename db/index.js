let mongoose = require('mongoose');
let config = require('../config.js');

//const url = config.data.mongoUrl;
const url = 'mongodb://localhost/keyvalue';
mongoose.connect(url);

let db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

let dictionarySchema = mongoose.Schema({
  term: String,
  definition: String,
  tags: String
});

let Dictionary = mongoose.model('Dictionary', dictionarySchema);

let selectAll = function (cb) {
  Dictionary.find({}, function (err, results) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.DictionaryModel = Dictionary;