var TableCreator = require("./TableCreator.js");
var DBFactory = require("./DBFactory.js");
var makeTimetableStrategyFactory = require("./makeTimetableStrategyFactory.js");
class RequestTimetable{
	constructor(){
		this.selectedList = new ArrayList;
	}
	create(){
		this.tableCreator = new TableCreator();	
		this.mongoDBAdapter = DBFactory.getMongoDBAdapter();
	}
	setCreateMode(Create_Mode){
		this.createmode = Create_Mode;
		this.sda = makeTimetableStrategyFactory.getRecommendSDAStrategy();
		//this.ctt = makeTimetableStrategyFactory.getRecommendCTTStrategy();
		this.tableCreator.makeEmptyTimeTable();
	}
	requestDetailCategoyList(Category_Type){
		var DetailCategoryList = new ArrayList;
		var tmp =this.mongoDBAdapter.requestDetailCategoryList(Category_Type);
		// special process;
		return DetailCategoryList;
	}
	requestClassList(Detailed_Type){
	
		return this.sda.requestClassList(Detailed_Type);
	}
	selectClass(ClassNameList){
		//special process
//		this.selectedList.push(~~);
	}

	endSelection(){
		var selectedClassNameList = new ArrayList;
		//special process
		return selectedClassNameList;
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
