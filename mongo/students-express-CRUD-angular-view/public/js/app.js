var ang = angular.module("app", []);
ang.service("Service", function ($http) {
 
    this.getData = function () { 
        return $http.get("http://localhost:8080/students")
    }
    
    this.setData = function (data) { 
        return $http.post("http://localhost:8080/students/")
    }
     this.deleteData = function (id) { 
        return $http.delete("http://localhost:8080/students/"+id)
    }
     
      this.putData = function (data,id) { 
        return $http.put("http://localhost:8080/")
    }




});

ang.controller("ctrl", function ($scope, Service) {
    $scope.get = function(){
        Service.getData().then(function(response){
            $scope.students = response.data;
            
            
            
        })
    }
    
    $scope.remove = function(id){
        alert(id);
        Service.deleteData(id).then(function(response){
            $scope.message = response.data;
            $scope.get();
            
            
        });
        
    }
    


});