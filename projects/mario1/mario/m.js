
function ch(x){

    if(x == 'c1'){
        var points = parseInt(document.getElementById('points').innerHTML);
        
        document.getElementById('points').innerHTML =(points+10);
        
        var c1points = parseInt(document.getElementById('c1total').innerHTML);
        
        document.getElementById('c1total').innerHTML =(c1points+10);
        
    }
    else if(x == 'c2'){
        var points = parseInt(document.getElementById('points').innerHTML);
        
        document.getElementById('points').innerHTML =(points+15);
        
        var c2points = parseInt(document.getElementById('c2total').innerHTML);
        
        document.getElementById('c2total').innerHTML =(c2points+15);
        
        

    }
    
    else if(x == 'c3'){
        var points = parseInt(document.getElementById('points').innerHTML);
        
        document.getElementById('points').innerHTML =(points+20);
        
        var c3points = parseInt(document.getElementById('c3total').innerHTML);
        
        document.getElementById('c3total').innerHTML =(c3points+20);
        
        

    }
    
    
}