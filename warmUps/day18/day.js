function getRand(min,max){
    return Math.floor(Math.random() * (max - min +1 ))+min;
    
    
}

//                                                                                                                                                                                                                                                                                  console.log(getRand(1,5));

function Enemy(names){
    var names = names;
    this.enemyName = '';
    this.hitPoints;
    this.defense;
    
    this.generate = function(){
    var index = getRand(0,names.length - 1);
    this.enemyName = names[index]; 
    if(this.enemyName === 'Ancient Dragon'){
        this.hitPoint = getRand(80,100);
         }
    else if(this.enemyName === 'prowler'){
        this.hitPoint = getRand(50,79);
        }
    else if(this.enemyName === 'Mighty Grunt'){
        this.hitPoint = getRand(20,49);
        }
        
        this.defense = this.hitPoint*3;
        
        
        
        
        
    }
  
}

var types = ['Ancient Dragon','prowler','Mighty Grunt'];



for(var i=0 ; i<5 ; i++){
    var te = new Enemy(types);
    te.generate();
    console.log(te.enemyName + '\t\t\t'+te.hitPoint + '\t' + te.defense);
    
    }

