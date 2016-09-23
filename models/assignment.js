var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('in assignment.js model');

var assignmentSchema = new Schema({
	number: Number,
	name: String,
	score: Number,
	completed: {type: Date, default: Date.now}
});

var Assignment = mongoose.model('assignments', assignmentSchema);

module.exports = Assignment;
