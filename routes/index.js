var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
    // console.log(req.body);
    var firstname = req.body.firstname;
    console.log(firstname);
    res.json({});
});
module.exports = router;
