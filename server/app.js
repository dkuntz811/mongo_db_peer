var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

//model
var Assignment = require('../models/assignment');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

app.get ('/testAssignment', function (req, res){

	var assignment = new Assignment({
		number: 1,
		name: George,
		score: 80,
		completed: ''
	});

	assignment.save(function(err){
		if(err){
			console.log('error occured:', err);
			res.sendStatus(500);
		}else{
			console.log('assignment saved successfully!');
			res.sendStatus(201);
		}
	});//end save function
});//end test get

var server = app.listen('3030', function(){
	var port = server.address().port;
	console.log('Im listenting on port', port);
});
