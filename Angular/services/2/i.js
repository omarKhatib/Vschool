var a = angular.module("app", []);
a.service("Sone", function () {
    this.add = function (one) {
        one += 1;
        this.finalone = one;
    }
    this.remove = function (one) {
        one -= 1;
        this.finalone = one;
    }
});

a.service("Stwo", function () {
    this.add = function (two) {
        two += 1;
        this.finaltwo = two;
    }
    this.remove = function (two) {

        two -= 1;
        this.finaltwo = two;

    }


});

a.controller("ctrl", function ($scope, Sone, Stwo) {
    $scope.one = 100;
    $scope.two = 100;
    $scope.addOne = function () {

        Sone.add($scope.one);
        Stwo.remove($scope.two);

        $scope.one = Sone.finalone;
        $scope.two = Stwo.finaltwo;

    }

    $scope.addTwo = function () {

        Sone.remove($scope.one);
        Stwo.add($scope.two);

        $scope.one = Sone.finalone;
        $scope.two = Stwo.finaltwo;


    }
    $scope.cls = function () {
        $scope.one = 100;
        $scope.two = 100;

    }





});