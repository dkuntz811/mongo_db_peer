var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

//model
var assignment = require('../models/assignment');

mongoose.connect('mongodb://localhost:27017/assignments');

var server = app.listen('3030', function(){
	var port = server.address().port;
	console.log('Im listenting on port', port);
});
