var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = [];
    $scope.addItem = function () {
            $scope.products.push($scope.addMe);
    }
    $scope.removeItem = function (x) {
         
        $scope.products.splice(x, 1);
    }
});
