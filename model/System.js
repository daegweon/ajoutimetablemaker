var RequestTimeTable = require('./RequestTimeTable.js');
var DBHandler = require('./DBHandler.js');
class System{
	CreateTimeTable(){
		this.requestTimetable = new RequestTimeTable();
		requestTimetable.create();
	}
	selectCreateMode(Create_Mode){
		this.requestTimetable.setCreateMode(Create_Mode);
	}
	selectArea(Category_Type){
		DBHandler.request~~;
	}
	selectDetailArea(Detailed_Type){
		DBHandler.reques~;
	}
	selectClass(ClassNameList){
		// need special process
		//this.requestTimetable.selectClass(ClassNameList);	
	}
	endSelection(){
		return this.requestTimetable.endSelection();
	}
	setClass(EssentialList,set_user_credit){
		this.requestTimetable.setClass(EssentialList, set_user_credit);
	}
	getTempTimeTable(){
		this.requestTimetable.getTempTimeTable();
	}
	selectTimeTable(Table_id){
		this.requestTimetable.selectTimeTable(Table_id);
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
module.exports=System;
