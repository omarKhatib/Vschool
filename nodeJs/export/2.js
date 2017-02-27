var a = require('readline-sync');
var m = require('./1.js');
var n1 = a.question('enter first number:\n');
var n2 = a.question('enter second number:\n');
console.log(m.add(parseInt(n1),parseInt(n2))); //summation