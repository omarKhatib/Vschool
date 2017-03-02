var validation  = function(obj){
    for(key in obj){
        if(obj[key] == '' || obj[key] == undefined){
            return {message:'F' , missedData:key}
        }
        
    }
        return {message:'T'};
    
    
    
}

module.exports = validation;