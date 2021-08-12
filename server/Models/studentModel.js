const mongoose = require("mongoose");
const schema = mongoose.Schema;
const studentSchema = new schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("student",studentSchema);