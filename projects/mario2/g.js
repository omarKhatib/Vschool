var readlineSync = require("readline-sync");

var items = ["Dagger", "Pencil", "IOU", "Monkey"];

var Player = function(name, health, attack, inv) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.inv = inv;
  this.addItem = function(item) {
    this.inv.push(item);
  }
}                                                                             
var Enemy = function(name, health, attack) {
  this.name = name;
  this.health = health;
  this.attack = attack;
}

console.log("Hello how are you suckers I dont understand what Haithaim said");
var playerName = readlineSync.question("Enter you player name: ");
var user = new Player(playerName, 100, 20, []);

var enemies = [];
enimes[0] = new Enemy("Jacob", 20, 100);
enimes[1] = new Enemy("Haithaim", 400, 200);
enimes[2] = new Enemy("Hiba", 200, 1000);

while(true) {
                           
  if(userinput == "w") {
    chance = randomNumber(1, 100);
    if(chance > 50) {
      enemy = enimes[randomNumber(0, enimes.length - 1)];
      while(user.health > 0 && enemy.health > 0) {
        get userinput;
        if(userinput == "run") {
          chance = randomNumber(1, 100);
          if(chance > 50) {
            console.log("You coward you ran away");
            break;
          } else {
            console.log("You fool you cant run... or you can try again");
          }
        } else if(userinput == "attack") {
          var damage = randomNumber(0, user.attack);
          enemy.health -= damage;
          console.log("You hit the enemy with " + damage + " amount of damage");
        } else {
          console.log("You fool put in 'attack' or 'run'");
        }
        chance = randomNumber(0, 100);
        if(chance > 50) {
          console.log("Enemy attacks");
          var damage = randomNumber(0, enemy.attack);
          user.health -= damage
          console.log("You were hit for " + damage + " amount");
        } else {
          console.log("Enemy missed");
        }
      }
      if(enemy.health < 0 && user.health > 0) {
        console.log("You killed the enemy now have a prize");
        var item = items[randomNumber(0, items.length - 1)];
        console.log("You got a " + item);
        user.addItem(item);
      } else if(user.health < 0) {
        console.log("You died");
        break;
      }
    }
  } else {
    console.log("You idiot put 'w' FOR WALK");
  }
}
console.log("Game over here is what you won" + user.items);