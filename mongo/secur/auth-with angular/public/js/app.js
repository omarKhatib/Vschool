var ang = angular.module("app", []);


ang.service("Service", function ($http) {
 
    this.getData = function () { 
        return $http.get("http://localhost:8080/students")
    }
    
    this.setData = function (data) { 
        return $http.post("http://localhost:8080/students/",data)
    }
     this.deleteData = function (id) { 
        return $http.delete("http://localhost:8080/students/"+id)
    }
     
      this.putData = function (id,data) { 
        return $http.put("http://localhost:8080/students/"+id+'/',data);
    }
      
      
      this.signin = function (data) { 
        return $http.post("http://localhost:8080/signin/",data);
    }
      
      
      
      this.signup = function (data) { 
        return $http.post("http://localhost:8080/signup/",data);
    }




});

ang.controller("ctrl", function ($scope, Service) {
    $scope.get = function(){
        Service.getData().then(function(response){
            $scope.students = response.data;
            
            
            
        })
    }
    
    $scope.remove = function(id){
        Service.deleteData(id).then(function(response){
            $scope.message = response.data;
            $scope.get();
            
            
        });
        
    }
    
    
    $scope.add = function(){
        var data = {name: $scope.name, age:$scope.age};
        console.log(data);
        Service.setData(data).then(function(response){
            $scope.message = response.data;
            $scope.get();
            
            
        });
        
        
        
        
        
    }
    
    $scope.update = function(id){
        var data = {name: $scope.name, age:$scope.age};
        Service.putData(id, data).then(function(response){
            $scope.message = 'updated!';
            $scope.get();
            
            
            
        })
        
        
        
        
        
        
    }
    
    
    
    $scope.signin = function(){
        var data = {username: $scope.username, password:$scope.password};
        Service.signin(data).then(function(response){
            alert('signin!');
            
            
            
        })
        
        
        
        
        
        
    }
    
      $scope.signup = function(){
        var data = {username: $scope.username, password:$scope.password};
        Service.signup(data).then(function(response){
            alert('signup!');
            
            
            
        })
        
        
        
        
        
        
    }
    
    
    
    


});