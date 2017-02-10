var a = angular.module('app', []);


a.service("toDoS", function ($http) {
    this.getData = function () {

        return $http.get("http://api.vschool.io/omarkh/todo");


    }

    this.deleteData = function(id) {
        
        return $http.delete("http://api.vschool.io/omarkh/todo/"+id);

    }
    
    
    this.addData = function(data) {
        
        return $http.post("http://api.vschool.io/omarkh/todo/",data);

    }



});

a.controller('ctrl', function ($scope, toDoS) {
    $scope.loadData = function () {
        toDoS.getData().then(function (response) {
                $scope.out = response.data; }, function (response) {
                alert(response.status);
            });
        
    }
    
    $scope.deleteData = function(id){
        alert('deleting'+id);
        toDoS.deleteData(id).then($scope.loadData(),function(response){
            alert(response.status);
            
        });
        
    }
    
    
    $scope.addData = function(){
        var data  = {title : $scope.title};
        
        toDoS.addData(data).then($scope.loadData(),function(response){
            alert(response.status);
            
        });
        
    }
    
    
    
    

});