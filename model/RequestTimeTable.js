var TableCreator = require("./TableCreator.js");
var DBFactory = require("./DBFactory.js");
var makeTimetableStrategyFactory = require("./makeTimetableStrategyFactory.js");
class RequestTimetable{
	constructor(){
		this.selectedList = new Array();
	}
	create(){
		this.tableCreator = new TableCreator();	
		this.mongoDBAdapter = DBFactory.getMongoDBAdapter();
	}
	setCreateMode(Create_Mode){
		this.createmode = Create_Mode;
		this.sda = makeTimetableStrategyFactory.getRecommendSDAStrategy();
		this.ctt = makeTimetableStrategyFactory.getRecommendCTTStrategy(this.tableCreator);
		this.tableCreator.makeEmptyTimeTable();
	}
	requestDetailCategoryList(Category_Type){
      var DetailCategoryList = new Array();
      var tmp =this.mongoDBAdapter.requestDetailCategoryList(Category_Type);
      // special process;
      var len = tmp.length;
      for(var i=0;i<len;i++)
      {
         var cnt=0;
         var len2 = DetailCategoryList.length;
         for(var j=0;j<len2;j++)
            if(tmp[i].detailed_Type == DetailCategoryList[j])
               cnt++;
            else
               break;
         if(cnt == 0)
            DetailCategoryList.push(tmp[i].detailed_Type);
      }
      return JSON.stringify(DetailCategoryList);
   }
   requestClassList(Detailed_Type){
      return this.sda.requestClassList(Detailed_Type);
   }
   selectClass(ClassNameList){
      var len = ClassNameList.length;
      for(var i=0; i< len;i++)
         {
            var lst =this.mongoDBAdapter.selectClass(classNameList);
            for(var j=0;j<a.length;a++)
            selectedList.push(lst[j]);
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
