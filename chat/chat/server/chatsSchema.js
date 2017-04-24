var mongoose = require('mongoose');
var schema = mongoose.Schema;
var chatsSchema = new schema({
    
    user: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },

    
    
    
});
module.exports=mongoose.model("chats",chatsSchema);