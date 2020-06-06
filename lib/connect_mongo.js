"use strict";

var mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

var nconf = require('nconf');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log(err);
});

db.once('open', function () {
    console.log("Connected to MongoDB");
});

var database = nconf.get('mongodb:database');
var ip = nconf.get('mongodb:ip');

mongoose.connect(`mongodb://${ip}/${database}:27017`, { useNewUrlParser: true, useUnifiedTopology: true });