$(document).ready(function() {
    get();
});


function get(){
   $.ajax({
    url: "http://swapi.co/api/films/1/",
    type: 'GET',
    success: function(result) {
      
          $('#output').html(result.opening_crawl);
          

    }
  }); 

    }