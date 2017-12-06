/**
 * Created by KimHeeYeon on 2017. 11. 30..
 */
var express = require('express');
var router = express.Router();
var ATM = require('../model/ATM');
var atm = new ATM(); 
router.get('/', function(req, res, next) {
    // console.log(req.body.create_mode);
    // res.render('selectClass',{create_mode:req.body.create_mode}
    console.log(3);
    res.render('selectClass');
});
router.post('/', function (req, res, next) {
    console.log('receive post');
	atm.CreateTimeTable();
	//atm.CreateClassDB();	
    var mode=req.body.create_mode;
    console.log(mode);
    if(mode == 'recommend') {
        // res.render('selectClass',{create_mode:req.body.create_mode});
        console.log(2);
        atm.selectCreateMode(mode);
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
    atm.selectArea(Category_Type).then(function(data){
		console.log("router"+data);
		res.send(data);
	});

})

router.post('/Detail', function(req,res,next){
    //console.log('detail'+'123');
	atm.selectDetailArea(req.body.Detailed_Type).then(function(data){
		console.log(data.length);
		res.json(JSON.stringify(data));
	})
})

router.post('/selectClass', function(req,res,next){
	console.log("rot"+req.body.classNameList);
	atm.selectClass(req.body.classNameList);
	console.log('rotend');
	res.end();
})
var tttt;
router.get('/table', function(req,res,next)
{
	console.log('ttt'+tttt);
	res.render('selectTable', tttt);
})
router.post('/table', function(req,res,next){
	console.log('table'+req.body.EssentialList);

	atm.setClass(req.body.EssentialList, req.body.set_user_credit);
	console.log('tableend');
	tttt =atm.getTempTimeTable();
	console.log('tmp'+tttt);
	console.log(tttt.length + ""+ tttt[0].ResultClassList);
	res.send(tttt);
})

module.exports = router;
