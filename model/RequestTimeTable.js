var TableCreator = require("./TableCreator.js");
class RequestTimetable{
	constructor(){
		this.selectedList = new ArrayList;
	}
	create(){
		this.tableCreator = new TableCreator();	
	}
	setCreateMode(Create_Mode){
		this.createmode = Create_Mode;
		tableCreator.makeEmptyTimeTable();
	}

	selectClass(ClassNameList){
		var len = ClassNameList.length;
		for(var i=0; i< len; i++){
			this.selectedList.add(ClassNameList.get(i));
		}
	}

	endSelection(){
		return this.selectedList.clone();
	}

	setClass(EssentialList, set_user_credit){
		this.EssentialList = EssentialList;
		this.set_user_credit = set_user_credit;
	}
	getTempTimeTable(){
		return this.tableCreator.makeTimeTable(this.selectedList, this.EssentialList, this.set_user_credit);	
	}
	selectTimeTable(Table_id){
	
	}
	changeClass(DeleteClass, ReplaceClass, Table_id){
	
	}
	confirmTimeTable(Table_id, user_id){
	
	}
	destroy(){
	
	}

	
}

module.exports = RequestTimetable;
