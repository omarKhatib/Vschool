var a = angular.module("app", ['myModule']);
a.controller("ctrl", function ($scope, S) {
    $scope.items = S.items;
    $scope.total = S.total;

    $scope.add = function() {
        S.add($scope.item,$scope.price);
         $scope.total = S.total;
       

    }


  




});