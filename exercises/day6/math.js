var sum = function(n1,n2){
    return n1+'+'+n2+'='+(n1+n2);
    
}

var sub = function(n1,n2){
    return n1+'-'+n2+'='+(n1-n2);
    
}

var mult = function(n1,n2){
    return n1+'*'+n2+'='+(n1*n2);
    
}

var div = function(n1,n2){
    return n1+'/'+n2+'='+(n1/n2);
    
}

var mod = function(n1,n2){
    return n1+'%'+n2+'='+(n1%n2);
    
}

console.log(sum(1,2));
console.log(sub(2,1));
console.log(mult(2,2));
console.log(div(10,2));
console.log(mod(10,2));