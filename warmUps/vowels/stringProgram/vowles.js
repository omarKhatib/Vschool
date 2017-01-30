var a = require('readline-sync');
var x = a.question('enter a string: \n');
var vC = 0;
var cC = 0;
for(var i = 0 ; i<x.length ; i++){
    if(x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u'){
        vC = vC+1;
    }
    else{
        cC = cC + 1;
    }
    
    
}
console.log('number of vowels  = '+vC + '\n');
console.log('number of constants  = '+cC);