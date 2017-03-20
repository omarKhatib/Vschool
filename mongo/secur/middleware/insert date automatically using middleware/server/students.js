var mongoose = require('mongoose');
var schema = mongoose.Schema;
var studentsSchema = new schema({
    name: String,
    age:Number,
    date:{
        type:Date,
        required: true
        
    }
    
    
    
});
module.exports=mongoose.model("Students",studentsSchema);