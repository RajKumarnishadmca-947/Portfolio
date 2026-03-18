const express=require('express')
const { addedu, getedu } = require('../Controllers/educationcontrollers')
const eduRouter=express.Router()

eduRouter.post("/addedu",addedu)
eduRouter.get("/getedu",getedu)

module.exports=eduRouter;