var RequestTimeTable = require('./RequestTimeTable.js');
var DBHandler = require('./DBHandler.js');
var a =1;
class System{
	constructor(){
		this.cnt = 1;
		this.DBhand = new DBHandler();
	}
	CreateTimeTable(){
		this.requestTimetable = new RequestTimeTable();
		requestTimetable.create();
	}
	selectCreateMode(Create_Mode){
		this.requestTimetable.setCreateMode(Create_Mode);
	}
	selectArea(Category_Type){
		//DBHandler.request~~;
		var c = a+this.cnt;
		a++;
		this.cnt++;
		this.DBhand.createClass();
		return c;
	}
	selectDetailArea(Detailed_Type){
		//DBHandler.reques~;
	}
	selectClass(ClassNameList){
		// need special process
		var ClassList = new ArrayList;
		var length = ClassNameList.length;
		for(var i=0; i<length; i++)
		{
			//var tmp =DBHandler.searchClass(~~);
			//for(var j=0;j<tmp.length;j++)
				//ClassList.add(tmp.get(j));
		}
		this.requestTimetable.selectClass(ClassList);	
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
