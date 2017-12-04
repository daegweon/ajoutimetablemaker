var Class = require('./Class.js');
var fs = require('fs');
var RTT = require('./ResultTimeTable.js');
var path = require('path');
var filepath = path.join(__dirname,'major.txt');

class MongoDBAdapter{

		createClass(){
	
		/*var data=fs.readFileSync(filepath, 'utf8');
		//console.log(data);
		var starr = data.split('\n');
		console.log(starr.length);
		var cnt=1;
		var ccc=null;
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
			cl.save(function(err){
				console.log(err);
			});
			console.log(i);
			
		}*/
			Class.find(function(err,classes){
				//console.log(classes);
				console.log(classes[0].className);
				var a =JSON.stringify(classes);
				var b = JSON.parse(a);
				console.log(b[0].className);
				console.log(a[0]);
			})
	}

	saveResultTable(resultClassList, user_id, table_name){
		var rtt = new RTT();
		rtt.resultClassList =resultClassList;
		rtt.user_id = user_idl
		rtt.table_name = table_name;
		rtt.sabe();
	}
	selectClass(className){
		var classList = null;
		Class.find({ className : className}, function(err, classes){
			classList = classes;
		})
		var i=0;
		while(i<30000000){
			i++;
		}
		return classList;
		
	}
	requestDetailCategoryList(Category_Type){
	
		var detailList = null;
		Class.find({category_Type : Category_Type}, function(err,classes){
		detailList= classes;
		});
		var i=0;
		while(i<30000000){
			i++;
		}
		return detailList;


	}
	requestClassList(Detailed_Type){
		var a=null;
		Class.find({detailed_Type : Detailed_Type}, function(err, classes){
			a = classes;
		});
		var i=0;
		while(i<30000000){
			i++;
		}
		return a;

	}
}
module.exports = MongoDBAdapter;
