var randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

var readlineSync = require("readline-sync");

var gunsList = ["Dagger", "Pencil", "IOU", "Hummer"];

var Player = function(name, health, attack, inv) {
  this.name = name;
  this.health = health;
  this.attack = attack;
    this.guns = ['default'];

  this.print = function(){
    console.log(' name : '+this.name+'\n health : '+this.health + '\n attack : '+this.attack+'\n your guns : '+this.guns+'\n'); 
                
                
      
  };
}

var Enemy = function(name, health, attack) {
  this.name = name;
  this.health = health;
  this.attack = attack;
    this.print = function(){
        console.log(' enemy name : '+this.name + '\n enemy health :'+this.health+'\n enemy attack : '+this.attack+'\n');
        
        
        
    }
}

var playerName = readlineSync.question("Enter you player name: ");
var user = new Player(playerName, 100, 100, []);

var enimes = [];
enimes[0] = new Enemy("dragon", 100, 100);
enimes[1] = new Enemy("Tiger", 100, 100);
enimes[2] = new Enemy("Lion", 100, 100);
console.log('NOTE : you can show your info any time , just type print');

while(true){
    var userInput  = readlineSync.question('enter w to walk : \n');
    if(userInput == 'w'){
        var chance = randomNumber(1, 100);
        
        if(chance >= 50){
            var enemy = enimes[randomNumber(0 , enimes.length-1)];
            var gun = gunsList[randomNumber(0 , gunsList.length-1)];
            enemy.gun = gun;
            console.log('lets defeat this enemy : \n');
            enemy.print();
            while(user.health > 0 && enemy.health > 0){
                var userInput = readlineSync.question('enter attack to attack or run to escape :\n');
                
                if(userInput == 'attack'){
                    var gun = readlineSync.question('please choose your gun : '+user.guns.splice(',')+'\n');
                    var damage = randomNumber(0, user.attack);
                    enemy.health -= damage;
                    console.log("You hit the enemy using "+gun+" with " + damage + " amount of damage \n");
                    console.log(enemy.name + ' health now : '+enemy.health);
                    
                    if(enemy.health <= 0){
                        user.guns.push(enemy.gun);
                        console.log('you defeate the enemy'+enemy.name+'\n your health =   '+user.health + '\n your attack : '+user.attack+' '+'you won new gun : '+enemy.gun);
                        var i = enimes.indexOf(enemy.name);
                        enimes.splice(i, 1); 
                        break;
                        
                    }
                    
                    var chance2 = randomNumber(1, 100);
                    if(chance2 >= 50){
                        var damage = randomNumber(1, enemy.attack);
                        user.health -= damage;
                        console.log(enemy.name+' is attacking you now... using '+ enemy.gun +' gun , hit = '+damage);
                        
                        
                        console.log('your health now  = '+user.health);
                        
                        
                    }
                    
                    if(user.health <= 0){
                        console.log(enemy.name+' killed you , Game Over!');
                        process.exit(1);
                        
                    }
                    
                    
                    
                    
                }
                else if(userInput == 'run'){
                    var chance3 = randomNumber(1, 100);
                    console.log(chance3);
                    if (chance3 > 30){
                        console.log('you can not escape , you have to fight');
                        
                    }
                    else{
                        console.log('you escaped successfully');
                        break;
                        
                    }
                    
                    
                }
                
                else if(userInput == 'print'){
                        user.print();
                }
                else{
                    
                    console.log('!!!! \n');
                }
                
                
                
                
                
                
            }
            
            
            
        }
        
        else{
            
            
        }
        
        
        
        
    }
    
    else if(userInput == 'print'){
        user.print();
    }
    
    
    
    else{
        console.log('its not w! \n');
        
    }
    
    
}