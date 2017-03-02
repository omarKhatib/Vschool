var express =require('express');
var app = express();
var bodyParser = require('body-parser'); //to post in json form  
var uuid = require('uuid'); //generate random id
var data = require('./students.js');
var validation = require('./validation.js');

var post = 8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());





app.get('/',function(req,res){                //default : root dir ,,,, get all data

            res.status(200).send(data);

    
});


app.get('/:id',function(req,res){                // parameters is not optional
    var id = req.params.id;
  for(i in data){
       if(data[i].id == id){
            res.status(200).send(data[i]);
  }
 }
  res.status(400).send({message: 'not found id!'});
    
});

app.post('/',function(req,res){
    var postedData = {
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age
    }
    var isValidate = validation(postedData);
    
    if(isValidate.message == 'F'){      //name validation , If the user enters extra enteties : will neglect it automatically
        res.status(400).send({'message':'you have to insert '+isValidate.missedData});
    }

    else{
    data.push({                        //req.body : the entire posted json object , only in post use body
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age
        
    });
    res.status(200).send({'message':'success'});
    }
    
});



app.delete('/:id', function(req, res){     //not optional parameter
    var id = req.params.id;
    for(var i = 0; i<data.length ; i++){
        if(data[i].id == id){
            data.splice(i, 1);
            res.status(200).send({'message': 'deleted!'});

        }
  
    }
    res.status(400).send({'message': 'id not found!'});
        

     
    
    
});






var server = app.listen(post,function(){
    console.log("We have started our server on port : "+post);
});