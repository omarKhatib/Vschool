var express = require("express");
var bodyParser= require("body-parser");
var socket = require("socket.io");
var path = require("path");
var chats = require('./chatsSchema.js');
var apiRouter = require('./api.js')

var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/pick'); 




//setup base app
var app = express();
var server = app.listen(8080);
var io = socket(server);

//setup JSON requests
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//setup public facing files
app.use(express.static(path.join(__dirname + "/../public")));
app.set("views", __dirname + "/../public/views");

//setup view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use('/pick',apiRouter);

app.get("/", function(req, res) {
  res.render("index.html");
});

io.on("connection", function(socket) {
//  io.emit("message", {"user": "Server", "message": "You have logged on to chat room"});
  socket.on("message", function(data) {
    console.log(data);
    console.log("I am getting a message");
    io.emit("message", {"user": data.user, "message": data.message});
  })
});
