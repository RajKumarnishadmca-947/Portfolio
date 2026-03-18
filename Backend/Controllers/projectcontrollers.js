const projects = require("../Models/projectmodel");

/* Add Project */
const addproject=async(req,res)=>{
  try {
    const newproject=new projects(req.body);
    await newproject.save();
    res.status(201).json({msg:"Project added successfully"});
  } catch(err) {
    res.status(500).json({msg:"Failed to add project"});
  }
};

/* Get All Projects */
const getproject=async(req,res)=>{
  try {
    const projdata=await projects.find();
    res.status(200).json(projdata);
  } catch(err){
    res.status(500).json({msg:"Failed to get projects data"});
  }
};


module.exports={addproject,getproject};