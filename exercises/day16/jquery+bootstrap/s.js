

$( "#sq" ).hover(function() {
 $(this).css('background-color','blue'); 
 
});



$( "#sq" ).mousedown(function() {
  $(this).css('background-color','red'); 
});

$( "#sq" ).mouseup(function() {
  $(this).css('background-color','yellow'); 
});

$( "#sq" ).dblclick(function() {
  $(this).css('background-color','green'); 
});

$(window).scroll(function() {
  $('#sq').css('background-color','orange'); 
});

document.addEventListener("keydown", function(e) {
  if(e.which == 71){
      
     $('#sq').css('background-color','green'); 
      
  }
    
    
    
    else if(e.which == 66){
      
     $('#sq').css('background-color','blue'); 
      
  }
    
    else if(e.which == 89){
      
     $('#sq').css('background-color','yellow'); 
      
  }
    
    
    
    else if(e.which == 79){
      
     $('#sq').css('background-color','orange'); 
      
  }
});





    
