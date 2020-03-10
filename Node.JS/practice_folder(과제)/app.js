var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000, function(){
    console.log("server start");
})

app.use(express.static('public'));
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:true})) 

app.get('/', function(req,res){
    res.sendfile(__dirname+"/public/index.html");
})

app.post('/search_result', function(req,res){
    console.log(req.body.searchFocus);
    var responseData = {'searchFocus': req.body.searchFocus};
    res.json(responseData);
})