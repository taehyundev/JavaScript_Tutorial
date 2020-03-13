var express = require('express')
var bodyParser = require('body-parser');
var router = express.Router();
var mysql = require('mysql')

//DATABASE SETTING
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'jsman'
})

connection.connect()

//ROUTER
router.post('/form', function(req,res){ //req 요청 객체 //res 응답객체
    //get : req, param("email") 
    console.log(req.body.email);
   //res.send("<h1>welcome ! " + req.body.email + "</h1>");
    res.render('email.ejs', {'email' : req.body.email})
    //render를 통해서 email.ejs 파일에 email이라는 변수의 값을 req.body.email로 하겠다.
    //ejs는 템플릿엔진
})
router.post('/ajax', function(req,res){
    var email = req.body.email;
    var responseData = {};

    //Query를 날림
    var query = connection.query('select name from user where email="'+email+'"', function(err,rows){
        if(err) throw err;
        if(rows[0]){
            //console.log(rows[0].name); // 결과값 확인 가능 
            responseData.result = "ok";
            responseData.name = rows[0].name;
        }else{
            responseData.result = "none";
            responseData.name = "";
        }
        res.json(responseData);
    })
    //console.log(req.body.email);
    //var responseData = {'result' : 'ok', 'email': req.body.email};
})


module.exports = router;