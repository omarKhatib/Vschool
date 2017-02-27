var read = require("readline-sync");
var randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}


function EnemyShip(x,y){
    this.x = x;
    this.y = y;
    this.print = function(){
        return 'x:'+x + 'y:'+y;
    }
    
    
}


function user(name){
    this.bame = name;
    this.hits = 5;
    
}


var arr = [[]];

for (var i=0 ; i<10 ; i++){
    arr[i] = [];
    for(var j=0 ; j<10 ; j++){
        arr[i][j] = '0';
        
    }
}

var enemiesShips = [];
enemiesShips [0]= new EnemyShip(randomNumber(0,10),randomNumber(0,10));
enemiesShips [1]= new EnemyShip(randomNumber(0,10),randomNumber(0,10));
enemiesShips [2]= new EnemyShip(randomNumber(0,10),randomNumber(0,10));
enemiesShips [3]= new EnemyShip(randomNumber(0,10),randomNumber(0,10));
enemiesShips [4]= new EnemyShip(randomNumber(0,10),randomNumber(0,10));
    

console.log(arr);
var name = read.question('enter your name:\n');

var user = new user(name);



while(true){
console.log('you have '+user.hits+' hits. \n');
var enteredX = read.question('enter x : \n');
var enteredY = read.question('enter y : \n');

for(var i=0 ; i<enemiesShips.length ; i++){
    if(enemiesShips[i].x == enteredX || enemiesShips[i].y == enteredY){
        console.log('you hit the enemy!');
        arr[enteredX][enteredY] = 'X';
        break;
        
    }
    
    else{
        console.log('bad hit!');
        arr[enteredX][enteredY] = 'I';
        user.hits-=1;
        break;
        
        
    }
    
}
console.log(arr);
}

