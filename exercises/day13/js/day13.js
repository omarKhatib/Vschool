var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var arr=[];
for(i=0;i<people.length;i++){
    arr.push(people[i]);
    for(j=0;j<alphabet.length;j++){
        
        arr.push(alphabet[j]);
        
    }
    
}
console.log(arr.join(', '));