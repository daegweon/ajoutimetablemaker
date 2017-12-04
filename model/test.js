var Class =require('./Class.js');
var ArrayList = require('ArrayList');
var c = new Class();
c.className = '1';
var arr = new ArrayList();
var arr2 ='123';
if(arr2 == '123')
	console.log('123123123');
arr.add(c);

console.log(arr.get(0).className);

