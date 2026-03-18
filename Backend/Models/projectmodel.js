const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    }
})

const projects = mongoose.model("projects", projectSchema)

module.exports = projects