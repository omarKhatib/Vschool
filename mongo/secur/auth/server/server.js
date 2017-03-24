var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var config = require("./config");  
mongoose.connect(config.database);
var expressJwt = require("express-jwt");

var apiRouter=require("./api.js");
var authRouter = require('./auth.js');
var PORT = process.env.PORT || 8080;





app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(authRouter);

app.use(expressJwt({secret: config.secret}));
app.use(apiRouter);


app.listen(PORT, function () {
    console.log("iam listing on " + PORT);
})