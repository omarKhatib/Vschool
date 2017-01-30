$(document).ready(function() {
    get();
});





$('#get').click(get);
$('#insert').click(insert);
function insert(){
    var t = $('#title').val();
    var d = $('#description').val();
    var p = $('#price').val();
    var img = $('#imgUrl').val();
    var c= $('#completed').is(':checked');
    var dataa = {title : t , description : d , price : p , imgUrl : img , completed : c};
    
  $.ajax({
    url: "http://api.vschool.io/omarkh/todo/",
    type: 'POST',
    data:dataa,
    success: function(result) {
      $("#div").html(result.name);
        get();
    }
  });


}

function get(){
   $.ajax({
    url: "http://api.vschool.io/omarkh/todo/",
    type: 'GET',
    success: function(result) {
      for(var i = 0 ; i<result.length ; i++){
          $('#output').append('<li id='+result[i]._id+' class="list-group-item">'+result[i].title+'<button id='+result[i]._id+' onclick="deletee(this.id);" class=" pull-right btn btn-danger" >delete</button><button id='+result[i]._id+' onclick="update(this.id);" class=" pull-right btn btn-primary" >update</button></li>');
          
      }
    }
  }); 

    }



function deletee(id){
    $.ajax({
    url: "http://api.vschool.io/omarkh/todo/"+id,
    type: 'DELETE',
    success: function(result) {
        $('#output').remove()
        get();
        
    }
  }); 
    
}
    
    



function alt(x){
    
    alert(x);
}
