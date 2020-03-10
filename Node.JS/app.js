var express = require('express')
//require로 express에 관련된 함수를 가져옴
var app = express()
var bodyParser = require('body-parser');
var mysql = require('mysql')

//DB 기본 접속 

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'jsman'
})

connection.connect()

//아래라인이 모두 실행되고 나서 listen 진행
//아래는 비동기적
app.listen(3000, function(){
    console.log("start! express server");
});

app.use(express.static('public'))
//정적인 파일을 사용하기위해서 
//main.js같은 파일을 요청하면 받을 수 있게

app.use(bodyParser.json()) // json형태로 받을 때
app.use(bodyParser.urlencoded({extended:true})) //그냥 post로
//ASCII 형태로만 주고 받을 수 있어서 인코딩함
app.set('view engine', 'ejs')
// view engine은 ejs를 쓰겠다라고 설치 후 셋팅



app.get('/', function(req,res){
  //  res.send("<h1>hi friend!</h1>"); //웹페이지에 값이 뜨게됨
    res.sendfile(__dirname + "/public/main.html");
    //__dirname 식별자를 사용하면 지금 경로를 불러올수있다.
    // /public/main.html만 치면 main 파일을 불러올수있다.
});

app.get('/main', function(req,res){ // url /main으로 갔을 때
    res.sendfile(__dirname + "/public/main.html");
});


app.post('/email_post', function(req,res){ //req 요청 객체 //res 응답객체
    //get : req, param("email") 
    console.log(req.body.email);
   //res.send("<h1>welcome ! " + req.body.email + "</h1>");
    res.render('email.ejs', {'email' : req.body.email})
    //render를 통해서 email.ejs 파일에 email이라는 변수의 값을 req.body.email로 하겠다.
    //ejs는 템플릿엔진
})

app.post('/ajax_send_email', function(req,res){
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

/*

//express가 제공하는 기능
//열기만하면 요청에 대해서 처리를 못해서 에러 발생

console.log('end Server');
//end 가 먼저나옴 (비동기로 처리되서);

//동기적 -> 비동기적



*/