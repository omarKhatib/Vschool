$('#b').click(f);
$('#h').click(s);


var randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}


function sortH(a, b)
{
    return a.highScore - b.highScore;
}

var Data = [];
var msg = '';


var messages = ['2oom ba2a', 'l3ama' , 'no way'];


function f(){
    
    $('#table').css('display','initial');
	var n = $("#name").val();
	var g = $("#game").val();
	var d = $("#date").val();
    var h = $("#hScore").val();
    
    if($("#chk").is(':checked')){
        msgI = randomNumber(0 , messages.length - 1);
        msg = messages[msgI];
    }
    else{
        msg = '';
    }
   
    var data = Data.push({name : n , game : g , date : d , highScore : h , message: msg });
    
 
        
    
    var t = '<tr class="d"><td>'+n+'</td><td>'+g+'</td><td>'+d+'</td><td>'+h+'</td><td>'+msg+'</td></tr>';
   
    $('#table').append(t);
    $('input').val(''
                  .0);
    
        }



function s(){
    
    
    
    Data.sort(sortH);
    
    $('.d').remove();
   
var tSorted;
    for(var i=0 ; i<Data.length ; i++){

     tSorted = '<tr><td>'+Data[i].name+'</td><td>'+Data[i].game+'</td><td>'+Data[i].date+'</td><td>'+Data[i].highScore+'</td><td>'+Data[i].message+'</td></tr>';
   $('#table').append(tSorted);

}
    
}









