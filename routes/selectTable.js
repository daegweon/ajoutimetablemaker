/**
 * Created by KimHeeYeon on 2017. 12. 05..
 */
var express = require('express');
var router = express.Router();
var ATM = require('../model/ATM');

router.get('/', function(req, res, next) {
    // console.log(req.body.create_mode);
    // res.render('selectClass',{create_mode:req.body.create_mode}
    console.log('getTable');
    res.render('selectTable');
});

router.post('/', function (req, res, next) {
    console.log('in table');

    //var mode=req.body.create_mode;
    //console.log(mode);

    res.render('selectTable');

    // res.redirect('select',{create_mode:mode});
    //res.render('selectClass');
    //next();
});



module.exports = router;
