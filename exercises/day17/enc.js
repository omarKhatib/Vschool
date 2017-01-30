var abc = 'abcdefghijklmnopqrstuvwxyz';
var l = '';
var ask = require('readline-sync');  
var input = ask.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(ask.question('How many letters would you like to shift? '));




for(var i = 0  ; i<input.length ; i++){
    if(abc.indexOf(input[i])+shift > 25){
        var tt = abc.indexOf(input[i])+shift-26;
        l+=abc[tt];
    }

    
    else{
    var t = abc.indexOf(input[i])+shift;
    
    l += abc[t];
    
    }
    
    
}
console.log(l);




