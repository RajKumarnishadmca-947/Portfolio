const mongoose=require('mongoose')

const educationSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const educations=mongoose.model('educations',educationSchema)
module.exports=educations;