arr = [];
var createEvenArray = function(highestNum){
    for(var i=2 ; i <= highestNum ; i+=2){
        arr.push(i);
        
        
    }
    
    console.log(arr);
    
    
    
    
    
    
}

var addOdds = function(evensOnlyArray){
    for(var i=3 ; i<=evensOnlyArray.length+2 ; i+=2){
        evensOnlyArray.push(i);
        
        
    }
    
    console.log(evensOnlyArray);
    
    
}

createEvenArray(10);
addOdds(arr);
arr.sort(function(a, b){return a-b});
console.log(arr);
