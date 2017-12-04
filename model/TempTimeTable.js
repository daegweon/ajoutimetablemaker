var cnt=0;
class TempTimeTable{
	makeRandom(ScheduledClassList){
		//need special process
	//	this.ResultClassList = ~~;
	//	this.Table_id = ~~;
		this.ResultClassList = SceduledClassList;
		this.Table_id = cnt++;
	}
	getTimeTable(){
		return ResultClassList;

	}
	changeClass(DeleteClass, ReplaceClass){
	
		var len = ResultClassList.length;
		for(var i= 0; i<len;i++)
		{
			if(ResultClassList[i].className == DeleteClass.className)
				delete ResultClassList[i];
		}
		ResultClassList.push(ReplaceClass);

	}
	confirmTimeTable(Table_id, user_id){
		return ResultClassList;
	}
	destroy(){
	}
}
module.exports=TempTimeTable;	
