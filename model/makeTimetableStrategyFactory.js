var RecommendSDAStrategy = require('./RecommendSDAStrategy.js');
//var recommendCTTStrategy = require('./RecommendCTTStrategy.js');
class makeTimetableStrategyFactory{
	static getRecommendSDAStrategy(){
		if(this.rsda ==null)
			this.rsda = new RecommendSDAStrategy();
		return this.rsda;
	}
//	static getRecommendCTTStrategy(){
//		if(this.rctt ==null)
//			this.rctt = new RecommendCTTStrategy();
//		return this.rctt;
//	}
}
module.exports = makeTimetableStrategyFactory;
