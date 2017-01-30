$('#b').click(g);
function g(){
    var x = $('#num').val();

var xhr = new XMLHttpRequest();
console.log("My script has loaded");

xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
    $('#div').html((data["name"])+'  '+data["gender"]);
    
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);
  }
};

xhr.open("GET", "http://swapi.co/api/people/"+x+"/", true);
xhr.send();
    
}








//***********ajax with jquery**********************
/*

$('#b').click(g);
function g(){
    var x = $('#num').val();



 
  $.ajax({
    url: "http://swapi.co/api/people/"+x+"/",
    type:
    data:
    success: function(result) {
      $("#div").html(result.name);
    }
  });


}



*/