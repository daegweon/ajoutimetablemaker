var MongoDBAdapter = require('./MongoDBAdapter.js');
let instance = null;
class DBFactory{
	constructor(){
		if(!instance){
			instance = this;
		}
	}
     getMongoDBAdapter(){
		//if(this.mongoDBAdapter == null){
			//this.mongoDBAdapter = new MongoDBAdapter();
		//}
		return new MongoDBAdapter();

	}
}
module.exports= DBFactory;
