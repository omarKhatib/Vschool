
var stars = function(n){

var s = '';
for(var i=0 ; i<n ; i+=2){
    s+='\t\t\t\t';
    
    for(var j=n ; j>=(n-i);j--){
        
        s+=' '+'*';
        
    }
    s+='\n';
    
    
}

console.log(s);
    
}


var a = require('readline-sync');

var x = a.question('enter number:\n');

stars(x);