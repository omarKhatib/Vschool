var sum = function(n1, n2){
    return n1 + n2; 
}

var grt = function(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        return n1;
        
    }
    else if(n2 > n1 && n2 >n3){
        return n2;
        
    }
    else{
        return n3;
        
    }
}

var oddOrEven = function(n){
    if(n %2 == 0){
        return 'even';
    }
    else
        return 'odd'
    
}

var s = function(x){
    if(x.length <= 20){
        return x + x;

    }
    else if(x.length > 20 ){
        return x.slice(1,x.length/2)
        
    }
    
    
}



var quadratic = function(a,b,c){
    var d = (b*b)-(4*a*c);
    if (d == 0){
        return x = -b/(2*a);
    }
    else if(d > 0){
        x = [];
        x[0] = (-b + Math.sqrt(d))/(2*a);
        x[1] = (-b - Math.sqrt(d))/(2*a);
        return x;
        
    }
    
    else if (d < 0){
        return 'no solution';
        
    }
    
    
    
    
}


console.log(sum(10,20));
console.log(grt(1,2,3));
console.log(oddOrEven(10));
console.log(s('oooooooooooooooooooooooooooooo'));
console.log(quadratic(1,4,3));