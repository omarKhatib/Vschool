var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

var apiRouter=require("./api.js");
var PORT = process.env.PORT || 8080;





app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    
    if(req.body.name == "omar"){
         res.status(400).send({'message':'you dont have the permission'});
    }
    else{
       console.log('all requests called');
        next();
        
    }
    
})


app.use(apiRouter);


app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})