var express = require('express');
var router = express.Router();
var ATM = require('../model/ATM.js')
/* GET home page. */
var system;
router.get('/', function(req, res, next) {

});

router.post('/', function (req, res, next) {
    var id=req.body.id;
	system = new ATM();
	var a=system.CreateClassDB();
	console.log(a);
	res.render('mainpage',{id:id});
});

module.exports = router;
