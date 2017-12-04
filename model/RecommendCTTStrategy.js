var TableCreator = require('./TableCreator.js');

class RecommendCTTStrategy{
	constructor(tableCreator){
		this.tableCreator = tableCreator;
	}

	confirmTimeTable(Table_id, Table_name, user_id){
		this.tableCreator.confirmTimeTable(Table_id, Table_name, user_id);
	}
}
module.exports = RecommendCTTStrategy;
