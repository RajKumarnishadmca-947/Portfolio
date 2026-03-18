const Certification = require("../Models/certificationmodel");

const addCertification=async(req,res)=>{
  try {
    const data =new Certification(req.body);
    await data.save();
    res.status(201).json({msg:"Certification added successfully",data});
  } catch(err){
    console.log(err);
    res.status(500).json({msg:"Failed to add certification"});
  }
};

const getCertification=async(req,res)=>{
  try {
    const data=await Certification.find();
    res.status(200).json({data});
  } catch(err){
    res.status(500).json({msg:"Failed to fetch certifications"});
  }
};

module.exports={addCertification,getCertification};