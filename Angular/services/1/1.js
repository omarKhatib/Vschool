var a  = angular.module("app" , []);
a.service("s",function(){
    this.array = [];
    this.add = function(x){
        this.array.push(x);
        
    }
    this.remove = function(i){
        this.array.splice(i, 1);
        
        
    }
    
    
});

a.controller("ctrl" , function($scope , s){
    $scope.arr = s.array;
    $scope.m;
    $scope.add = function(){
        s.add($scope.m);
        
    }
    $scope.del = function(i){
        s.remove(i);
        
        
    }
    
        

    
    
    
});