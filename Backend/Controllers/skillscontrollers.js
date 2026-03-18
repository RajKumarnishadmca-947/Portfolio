
/* Add Skills */
const Skills=require("../Models/skillsmodel");

const addSkills=async(req,res)=>{
  try {
    const {category,skills }=req.body;
    if (!category||!skills){
      return res.status(400).json({msg:"Category and skills are required"});
    }
    const newSkills=new Skills({category,skills});
    await newSkills.save();
    res.status(201).json({msg:"Skills added successfully",data:newSkills});
  } catch (error) {
    console.error(error);
    res.status(500).json({msg:"Server error while adding skills"});
  }
};


/* Get Skills */
const getSkills=async(req,res)=>{
  try {
    const data=await Skills.find();
    res.status(200).json({msg:"Skills fetched successfully",data:data});
  } catch (error) {
    console.error(error);
    res.status(500).json({msg:"Server error while fetching skills"});
  }
};

module.exports={addSkills,getSkills}