var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UsersSchema = new schema({
    username:{ 
        
        type:String,
        required:true,
        unique:true
    
    },
     password:{ 
        
        type:String,
        required:true,
    
    },
    
    
    
});
module.exports=mongoose.model("Users",UsersSchema);