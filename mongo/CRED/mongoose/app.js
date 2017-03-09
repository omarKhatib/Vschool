var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Student = require('./students.js');
mongoose.connect('mongodb://localhost');    //localhost/dbName



//var omar = new Student({  
//  name: 'omar',
//    age:22
//  
//});

//var ahmad = new Student({  
//  name: 'ahmad',
//    age:10
//  
//});
//omar.save(function(err, std){
//    console.log(std);
//    
//});
//
//omar.save(function(err, std){    //create
//    
//    console.log(std);
//    
//});

//Student.find({}, function(er, out){ //read
//    console.log(out);
//    
//});
//findOne : find one field only

Student.findOne({name: 'omar'},function(err, data){
    if(!err){data.name = 'mohamadOmar';
             data.save(function(err, data){
        console.log(data);
                 console.log('all data:\n');
    Student.find({}, function(err, data){
    console.log(data);    
        
    })
        
    });
            
            }
    
    else{
        console.log(err);
        console.log('all data:\n');
    Student.find({}, function(err, data){
    console.log(data);    
        
    })
        
    }
    
    
    
    console.log('all data:\n');
    Student.find({}, function(err, data){
    console.log(data);    
        
    })
    
    
    
    
})