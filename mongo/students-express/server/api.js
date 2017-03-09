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
         
         res.status(200).send({message:'internal server error',data: data});
         
     }
     
     
     
     
     
 })

});

apiRouter.post('/students',function(req, res){
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



//
//apiRouter.delete('/students/:id', function(req, res){
//    console.log(req.params.id);
//    data.findOne({_id:req.params.id}, function(req, data){
//        if(err){
//            res.status(500).send({message:'internal error'+ err});
//            
//        }
//        else if(data == undefined){
//            
//            res.status(404).send({message:'not found'});
//        }
//        
//        else{
//            data.remove(function(err, data){
//                if(err){
//                    res.status(500).send({message:'internal error'+ err});
//                    
//                }
//                
//                else{
//                    
//                    res.status(200).send({message:'removed!'});
//                }
//                
//                
//            })
//            
//        }
//        
//    })
//    
//    
//});    //dont need to save after remove

apiRouter.delete("/studens/:id", function (req, res) {
    students.findOne({
        _id: req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Error in db",
                err: err
            });
        } else if (data == undefined) {
            res.status(404).send({
                message: "No object with id exist"
            });
        } else {
            data.remove(function (err, data) {
                res.status(200).send({
                    message: "Data was removed"
                });
            });
        }
    });
});



//apiRouter.get("/students/:id", function (req, res) {
//    var id = req.params.id;
//    for (var i = 0; i < data.length; i++) {
//        if (data[i].id == id) {
//            res.status(200).send(data[i]);
//        }
//    }
//});
//
//
//apiRouter.post("/students", function (req, res) {
//    var dataList = {
//        id: uuid.v4(),
//        firstName: req.body.firstName,
//        lastName: req.body.lastName,
//        living: req.body.living,
//        bountyAmount: req.body.bountyAmount,
//        type: req.body.type
//    };
//    var didpass = fnValidate(dataList);
//    if (didpass.pass == false) {
//        res.status(400).send({
//            message: didpass.message
//        })
//    } else {
//        data.push(dataList);
//        res.status(200).send({
//            sucess: true
//        });
//    }
//});
//
//apiRouter.delete("/students/:id", function (req, res) {
//    var id = req.params.id;
//    for (var i = 0; i < data.length; i++) {
//        if (data[i].id == id) {
//            data.splice(i, 1);
//            res.status(200).send({
//                sucess: true
//            });
//        }
//    }
//
//});
//
//
//apiRouter.put("/students/:id", function (req, res) {
//    var id = req.params.id;
//    for (var i = 0; i < data.length; i++) {
//        if (data[i].id == id) {
//            for (key in req.query) {
//                data[i][key] = req.query[key];
//            }
//            res.status(200).send(data[i]);
//        }
//    }
//
//});

module.exports=apiRouter;