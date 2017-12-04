var DBFactory = require('./DBFactory');
class RecommendSDAStrategy{
   requestClassList(Detailed_Type){
      this.mongoDBAdapter = DBFacory.getMongoDBAdapter();
      var classNameList = new Array();
      var tmpList = mongoDBAdapter.requestClassList(Detailed_Type);
      //special process
      var len = tmpList.length;
      for(var i=0;i<len;i++)
      {
         var cnt=0;
         var len2 = ClassList.length;
         for(var j=0;j<len2;j++)
            if(tmp[i].className == ClassList[j])
               cnt++;
            else
               break;
         if(cnt==0)
            ClassList.push(tmp[i].className)   
      }
      return JSON.stringify(ClassList);
   }
}
