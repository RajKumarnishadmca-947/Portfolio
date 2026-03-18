const express=require("express");
const certificationRouter=express.Router();

const {addCertification,getCertification}=require("../Controllers/certificationcontroller");

certificationRouter.post("/addcertification",addCertification);
certificationRouter.get("/getcertification",getCertification);

module.exports=certificationRouter;