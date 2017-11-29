var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/test', function (req, res) {
    res.json({test: 'hello'});
});

module.exports = router;
