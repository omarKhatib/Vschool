
$('#b').click(
function(){
    
    alert($('#fname').val()+"\n"+$('#lname').val()+"\n "+$('#age').val()+"\n "+$('input:radio[name=gender]:checked').val()+"\n "+$("#location").val()+"\n"+$('#d').val());
}

);