var express = require('express')
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
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
//GET POST 의 URL이 같아도 다르게 처리
router.get('/', function(req,res){ //req 요청 객체 //res 응답객체
    console.log('get join url');
    res.sendFile(path.join(__dirname, '../../public/join.html'));
})

router.post('/', function(req,res){
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var passwd = body.password;
    //set을 이용하여 쿼리를 좀 더 짧게 짤 수 있음
    //쿼리에 대한 보안도 찾아보면서 공부하기
    //이스케이프 
    var sql = {email:email, name:name, pw:passwd};
    var query = connection.query('insert into user set ?', sql, function(err,rows){
        if(err){throw err;}
        else res.render('welcome.ejs', {'name':name,'id':rows.insertId});    
    })
})

module.exports = router;