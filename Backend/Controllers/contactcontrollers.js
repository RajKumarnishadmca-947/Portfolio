const contacts=require("../Models/contactmodel")

const addcontact=async(req,res)=>{
    try{
        let newcontact= new contacts(req.body)
        await newcontact.save()
        res.status(201).json({msg:"Message sent successfully"})
    }catch{
        res.status(400).json({msg:"Error in sending Message"})
    }
}

const getcontact=async(req,res)=>{
    try{
        let contactdata=await contacts.find()
        res.status(200).json(contactdata)
    }catch{
        res.status(500).json({msg:"Error in getting contact message"})
    }
}

module.exports={addcontact,getcontact}