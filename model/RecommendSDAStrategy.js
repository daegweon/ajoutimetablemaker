var DBFactory = require('./DBFactory');
class RecommendSDAStrategy{
	requestClassList(Detailed_Type){
		this.mongoDBAdapter = DBFacory.getMongoDBAdapter();
		var classNameList = new ArrayList;
		var tmpList = mongoDBAdapter.requestClassList(Detailed_Type);
		//special process
		
		
		return classNameList;
	}
}
