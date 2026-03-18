const educations = require('../Models/educationmodel')

const addedu=async(req,res)=>{
    try{
        let edu=new educations(req.body)
        await edu.save()
        res.json({msg:"Education added successfully"})
    }catch{
        res.json({msg:"Failed to add education"})
    }
}

const getedu=async(req,res)=>{
  try {
    let data=await educations.find();  
    res.json({data});                 
  } catch (err) {
    res.status(500).json({msg:"Failed to get education"});
  }
};
module.exports={addedu,getedu}