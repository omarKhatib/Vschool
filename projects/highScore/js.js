

function sortSum(a, b)
{
    return a.hS - b.hS;
}


var Data = function(name,game,date,hS){
    this.name = name;
    this.game = game;
    this.date = date;
    this.hS = hS;
 
    
    
    
    
}


$('#b').click(f);
var messages = ['2oom ba2a', 'l3ama'];
function f(){

    $('#table').css('display','initial');
	var name = $("#name").val();
	var game = $("#game").val();
	var date = $("#date").val();
    var hS = $("#hScore").val();
    
    
    var t = '<tr><td>'+name+'</td><td>'+game+'</td><td>'+date+'</td><td>'+hS+'</td></tr>';
   // table.appendChild(t);
    $('#table').append(t);

}
