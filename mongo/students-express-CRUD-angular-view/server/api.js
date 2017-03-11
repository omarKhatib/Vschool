var express = require("express");
var mongoose = require('mongoose');
var data = require("./students.js");
var bodyParser = require('body-Parser');
var apiRouter = express.Router();


apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/students", function (req, res) {
 data.find({}, function(err, data){
     if(err){
         res.status(500).send({message:'internal server error'});
         
     }
     else{
         
         res.status(200).send({data: data});
         
     }
     
     
     
     
     
 })

});

apiRouter.post("/students",function(req, res){
    var newData = new data(req.body);
    newData.save(function(err, nd){
        if(err){
            res.status(500).send({meassage:'error'});
            
        }
        
        else{
            res.status(200).send({data:nd});
            
        }
        
    })
    
});

apiRouter.delete("/students/:id", function(req, res){
   // console.log(req.params.id);
    data.findOne({_id:req.params.id}, function(err, data){
        if(err){
            res.status(500).send({message:'internal error'+ err});
            
        }
        else if(data == undefined){
            
            res.status(404).send({message:'not found'});
        }
        
        else{
            data.remove(function(err, data){
                if(err){
                    res.status(500).send({message:'internal error'+ err});
                    
                }
                
                else{
                    
                    res.status(200).send({message:'removed!'});
                }
                
                
            });
            
        }
        
    });
    
    
});    //dont need to save after remove



apiRouter.put("/students/:id", function(req, res){
   // console.log(req.params.id);
    data.findOne({_id:req.params.id}, function(err, data){
        if(err){
            res.status(500).send({message:'internal error'+ err});
            
        }
        else if(data == undefined){
            
            res.status(404).send({message:'not found'});
        }
        
        else{
            for(key in req.body){
                data[key] = req.body[key]
                    
            }
               
                
            
            data.save();
            res.status(200).send({updatedData:data })
          
            
        }
        
    });
    
    
});    


module.exports=apiRouter;