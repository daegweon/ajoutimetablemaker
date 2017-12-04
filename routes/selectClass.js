/**
 * Created by KimHeeYeon on 2017. 11. 30..
 */
var express = require('express');
var router = express.Router();
var system = require('../model/System');

router.get('/', function(req, res, next) {
    // console.log(req.body.create_mode);
    // res.render('selectClass',{create_mode:req.body.create_mode}
    console.log(3);
    res.render('selectClass');
});

router.post('/', function (req, res, next) {
    console.log('receive post');

    var mode=req.body.create_mode;
    console.log(mode);

    if(mode == 'recommend') {
        // res.render('selectClass',{create_mode:req.body.create_mode});
        console.log(2);
        //system.selectCreateMode('recommend');
        res.render('selectClass');
        //var tmp =JSON.parse(system.get~~());
        //var len = tmp.length;

    }

    // res.redirect('select',{create_mode:mode});
    //res.render('selectClass');
    //next();
});

router.post('/area', function(req,res,next){
    console.log('cateogry');

    var Category_Type = req.body.Category_Type;
    console.log(Category_Type);
    //system.selectArea(Category_Type);

})


module.exports = router;