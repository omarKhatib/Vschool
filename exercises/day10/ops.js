var chk = function(n1,n2){
    if(n1 && n2 !== ''){
        
        return true;
        
    }
    else{
       alert('empty inputs!');
        return false;
          
    }
    
    
    
}


var sum = function(){
    
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    if(chk(n1,n2))
    document.getElementById('result').innerHTML=(parseInt(n1)+parseInt(n2)); 
}

var min = function(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    if(chk(n1,n2))
    document.getElementById('result').innerHTML=(parseInt(n1)-parseInt(n2)); 
}

var div = function(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    if(chk(n1,n2))
    document.getElementById('result').innerHTML=(parseInt(n1)/parseInt(n2)); 
}

var prd = function(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    if(chk(n1,n2))
    document.getElementById('result').innerHTML=(parseInt(n1)*parseInt(n2)); 
}





document.getElementById("sum").addEventListener("click",sum);
document.getElementById("min").addEventListener("click",min);
document.getElementById("div").addEventListener("click",div);
document.getElementById("prd").addEventListener("click",prd);


