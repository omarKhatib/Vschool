var a  = angular.module("app" , []);

    a.controller("ctr",function($scope){
        $scope.arr = [];
        $scope.fName;
        $scope.lName;
        $scope.email;
        $scope.pob;
        $scope.phone;
        $scope.ff;
        $scope.about;
        $scope.a = function(){
         $scope.arr.push({
            firstName : $scope.fName,
             lastName : $scope.lName,
             email : $scope.email,
             pob : $scope.pob,
             phone : $scope.phone,
             favorateFood : $scope.ff,
             about : $scope.about,
             
             
         });
            alert($scope.arr);
        }
        
        
        
    });