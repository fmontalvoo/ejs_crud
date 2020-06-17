"use strict";

var mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

var nconf = require('nconf');

var db = mongoose.connection;

db.on('error', function (error) {
    console.log(error);
});

db.once('open', function () {
    console.log("Connected to MongoDB");
});

var database = nconf.get('mongodb:database');
var ip = nconf.get('mongodb:ip');

mongoose.connect(`mongodb://${ip}/${database}:27017`);