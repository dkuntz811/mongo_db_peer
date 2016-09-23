var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path=require('path');
var urlencodedParser = bodyParser.urlencoded({extended: true});

var app = express();

app.use(bodyParser.json());

// //model
//var Assignment = require('../models/assignment');

var mongoURI = "mongodb://localhost:27017/assignments";//location of database like connectionString in postgress
var MongoDB = mongoose.connect(mongoURI).connection;//mongoose connection to mongo

//routers
var assignmentRouter = require('../routes/route');//use this module

app.use('/assignment', assignmentRouter);//for this route, go into assignmentRouter file

MongoDB.on('error', function (err) {//if there is an error connecting to the database, let me know
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {//open connection to mongo
  console.log('mongodb connection open!');
});

app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));

});

app.use( express.static ( 'public'));//this is where public is


var server = app.listen('3030', function(){
	var port = server.address().port;
	console.log('Im listenting on port', port);
});
