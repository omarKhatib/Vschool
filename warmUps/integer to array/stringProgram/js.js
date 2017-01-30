var a = require('readline-sync');
var x = a.question('enter an integer: \n');
var xx = x.split("");
for(var i = 0 ; i<xx.length ; i++){
    xx[i] = parseInt(xx[i]);
}
console.log(xx);
