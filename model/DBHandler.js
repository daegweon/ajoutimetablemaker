var Class = require('./Class.js');
var fs = require('fs');
var path = require('path');
var filepath = path.join(__dirname,'major.txt');
class DBHandler{

	createClass(){
	
		var data=fs.readFileSync(filepath, 'utf8');
		//console.log(data);
		var starr = data.split('\n');
		console.log(starr.length);
		for(var i =1; i <starr.length;i++)
		{
			var cl = new Class();
			var ds = starr[i].split(' ');
			cl.className = ds[0];
			cl.classCode = ds[1];
			cl.category_Type = ds[2];
			cl.detailed_Type = starr[0];
			cl.professor = ds[5];
			cl.credit = ds[3];
			for(var j=0; j< parseInt(ds[6]);j++)
			{
				cl.LectureTime.push(ds[7+j]);
			}
			var a =parseInt(ds[6]);
			a = a+ 7;
			cl.LectureRoom=ds[a];
			cl.Count=0;
			cl.save();
		}
		Class.find(function(err,classes)
		{
			console.log(classes);
		});
	}
	saveResultTable(resultClassList, user_id, table_name){
	}
	requestDetailCategoryList(Category_Type){
	}
	requestClassList(Detailed_Type){
	}
}
module.exports = DBHandler;
