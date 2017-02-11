var app = angular.module('app',[]);

app.service('S',function($http){
    this.getImages = function(){
        return $http.get('http://api.vschool.io:6543/hitlist.json');
        
        
    }
    
    
    
});

app.controller('ctrl',function($scope, S){
    $scope.getImages = function(){
        S.getImages().then(function(response){
            $scope.images = response.data;
            
        },function(response){alert(response.status)});
        
        
    }
    
    
    
    
    
    
});