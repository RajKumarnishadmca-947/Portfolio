const express=require('express')
const { addSkills, getSkills } = require('../Controllers/skillscontrollers')
const skillrouter=express.Router()

skillrouter.post("/addskills",addSkills)
skillrouter.get("/getskills",getSkills)

module.exports=skillrouter