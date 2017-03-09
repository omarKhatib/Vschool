var mongoose = require('mongoose');
var schema = mongoose.Schema;
var studentsSchema = new schema({
    name: String,
    age: Number
    
    
    
    
    
});


module.exports = mongoose.model('Students', studentsSchema);