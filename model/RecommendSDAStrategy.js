var DBFactory = require('./DBFactory');
var MongoDBAdapter = require('./MongoDBAdapter.js');

class RecommendSDAStrategy{
	constructor(mongoDBAdapter)
	{
		this.mongoDBAdapter = mongoDBAdapter;
	}
   requestClassList(Detailed_Type){
      var classNameList = new Array();
      return this.mongoDBAdapter.requestClassList(Detailed_Type).then(function(tmpList){
	  
      var len = tmpList.length;
	console.log("sda"+tmpList.length);
      for(var i=0;i<len;i++)
      {
         var cnt=0;
         var len2 = classNameList.length;
         for(var j=0;j<len2;j++)
            if(tmpList[i].className == classNameList[j])
               cnt++;
            //else
              // break;
         if(cnt==0)
            classNameList.push(tmpList[i].className)   
      }
		 console.log("sda"+classNameList.length);
      return classNameList;
   	});
   }
	  
      //special process
}
module.exports = RecommendSDAStrategy;
