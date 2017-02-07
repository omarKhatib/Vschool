var app = angular.module("app", []); 
app.controller("ctrl", function($scope) {
    $scope.srcs = [];
    $scope.addImg = function () {
            $scope.srcs.push({'image':$scope.source,'desc':$scope.description,'title':$scope.title});
        
         //localStorage.setItem('testObject', JSON.stringify($scope.srcs));
       // var images = localStorage.getItem('testObject')
        alert(images);
        
        
        
    }
    //$scope.removeItem = function (x) {
         
       // $scope.products.splice(x, 1);
    //}
});
