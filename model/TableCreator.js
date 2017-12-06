var TempTimeTable = require("./TempTimeTable.js");
var ResultTimeTable = require("./ResultTimeTable.js");
var flag = false;
function iscross(class1, class2){

	if(class1.className == class2.className) return true;
	var cnt=0;
	var len = class1.LectureTime;
	var len2 = class2.LectureTime;

	for(var i=0; i< len; i++){
		var day1 = class1.LectureTime[i].subString(0,2);
		for(var j=0; j< len2; j++){
			var day2 = class2.LectureTime[j].subString(0,2);
			if(day1 == day2){
				var time = class1.LectureTime[i].subString(3,3);
				var time2 = class2.LectureTime[i].subString(3,3);
				if(time == '1' && (time2 =='A')) cnt++;
				if(time == '2' && (time2 =='A' || time2 == 'B')) cnt++;
				if(time == '3' && (time2 =='B')) cnt++;
				if(time == '4' && (time2 =='C')) cnt++;
				if(time == '5' && (time2 =='C' || time2 == 'D')) cnt++;
				if(time == '6' && (time2 =='D')) cnt++;
				if(time == '7' && (time2 =='E')) cnt++;
				if(time == '8' && (time2 =='E' || time2 =='F' )) cnt++;
				if(time == '9' && (time2 =='F')) cnt++;
				if(time == '10' && (time2 =='G')) cnt++;
				if(time == '11' && (time2 =='G' || time2 =='H')) cnt++;
				if(time == '12' && (time2 =='H')) cnt++;
				if(time2 == '1' && (time =='A')) cnt++;
				if(time2 == '2' && (time =='A' || time == 'B')) cnt++;
				if(time2 == '3' && (time =='B')) cnt++;
				if(time2== '4' && (time =='C')) cnt++;
				if(time2 == '5' && (time =='C' || time == 'D')) cnt++;
				if(time2 == '6' && (time =='D')) cnt++;
				if(time2 == '7' && (time =='E')) cnt++;
				if(time2 == '8' && (time =='E' || time =='F' )) cnt++;
				if(time2 == '9' && (time =='F')) cnt++;
				if(time2 == '10' && (time =='G')) cnt++;
				if(time2 == '11' && (time =='G' || time =='H')) cnt++;
				if(time2 == '12' && (time =='H')) cnt++;
			}
			else continue;
		}
	}
	return cnt>0?true:false;
}
function req(essenList,start_idx,tmplist){

	var len = essenList.length;
	if(start_idx == len) {
		flag = true;
		return tmplist;
	}
	for(var i= start_idx; i<len;i++)
	{
		var cnt=0;
		for(var j = 0; j< tmplist.length;j++)
			if(iscross(essenList[i], tmplist[j]))
				cnt++;
		if(cnt==0)
		{
			tmplist.push(essenList[i]);
			var tt =req(essenList, i+1, tmplist);
			if(flag == true)
				return tt;
		}
	}
	return tmplist;
	
}
class TableCreator{
	makeEmptyTimeTable(mongoDbAdapter){
		this.tempTimeTableList = new Array();
		this.resultTimeTable = new ResultTimeTable(mongoDbAdapter);
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
	makeTimeTable(SelectedList, EssentialList, set_user_credit){

		console.log('tableCreator'+SelectedList)
		// need special process
		var tmpList = new Array();
		var len = SelectedList.length;
		var len2 = EssentialList.length;
		console.log('len' +len+'len2'+len2);

		for(var i=0;i<len2;i++)
		{
			for(var j=0;j<len;j++)
				if(EssentialList[i] == SelectedList[j].className)
					tmpList.push(SelectedList[j]);
		}
		console.log('make1'+tmpList.length);
		for(var i=0; i< tmpList.length;i++)
		{
			flag = false;
			console.log('make'+'start');
			var classList = req(tmpList,i,new Array());
			console.log('classlist'+classList);
			var credit_sum=0;
			for(var i=0;i<classList.length;i++)
			{
				credit_sum += classList[i].credit;
			}
			if(credit_sum > set_user_credit){
				while(credit_sum > set_user_credit && classList.length >0)
				{
					credit_sum -= classList[0].credit;
					delete classList[0];
				}
			}
			else{
				for(var i=0; i< SelectedList.length; i++){
					var cnt=0;
					for(var j =0; j< classList.length; j++)
					{
						if(iscross(SelectedList[i], classList[j]))
							cnt++;
					}
					if(cnt ==0 && credit_sum+ SelectedList[i].credit <= set_user_credit)
					{
						credit_sum+=SelectedList[i].credit;
						classList.push(SelectedList[i]);
					}
				}
			}
			console.log('make clear'+classList);
			var temptimeTable = new TempTimeTable();
			temptimeTable.makeRandom(classList);
			console.log('make temp');
			this.tempTimeTableList.push(temptimeTable);
			if(this.tempTimeTableList.length >4)break;
		}
		console.log('+++'+this.tempTimeTableList);
		return this.tempTimeTableList;
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
