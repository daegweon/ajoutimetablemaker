var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/', function(req, res, next) {

});

router.post('/', function (req, res, next) {
    var id=req.body.id;
    res.render('mainpage',{id:id});
});

module.exports = router;
