var duplicatedChars = function(x){
    var Arr  =x.split('');
    var dupArr = [];
    var j=0;
    for(var i = 0; i<Arr.length ; i++){
       for(var j = 0; j<=Arr.length ; j++){
           if(Arr[j] == Arr[i] && j != i ) {
               dupArr.push(Arr[i]);
               Arr.splice(i,1);
               break;
           }
       }
            
        
        
    }
    console.log(Arr);
    console.log(dupArr);

    
    
    
    
}

duplicatedChars('oomaaro');