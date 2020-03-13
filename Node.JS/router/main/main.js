var express = require('express')
var app = express()
var router = express.Router();
var path  = require('path')

router.get('/', function(req,res){ // url /main으로 갔을 때
    console.log("main sucess");
    //디렉토리 요류로 상대경로로 넣어줌
    res.sendfile(path.join(__dirname, "../public/main.html"));
});

module.exports = router;