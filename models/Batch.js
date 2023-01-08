const mongoose = require("mongoose");

const batchSchema =  mongoose.Schema({
    batchname  : {
        type : String,
        required : [true, "Batch Name is Required"]
    }
}, {timestamps : true})

module.exports = mongoose.model("Batch", batchSchema);
