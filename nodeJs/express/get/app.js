var express =require('express');
var app = express();
var bodyParser = require('body-parser'); //to post in json form  
var data = require('./students.js');

var post = 8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/',function(req,res){ //default : root dir
    res.status(200).send(data);
});

app.post('/',function(req,res){
    data.push(req.body);
    res.status(200).send({'message':'success'});
});

var server = app.listen(post,function(){
    console.log("We have started our server on port : "+post);
});