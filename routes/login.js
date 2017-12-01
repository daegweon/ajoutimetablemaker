var express = require('express');
var router = express.Router();
var System = require('../model/System.js')
/* GET home page. */
var system;
router.get('/', function(req, res, next) {

});

router.post('/', function (req, res, next) {
    //var id=req.body.id;
	system = new System();
	var id =req.body.id;
	res.render('mainpage',{id:id});
});

module.exports = router;
