var MongoDBAdapter = require('./MongoDBAdapter.js');
class DBFactory{
     static getMongoDBAdapter(){
		//if(this.mongoDBAdapter == null){
			//this.mongoDBAdapter = new MongoDBAdapter();
		//}
		return new MongoDBAdapter();

	}
}
module.exports= DBFactory;
