var System = require("./System.js")

class RequestTimetable{
	constructor(){
		this.selectedList = new ArrayList();
		this.EssentialList = new ArrayList();
	}
	create(system){

	}
	setCreateMode(Create_Mode){
		this.createmode = Create_Mode;
	}

	selectClass(ClassNameList){
		
	}

	endSelection(){
	
	}

	setClass(EssentialList, set_user_credit){
		this.set_user_credit = set_user_credit;
	}
	getTempTimeTable(){
	
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
