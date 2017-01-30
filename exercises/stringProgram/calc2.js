var a = require('readline-sync');

var s = function (n1,n2){
    return (parseInt(n1)+parseInt(n2));
    
}

var d = function (n1,n2){
    return (n1/n2);
    
}

var p = function (n1,n2){
    return (n1*n2);
    
}
 
var m = function (n1,n2){
    return (n1-n2);
    
}


var n1 = a.question('enter first number:\n');
var n2 = a.question('enter second number:\n');
var op = a.question('enter operator:\n');

if(op == '+'){
    console.log('result = '+s(n1,n2));
    
    
}

else if(op == '-'){
    console.log('result = '+m(n1,n2));
    
    
}

else if(op == '*'){
    console.log('result = '+p(n1,n2));
    
    
}


else if(op == '/'){
    console.log('result = '+d(n1,n2));
    
    
}

