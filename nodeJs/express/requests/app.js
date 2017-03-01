var express =require('express');
var app = express();
var bodyParser = require('body-parser'); //to post in json form  
var uuid = require('uuid'); //generate random id
var data = require('./students.js');

var post = 8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/',function(req,res){ //default : root dir
    res.status(200).send(data);
});

app.post('/',function(req,res){
    if(req.body.name ==undefined || req.body.name ==''){      //name validation
        res.status(400).send({'message':'you have to insert name'});
    }

    else{
    data.push({                        //req.body : the entire posted json object
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age
        
    });
    res.status(200).send({'message':'success'});
    }
    
});

var server = app.listen(post,function(){
    console.log("We have started our server on port : "+post);
});