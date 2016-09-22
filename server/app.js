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

app.get('/testUser', function(req, res) {

  var justin = new User({
    name: 'Justin',
    username: 'testJustin',
    admin: true
  });

  justin.save(function(err) {
    if(err){
      //failed
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log('Justin saved successfully!');
      res.sendStatus(201);
    }
  });
});

var server = app.listen('3030', function(){
	var port = server.address().port;
	console.log('Im listenting on port', port);
});
