var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path=require('path');
var urlencodedParser = bodyParser.urlencoded({extended: true});

var app = express();

app.use(bodyParser.json());

// //model
//var Assignment = require('../models/assignment');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

//routers
var assignmentRouter = require('../routes/route');

app.use('/assignment', assignmentRouter);

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));

});

app.use( express.static ( 'public'));


var server = app.listen('3030', function(){
	var port = server.address().port;
	console.log('Im listenting on port', port);
});
