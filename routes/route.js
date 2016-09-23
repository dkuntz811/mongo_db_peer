var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Assignment = require('../models/assignment');

router.get('/all/:id?', function (req, res) {
  console.log(req.params);
  if(req.params.id !== undefined){
    console.log('in if req.params');
    var findId = req.params.id;
    Assignment.find({_id: findId}, function (err, assignmentResults) {
      res.send(assignmentResults);
      console.log(assignmentResults);
    });
  }else{
    console.log('in else');
    Assignment.find({}, function (err, assignmentResults) {
      if(err){
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(assignmentResults);
      }

    });
  }
});

router.post ('/addAssignment', function (req, res){
  console.log('in addAssignment');
	var sendData = req.body;
  console.log(req.body);
  var newAssignment = new Assignment({
    number: sendData.number,
    name: sendData.name,
    score: sendData.score
  });

  	newAssignment.save(function(err){
  		if(err){
  			console.log('error occured:', err);
  			res.sendStatus(500);
  		}else{
  			console.log('assignment saved successfully!');
  			res.sendStatus(201);
  		}
  	});//end save function
  });//end test get



module.exports = router;
