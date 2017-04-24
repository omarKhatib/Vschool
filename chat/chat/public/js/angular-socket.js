var app = angular.module("chat.io", []);

app.service("io", function($http) {
  this.connect = function() {
    return io("/");
  };
  this.getChat = function(socket, onSuc) {
    socket.on("message", function(data) {
      onSuc(data);
    });
  };
    
    
    
    this.getData = function(){
        return $http.get("http://localhost:8080/pick");
        
    }
    
     this.postChat = function(data){
        return $http.post("http://localhost:8080/pick",data);
    }
  this.emitChat = function(socket, user,message) {
    socket.emit("message", {user:user,message: message});
  };
})
