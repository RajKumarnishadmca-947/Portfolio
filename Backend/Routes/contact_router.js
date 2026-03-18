const express=require('express')
const { addcontact, getcontact } = require('../Controllers/contactcontrollers')
const contactRouter=express.Router()

contactRouter.post("/addcontact",addcontact)
contactRouter.get("/getcontact",getcontact)

module.exports=contactRouter;