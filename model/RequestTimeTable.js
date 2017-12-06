var makeTimetableStrategyFactory = require('./makeTimetableStrategyFactory.js');
var TableCreator = require("./TableCreator.js");
var DBFactory = require("./DBFactory.js");
//var makeTimetableStrategyFactory = require("./makeTimetableStrategyFactory.js");
class RequestTimetable{
	constructor(){
		this.selectedList = new Array();
	}
	create(){
		this.tableCreator = new TableCreator();	
		this.mongoDBAdapter = new DBFactory().getMongoDBAdapter();
		console.log(this.mongoDBAdapter);
	}
	setCreateMode(Create_Mode){
		this.createmode = Create_Mode;
		//console.log(Create_Mode);
		//console.log('111');
		this.sda = makeTimetableStrategyFactory.getRecommendSDAStrategy(this.mongoDBAdapter);
		this.ctt = makeTimetableStrategyFactory.getRecommendCTTStrategy(this.tableCreator);
		this.tableCreator.makeEmptyTimeTable(this.mongoDBAdapter);
	}
	requestDetailCategoryList(Category_Type){
		var DetailCategoryList = new Array();
      return this.mongoDBAdapter.requestDetailCategoryList(Category_Type).then(function(tmp ){

	console.log("req"+tmp);
      var len = tmp.length;
      for(var i=0;i<len;i++)
      {
         var cnt=0;
         var len2 = DetailCategoryList.length;
         for(var j=0;j<len2;j++)
            if(tmp[i].detailed_Type == DetailCategoryList[j])
               cnt++;
       
         if(cnt == 0)
		  {
			  DetailCategoryList.push(tmp[i].detailed_Type);
			  console.log("cmp"+typeof DetailCategoryList[0]);
			  console.log("cmp"+typeof tmp[i].detailed_Type);
		  }
		}
      return DetailCategoryList;
	  });
      // special process;
   }
   requestClassList(Detailed_Type){
      return this.sda.requestClassList(Detailed_Type).then(function(classNameList){
		  console.log("req"+classNameList.length);
	  	return classNameList;
	  });
   }
   selectClass(ClassNameList){
      var len = ClassNameList.length;
      for(var i=0; i< len;i++)
         {
            this.mongoDBAdapter.selectClass(ClassNameList[i]).then(function(data){
				for(var j=0;j<data.length;j++)
					this.selectedList.push(data[j]);
			});
         }

   }

   endSelection(){
      var selectedClassNameList = new Array();
      //special process
	  for(var i=0;i<selectedList.length;i++)
	   {
		   var len = selectedClassNameList.length;
		   var cnt=0;
		   for(var j=0;j<len;j++)
		   {
			   if(selectedClassNameList[j] == selectedList[i].className)
				   cnt++;
		   }
		   if(cnt==0)
			   selectedClassNameList.push(selectedList[i]);
	   }
      return JSON.stringify(selectedClassNameList);
   }

   setClass(EssentialList, set_user_credit){
      this.EssentialList = EssentialList;
      this.set_user_credit = set_user_credit;
   }
   getTempTimeTable(){
      return this.tableCreator.makeTimeTable(this.selectedList, this.EssentialList, this.set_user_credit);
   }
   selectTimeTable(Table_id){
      return this.tableCreator.selectTimeTable(Table_id);
   }
   changeClass(DeleteClass, ReplaceClass, Table_id){
      this.tableCreator.changeClass(DeleteClass, ReplaceClass, Table_id);
   }
   confirmTimeTable(Table_id, Table_name, user_id){
      this.ctt.confirmTimeTable(Table_id, Table_name, user_id);
   }
   destroy(){
      this.sda = null;
      this.ctt = null;
      this.tableCreator.destroy();
      this.tableCreator = null;
      this.mongoDBAdapter=null;
   }
}


module.exports = RequestTimetable;
