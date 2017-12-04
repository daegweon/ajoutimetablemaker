var Class = require('./Class.js');
class DBHandler{

	createClass(){
	
		var cl = new Class();
		cl.professor = 'pyeon';
		cl.save(function(err){
		if(err){
            return;
        }
		});
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
