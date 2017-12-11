var express = require('express');
var router = express.Router();
//<<<<<<< HEAD
var ATM = require('../model/ATM.js')
/* GET home page. */
var system;
//=======
/* GET home page. */


//>>>>>>> origin/HeeYeon
router.get('/', function(req, res, next) {
	res.render('mainpage',{incomeCount:1});
});

router.post('/', function (req, res, next) {
    var id=req.body.id;
//<<<<<<< HEAD
//	system = new ATM();
//	var a=system.CreateClassDB();
	//console.log(a);
	res.render('mainpage',{id:id});
//=======
//    res.render('mainpage',{id:id});
//>>>>>>> origin/HeeYeon
});

module.exports = router;
