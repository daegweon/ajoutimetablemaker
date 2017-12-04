var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
		className: String,
		credit: Number,
		category_Type: String,
		detailed_Type: String,
		professor: String,
		LectureTime:Array,
		Count:Number
	});

module.exports = mongoose.model('class', classSchema);
