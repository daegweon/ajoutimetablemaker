var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tableSchema = new Schema({
	ResultClassList : Array,
	User_id : Number,
	Table_name :String
	});
module.exports = mongoose.model('timetable', tableSchema);
