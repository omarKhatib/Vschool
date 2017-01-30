$(document).ready(function() {
   get();
});



$('#insert').click(insert);
function insert(){
   var t = $('#title').val();
  //  $('#output').append('<li id='+t+' class="list-group-item">'+t+'<span style="float : right" id='+t+' class="glyphicon glyphicon-remove" onclick="deletee(this.id)"></li>');
  //  $('#title').val('');
    var dataa = {title : t};
      $.ajax({
    url: "http://api.vschool.io/omarkh/todo/",
    type: 'POST',
    data:dataa,
    success: function(result) {
     // $("#div").html(result.name);
        get();
    }
  });
}


function get(){
    
    $('#output').html('');
   $.ajax({
    url: "http://api.vschool.io/omarkh/todo/",
    type: 'GET',
    success: function(result) {
        console.log(result);
      for(var i = 0 ; i<result.length ; i++){
          $('#output').append('<li id='+result[i]._id+' class="list-group-item">'+result[i].title+'<span style="float : right" id='+result[i]._id+' class="glyphicon glyphicon-remove" onclick="deletee(this.id)"></li>');
          
      }
    }
  }); 

    }





//function deletee(idd){
  //  alert(idd);
 //   $("#"+idd).remove();
    
//}



function deletee(id){
    $.ajax({
    url: "http://api.vschool.io/omarkh/todo/"+id,
    type: 'DELETE',
    success: function(result) {
        get();
        
    }
  }); 
    
}
    
    