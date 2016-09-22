var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('in assignment.js model');

var assignmentSchema = new Schema({
	number: Number,
	name: String,
	score: Number,
	completed: Date
});

var Assignment = mongoose.model('assignments', assignmentSchema);

module.exports = Assignment;
