 var colorArr = ['red','blue','yellwo','green','brown','aqua'];
    
    
  
    var changeTextColor = function(){
        
        var i = Math.floor(Math.random()*colorArr.length);
        alert(i);
    $('#text').css('color',colorArr[i]);
}
    
    $("#color-button").click(function(){
        changeTextColor();
        
        
        
    });