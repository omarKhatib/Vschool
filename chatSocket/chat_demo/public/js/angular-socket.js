var app = angular.module("chat.io", []);

app.service("io", function() {
  this.connect = function() {
    return io("/");
  };
  this.getChat = function(socket, onSuc) {
    socket.on("message", function(data) {
      onSuc(data);
    });
  };
  this.emitChat = function(socket, message) {
    socket.emit("message", {message: message});
  };
})
