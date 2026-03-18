const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        required:true,
        type:String
    }
})
const contacts=mongoose.model('contacts',contactSchema)
module.exports=contacts;