var RecommendSDAStrategy = require('./RecommendSDAStrategy.js');
var RecommendCTTStrategy = require('./RecommendCTTStrategy.js');
class makeTimetableStrategyFactory{

	static getRecommendSDAStrategy(dbadapter){
		
		return new RecommendSDAStrategy(dbadapter);
	}
	static getRecommendCTTStrategy(table){
		return new RecommendCTTStrategy(table);
	}
}

module.exports= makeTimetableStrategyFactory;
