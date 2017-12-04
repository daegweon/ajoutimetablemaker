var TempTimeTable = require("./TempTimeTable.js");
var ResultTimeTable = require("./ResultTimeTable.js");
class TableCreator{
	makeEmptyTimeTable(){
		this.tempTimeTableList = new Array();
		this.resultTimeTable = new ResultTimeTable();
	}
	makeTimeTable(SelectedList, EssentialList, set_user_credit){
		var classList = new Array();
		// need special process
		
		var temptimeTable = new TempTimeTable();
		temptimeTable.makeRandom(ScehduledClassList);
		tempTimeTableList.push(temptimeTable);
	}
	selectTimeTable(Table_id){
		for(var i=0; i< tempTimeTableList.length;i++)
		{
			if(tempTimeTableList[i].table_id ==Table_id)
			{
				
				var obj = this.tempTimeTableList[i].getTimeTable();
				return obj;
			}
		}
	
	}
	changeClass(DeleteClass, ReplaceClass, Table_id){
	
		for(var i=0; i< tempTimeTableList.length; i++)
		{
			if(tempTimeTableList[i].Table_id == Table_id)
			{
				tempTimeTableList[i].changeClass(DeleteClass, ReplaceClass);
				return;
			}
		}
	}

	confirmTimeTable(Table_id, Table_name, user_id){
		for(var i=0;i<tempTimeTableList.length;i++)
		{
			if(tempTimeTableList[i].Table_id == Table_id){
			
				var resultClassList= this.tempTimeTableList.confirmTimeTable(Table_id, user_id);
				this.resultTimeTable.saveResultTable(resultClassList, user_id, Table_name);
				return ;
			}
		}
	}
	destroy(){
	
	}
}
module.exports=TableCreator;
