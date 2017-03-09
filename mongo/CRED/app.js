/*var mongodb = require('mongodb');          mongo without mongoose

//setup

var client = mongodb.MongoClient;
var URL = 'mongodb://localhost:27017/students';
client.connect(URL, function(err, db){
    if(err){
        console.log(err);
        
    }
    
    else{
        var collection = db.collection('coll');
        collection.insert({name:'ahmadDada', age:1}, function(err, result){
            collection.find().toArray(function(err, docs){
                console.log(docs);
                db.close();
            });
            
        });
        
    }
    
});*/