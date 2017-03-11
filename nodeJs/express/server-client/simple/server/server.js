var express =require('express');
var app = express();
//var data = require('.\data.js');


//packages to handle html
var ejs = require("ejs");
var path = require("path");
var port=8080;


//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("index.html");
});






var server = app.listen(port,function(){
    console.log("We have started our server on port : "+port);
}); // create server listener