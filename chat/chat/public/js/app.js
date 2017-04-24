var app = angular.module("app", ["chat.io"]);

app.controller("mainController", function($scope, io) {
    var name = '';
  $scope.socket = {};
  $scope.messages = [];
  $scope.loadConnection = function() {
    $scope.socket = io.connect();
    io.getChat($scope.socket, function(data) {
      console.log(data);
      $scope.messages.push(data);
      $scope.$apply();
    });
  };
    
      $scope.goToChats = function(){
          
        name = $scope.name;
        $scope.name = '';
        
    }
      
      $scope.nameValidate= function(){
          if($scope.name==""){
              return true;
              
          }
          
      }
    
    $scope.getData = function(){
        alert('getting');
        io.getData().then(function(response){
            $scope.oldChats = response.data.data;
            
            
        },function(response){
            console.log(response);
            
            
        })
        
    }
    
    
    
  $scope.send = function() {
      var data = {user:name,message:$scope.newMessage};
      io.postChat(data).then(function(response){
            
  
          
              io.emitChat($scope.socket, name,$scope.newMessage);
    $scope.newMessage = "";
                    console.log("posted");
        },function(response){
            console.log(response);
            
        })
      
      
      
      
      
      
      

  };
});
