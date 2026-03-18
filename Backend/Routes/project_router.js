const express=require('express')
const { addproject, getproject, delproject, updproject } = require('../Controllers/projectcontrollers')

const projectRouter=express.Router()

projectRouter.post("/addproject",addproject)
projectRouter.get("/getproject",getproject)


module.exports=projectRouter