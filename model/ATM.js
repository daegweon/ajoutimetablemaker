var RequestTimeTable = require('./RequestTimeTable.js');
var DBFactory = require('./DBFactory.js');
class ATM{
	constructor(){
	}
	CreateClassDB(){
		DBFactory.getMongoDBAdapter().createClass();
	}
	CreateTimeTable(){
		this.requestTimetable = new RequestTimeTable();
		this.requestTimetable.create();
	}
	selectCreateMode(Create_Mode){
		this.requestTimetable.setCreateMode(Create_Mode);
	}
	selectArea(Category_Type){
		return this.requestTimetable.requestDetailCategoryList(Category_Type)
	}
	selectDetailArea(Detailed_Type){
		return this.requestTimetable.requestClassList(Detailed_Type);
	}
	selectClass(ClassNameList){
		this.requestTimetable.selectClass(ClassNameList);
	}
	endSelection(){
		return this.requestTimetable.endSelection();
	}
	setClass(EssentialList,set_user_credit){
		this.requestTimetable.setClass(EssentialList, set_user_credit);
	}
	getTempTimeTable(){
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
