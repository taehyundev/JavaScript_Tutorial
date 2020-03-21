var express = require('express')
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var mysql = require('mysql')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

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

    var msg;
    var errMsg = req.flash('error')
    if(errMsg) msg = errMsg;
    //res.sendFile(path.join(__dirname, '../../public/join.html'));
    res.render('join.ejs', {'message':msg});    
})

passport.serializeUser(function(user, done){
    console.log('pass port session save : ', user.id)
    done(null, user.id);
})

passport.deserializeUser(function(id,done){
    console.log('pass port session get Data : ', id)
    done(null,id);
})

passport.use('local-join', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
}, function(req,email, password, done){
    var query = connection.query('select * from user where email=?', [email], function(err,rows){
        if(err) return done(err);

        if(rows.length){
            console.log('existed user')
            return done(null, false, {message: 'your email is already used'})
        } else{
            var sql =  {email:email, pw:password};
            var query = connection.query('insert into user set ?', sql, function(err,rows){
                if(err) throw err
                return done(null, {'email': email, 'id': rows.insertId})
            })
        }
    })
}
));
//Strategy 설정
//What is the middleware?

router.post('/', passport.authenticate('local-join',{
    successRedirect: '/main',
    failureRedirect: '/join',
    failureFlash:true})
)
//passport 이름인 local-join 을 사용


/* 전통적인 처리 방식 
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

  
*/
//passport를 위해서 필요한 모듈
/*
 npm install passport passport-local express-session connect-flash --save-dev
*/

module.exports = router;