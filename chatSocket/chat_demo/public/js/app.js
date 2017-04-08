var app = angular.module("app", ["chat.io"]);

app.controller("mainController", function($scope, io) {
  $scope.socket = {};
  $scope.messages = [];
  $scope.loadConnection = function() {
    $scope.socket = io.connect();
    io.getChat($scope.socket, function(data) {
      console.log(data);
      $scope.messages.push(data.message);
      $scope.$apply();
    });
  };
  $scope.send = function() {
    io.emitChat($scope.socket, $scope.newMessage);
    $scope.newMessage = "";
  };
});
