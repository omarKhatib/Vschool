var express    =    require('express');
var app        =    express();
var post = process.env.PORT || 8080;
var server     =    app.listen(post,function(){
var server     =    app.listen(post,function(){
    console.log("We have started our server on port 3000");
});

app.get('/',function(req,res){
    res.send('Hello world');
});