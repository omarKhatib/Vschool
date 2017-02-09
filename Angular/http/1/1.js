var a = angular.module('app',[]);
var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};
a.service("yodaServ",function($http){
    this.getData = function(text){
 
        return $http.get("https://yoda.p.mashape.com/yoda?sentence="+text , config);
        
        
    }
    
    
    
});

a.controller('ctrl',function($scope ,yodaServ){
    $scope.send = function(){
    yodaServ.getData($scope.t).then(function(response) {
        $scope.out = response.data;
    });
    
    }
});