var express = require('express')
//require로 express에 관련된 함수를 가져옴
var app = express()
//아래라인이 모두 실행되고 나서 listen 진행
//아래는 비동기적
app.listen(3000, function(){
    console.log("start! express server");
});

app.use(express.static('public'))
//정적인 파일을 사용하기위해서 
//main.js같은 파일을 요청하면 받을 수 있게

app.get('/', function(req,res){
  //  res.send("<h1>hi friend!</h1>"); //웹페이지에 값이 뜨게됨
    res.sendfile(__dirname + "/public/main.html");
    //__dirname 식별자를 사용하면 지금 경로를 불러올수있다.
    // /public/main.html만 치면 main 파일을 불러올수있다.
});

app.get('/main', function(req,res){ // url /main으로 갔을 때
    res.sendfile(__dirname + "/public/main.html");
});

/*

//express가 제공하는 기능
//열기만하면 요청에 대해서 처리를 못해서 에러 발생

console.log('end Server');
//end 가 먼저나옴 (비동기로 처리되서);

//동기적 -> 비동기적



*/