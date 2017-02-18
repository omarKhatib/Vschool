var app = angular.module("app", ["ngRoute"]);
app.service('s',function(){
   this.key='default';
    
    
});
app.config(function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        templateUrl : "google.html",
        
    
    }).when("/google", {
        templateUrl : "google.html",
        controller:'googlectrl'
    }).when("/twitter", {
        templateUrl : "twitter.html"
    }).when("/soundcloud", {
        templateUrl : "soundcloud.html"
    });
});

app.controller('mainctrl',function($scope ,s){
    $scope.t = function(){
        s.key = $scope.key;
        
        
    }
});

app.controller('googlectrl',function($scope, s){
    $scope.t = function(){
        $scope.q = s.key;
        
        
    }
   
})

