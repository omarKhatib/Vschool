var alpA = 'abcdefghigklmnopqrstuvwxyz';
var cAlpA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symA = '?!@#$%&*';
var numA = '0123456789';

var randIntRange = function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

$('#g').click(generate);

function generate(){
    var pass = "";
    
    
    var x = parseInt($('#n').val())/4;
    var t = Math.floor(x);
for(var i=0 ; i<t ; i++){
    var alp = randIntRange(0, alpA.length-1);
    var calp = randIntRange(0, cAlpA.length-1);
    var sym = randIntRange(0, symA.length-1);
    var num = randIntRange(0, numA.length-1);
    pass+=alpA[alp]+cAlpA[calp]+symA[sym]+numA[num];
    
    
    
    
}
$('#pass').html(pass);
    
}

