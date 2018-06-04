const mongoose = require('mongoose');
const db = require('./index.js');
const Dictionary = require('./index.js');
const data = require('../data.json');

const seedData = function () {
    console.log(data);
    Dictionary.DictionaryModel.create(data)
        .then(() => {
            mongoose.disconnect();
        });
};

seedData();