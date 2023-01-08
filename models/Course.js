const mongoose = require("mongoose");


const courseSchema = mongoose.Schema({
    coursename : {
        type : String,
        required : [true, "Course Name is required"]
    }
})

module.exports =mongoose.model("Course", courseSchema);