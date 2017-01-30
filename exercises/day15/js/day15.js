var omega = '\u03A9';
var alpha = '\u03B1';
var arr = [[]];
for (var i=0 ; i<10 ; i++){
    arr.push('\n\t\t\t\t');
    for (var j=0 ; j<10 ; j++){
    
    if(j%2 == 0){
        arr.push(alpha+'');
    
    
    }
        else
            arr.push(omega+'');
            



}



}

console.log(arr.join(' '));