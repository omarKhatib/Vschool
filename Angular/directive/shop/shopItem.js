var app = angular.module('shopModule',[]);
app.directive('itemInShop', function(){
    return{
        restrict:'AE',
        scope: {
            name:'=',
            currency: '@',
            amount : '=',
            price: '='
            
        },
        templateUrl: "shopItem.html",
        link: function(scope, elem, attrs){
            
            var btn = document.getElementById('totalBtn');
          /*  btn.bind('click',function(){
                scope.total = scope.amount * scope.price;
                scope.$apply();
                
            });*/
            btn.addEventListener('click',function(){
                alert('hjhjh');
                 scope.total = scope.amount * scope.price;
                scope.$apply();
                
            })
            
            
        }
        
    }
    
});