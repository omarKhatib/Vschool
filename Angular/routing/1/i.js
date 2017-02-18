var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home.html"
    }).when("/about", {
        templateUrl: "about.html"
    }).when("/w", {
        templateUrl: "whyilove.html"
    });
});