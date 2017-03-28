var express = require('express');
var authRouter = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var jwt = require("jsonwebtoken"); 
var User = require('./users.js');
var config = require('./config.js')


authRouter.post("/signup",function(req,res){
    User.find({username:req.body.username},function(err,data){
        if(err){
            res.status(500).send(err);
        }else if (data.length>0){
            res.status(200).send({"message":"username is taken"});
        }else {
            var newUser =new User(req.body);
            newUser.save(function(err,data){
                if(err){
                    res.status(500).send(err);
                }else {
                    res.status(200).send({"message":"you just signup "});
                }
            })
        }
    });
});

authRouter.post("/signin",function(req,res){
     User.findOne({username:req.body.username},function(err,user){
         if(err){
             res.status(500).send(err);
         }else if (user == undefined){
            res.status(400).send({"message":"username is wrong"});
         }else if(user.password != req.body.password){
              res.status(400).send({"message":"password is worng"});
         }else {
             var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "30m"});
              res.send({token: token, user: user.toObject(), success: true, message: "Here's your token!"})
             //res.status(200).send({"message":"you just signin"});
         }
     })
})


module.exports =authRouter;