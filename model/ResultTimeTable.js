var DBFactory = require('./DBFactory.js');
class ResultTimeTable{
	constructor(mongoDBAdapter){
		this.mongoDBAdapter = mongoDBAdapter;
	}
	saveResultTable(resultClassList, user_id, table_name){
		this.resultClassList = resultClassList;
		this.user_id = user_id;
		this.table_name =table_name;
		this.mongoDBAdapter.saveResultTable(resultClassList, user_id, table_name);
	}
}
module.exports = ResultTimeTable;

