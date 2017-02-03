var a = require('readline-sync');
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var Arr = ['P', 'R', 'S'];
while(true){
var user = a.question('enter \n S : scissor \n P : Paper \n R : Rock \n Q : Quit \n');
if(user != 'P' && user != 'R' && user != 'S' && user != 'Q'){
    console.log('error');
    
}
    else if(user == "Q"){
        break;
    }
else{
    var computer = Arr[randomNumber(0 , 2)];
    console.log('computer : '+computer);
    if(user == computer){
        
        console.log('try again');
        
    }
    else if(user == "S" && computer=="P" || user == "P" && computer=="R" || user == "R" && computer=="S"){
        console.log('you win this turn');
    }
    else{
        console.log('computer wins this turn')
    }
    
    
}


}