var namesArr = ['talal','dalal','amina','mamoun','omar'];

var attempCall = function(name , call , sendText , dontCall){

    if(name.length % 2 !=0){
        call(name);
        
        
    }
    else if(name.length % 2 == 0){
        
        dontCall(name);
        
    }
    
    
    
    
    
    
    
    var c=0;
for(var i=0 ; i<name.length ; i++){
    if(name.charAt(i)== 'a'){
        c++;
       
    }
}

if(c>1){
sendText(name);
}
    
    
    
    
    
    
    
    
    
    
    
    

}
var call = function(name){
    console.log('calling ' + name);    
}

var dontCall = function(name){
    console.log('dont call ' + name);    
}

var sendText = function(name){
    console.log('sending text message ' + name);    



    }


for(var i = 0 ; i<namesArr.length ; i++){
    
    attempCall(namesArr[i] , call , sendText , dontCall);
    
    
}















