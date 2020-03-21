var express = require('express')
var app = express()
var router = express.Router();
var path  = require('path')

router.get('/', function(req,res){ // url /main으로 갔을 때
    var id = req.user;
	if(!id) res.render('login.ejs');
	res.render('main.ejs', {'id' : id});
});

module.exports = router;