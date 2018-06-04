var mongoose = require('mongoose');
var config = require('../config.js');

//const url = config.data.mongoUrl;
const url = 'mongodb://localhost/keyvalue';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var dictionarySchema = mongoose.Schema({
  term: String,
  definition: String,
  tags: String
});

var Dictionary = mongoose.model('Dictionary', dictionarySchema);

var selectAll = function (cb) {
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