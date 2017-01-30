var arrayOfStudents = [
    {
        class:'sciences',
        name:'omar',
        grade:80,

    },
    
    {
        class:'math',
        name:'ahmad',
        grade:60,

    },
    
    
    {
        class:'math',
        name:'ali',
        grade:70,

    },
    
    
    
    {
        class:'math',
        name:'ammar',
        grade:40,

    }
    
];


var pass = [];
var fail = [];


for(var i = 0 ; i<arrayOfStudents.length ; i++){
    
    
    
    if(arrayOfStudents[i].grade<60){
        fail.push({name : arrayOfStudents[i].name , grade : arrayOfStudents[i].grade });
        
        
    }
    
        else if(arrayOfStudents[i].grade>=90 && arrayOfStudents[i].grade<100){
            pass.push({name : arrayOfStudents[i].name , grade : 'exellent' });}
        else if(arrayOfStudents[i].grade>=80 && arrayOfStudents[i].grade<90){
            pass.push({name : arrayOfStudents[i].name , grade : 'very good' });}
        
        else if(arrayOfStudents[i].grade>=70 && arrayOfStudents[i].grade<80){
            pass.push({name : arrayOfStudents[i].name , grade : 'good' });}
        else if(arrayOfStudents[i].grade>=60 && arrayOfStudents[i].grade<70){
            pass.push({name : arrayOfStudents[i].name , grade : 'passed' });}
        
        
        
        
       
    }    
console.log('failed students : \n ');
console.log(fail);
console.log('\n ');
console.log('passed students : \n ');
console.log(pass);
console.log('\n ');


