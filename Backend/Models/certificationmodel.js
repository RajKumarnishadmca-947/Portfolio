const mongoose=require("mongoose");

const certificationSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
        },
    organization:{
        type:String,
        required:true
        },
    issueDate:{
        type:String
        },
    Id:{
        type:String
        },
    description:{
        type:String
        }
});

const Certification=mongoose.model("Certification",certificationSchema);

module.exports=Certification;