var a = angular.module("myModule", []);
a.service("S", function () {
    this.items = [];
    
    this.total=0;
    this.add = function (item , p) {
        
        this.items.push({'item':item , 'price':p});
        this.total+=p;
        
    }
    
});