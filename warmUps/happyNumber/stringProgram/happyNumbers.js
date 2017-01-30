var a = require('readline-sync');
var x = a.question('enter an integer: \n');
var xx = x.split("");
var po = 0;
function happy(n){
for(var i = 0 ; i<xx.length ; i++){
    xx[i] = parseInt(xx[i]);
    po += xx[i]*xx[i];
    
}
}
console.log(po);
