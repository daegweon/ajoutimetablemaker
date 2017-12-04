var TempTimeTable = require("./TempTimeTable.js");
var ResultTimeTable = require("./ResultTimeTable.js");
class TableCreator{
	makeEmptyTimeTable(){
		this.tempTimeTableList = new ArrayList;
		this.resultTimeTable = new ResultTimeTable();
	}
	makeTimeTable(SelectedList, EssentialList, set_user_credit){
		var classList = ArrayList;
		// need special process

		var temptimeTable = new TempTimeTable();
		temptimeTable.makeRandom(classList);
		tempTimeTableList.add(temptimeTable);
	}
	selectTimeTable(Table_id){
	
	}
	changeClass(DeleteClass, ReplaceClass, Table_id){
	
	}

	confirmTimeTable(Table_id, Table_name, user_id){
	
	}
	destroy(){
	
	}
}
module.exports=TableCreator;
