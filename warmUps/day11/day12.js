var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var A = '';
if(h>12){
    h = h-12;
    A = "PM"  
}
else{
    
    A = "AM";
}


console.log("Today is:"+days[d.getDay()]);
console.log("current time: "+h+":"+m+":"+s+" "+A);

