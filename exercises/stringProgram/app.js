var c  = function (n1){
    return eval(n1);
 }
var a = require('readline-sync');
var h = a.question('enter problem:\n');
console.log(c(h));