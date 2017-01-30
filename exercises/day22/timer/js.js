var s;
var m;
var h;
$("#btn").click(function() {

 s = parseInt($('#s').val());
    m = parseInt($('#m').val());
    h = parseInt($('#h').val());

  
  var repeat = setInterval(function() {
      s = s-1;
      
      if(m == 0 & h!=0){
          h = h-1;
          m = 59;
          
          
      }
      
      if(s == 0 && m!=0){
          m = m-1
          s = 59; 
      }
    if(s <= 0 && m <= 0 && h<=0) {
      clearInterval(repeat);
    }
      $('#sp').html(s+':'+m+':'+h);
  },1000);
    
    
});