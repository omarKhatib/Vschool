var app = angular.module('moduleName',[]);
app.directive('name', function(){
    return {
        
        scope : {
            title : '@',   // or '=' referenced by referenc
            color : '@'
            
        },
        restrict : 'E',
        template : '<h1>{{title}}</h1>',
        //templateUrl : html file name
        
        
        
        link: function(scope, elem, attrs){    //elem : any element in deirective |||||| jqueryLite syntax 
            console.log('loaded the directive');
            elem.bind('click',function(){
                elem.css('color',scope.color);
                
        
    })
        
    }
    }
})


