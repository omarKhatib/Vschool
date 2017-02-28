var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var data = require('./students.js');

var post = 8080;
var server = app.listen(post,function(){
    console.log("We have started our server on port : "+post);
});

app.get('/',function(req,res){
    res.status(200).send(data);
});