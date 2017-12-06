var RequestTimeTable = require('./RequestTimeTable.js');
var DBFactory = require('./DBFactory.js');
class ATM{
	constructor(){
	}
	CreateClassDB(){
		new DBFactory().getMongoDBAdapter().createClass();
	}
	CreateTimeTable(){
		this.requestTimetable = new RequestTimeTable();
		this.requestTimetable.create();
	}
	selectCreateMode(Create_Mode){
		this.requestTimetable.setCreateMode(Create_Mode);
	}
	selectArea(Category_Type){
		return this.requestTimetable.requestDetailCategoryList(Category_Type).then(function(data){
			return data;
		});
	}
	selectDetailArea(Detailed_Type){
		return this.requestTimetable.requestClassList(Detailed_Type).then(function(data){
			console.log(typeof data);
			return data;
		});
	}
	selectClass(ClassNameList){
		this.requestTimetable.selectClass(JSON.parse(ClassNameList));
	}
	endSelection(){
		return this.requestTimetable.endSelection();
	}
	setClass(EssentialList,set_user_credit){
		console.log(EssentialList);
		this.requestTimetable.setClass(EssentialList, set_user_credit);
	}
	getTempTimeTable(){
		console.log('atmgetTemp');
		return this.requestTimetable.getTempTimeTable();
	}
	selectTimeTable(Table_id){
		return this.requestTimetable.selectTimeTable(Table_id);
	}
	changeClass(DeleteClass, ReplaceClass, Table_id){
		this.requestTimetable.changeClass(DeleteClass, ReplaceClass, Table_id);
	}
	confirmTimeTable(Table_id, user_id){
		this.requestTimetable.confirmTimeTable(Table_id, user_id); 
	}
	end(){
		this.requestTimetable.destroy();
		this.requestTimetable = null;
	}
	
}
module.exports=ATM;
