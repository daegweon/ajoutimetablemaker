/**
 * Created by KimHeeYeon on 2017. 11. 30..
 */
var express = require('express');
var router = express.Router();
var sysem = require('../model/System');

router.get('/', function(req, res, next) {
    // console.log(req.body.create_mode);
    // res.render('selectClass',{create_mode:req.body.create_mode}
    res.render('selectClass');
});

router.post('/', function (req, res, next) {
    console.log('receive post');
    var mode=req.body.create_mode;
    console.log(mode);

    if(mode == 'recommend') {
        // res.render('selectClass',{create_mode:req.body.create_mode});
        res.render('selectClass');
        system.selectCreateMode('recommend');
    }



    // res.redirect('select',{create_mode:mode});
    //res.render('selectClass');
    //next();
});


module.exports = router;