const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const contactRouter=require("./Routes/contact_router")
const skillrouter=require("./Routes/skills_router")
const projectRouter=require("./Routes/project_router")
const eduRouter=require("./Routes/education_router")
const certificationRouter=require("./Routes/certification_router")

const cors=require('cors')

const PORT=process.env.PORT ||5000;
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log({msg:"Database connected"})
}).catch(()=>{
    console.log({msg:"Error in DB connection"})
})

//Routes
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.use("/",contactRouter)
app.use("/",skillrouter)
app.use("/",projectRouter)
app.use("/",eduRouter)
app.use("/",certificationRouter)

app.listen(PORT,()=>{
    console.log("Your server is runing")
})