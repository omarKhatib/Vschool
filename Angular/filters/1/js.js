var app = angular.module('app',[]);

app.filter('mySearch',function(){
           return function(input, term){

    var result = [];
    for(var i = 0 ; i<input.length ; i++){
        if (input[i].name.indexOf(term) != -1){
            result.push(input[i]);
        }
    }
    return result;
}
    
});
    
    


app.controller('ctrl', function($scope){
    $scope.searchKey = '';
    $scope.items = [
        {
          name:'omar',
            age:22
        },
        {
          name:'ahmad',
            age:30
        },
        {
          name:'jacob',
            age:19
        },
        {
          name:'mohi',
            age:30
        },
        {
          name:'ali',
            age:10
        }
        
        
    ];
    
})