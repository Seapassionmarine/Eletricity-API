const express = require("express")
const dotenv = require("dotenv").config()

const mongoose =require("mongoose")
const port = process.env.port  

const app=express()

const router= require("./Router/userRouter")

app.use(express.json()) 
  
app.use(router)  

//connect to mongose
mongoose.connect(process.env.dbUrl).then(()=>{

console.log('connection to database is now  established');

app.listen(port,()=>{ 
    console.log(`port established successfully on ${port}`);

})   

}).catch ((err)=>{ 
    console.log('unable to connect to the db because', err.message);
})
 
app.get('/',(req,res)=>{
    res.status(200).json({message:`Welcome to my Electricity's API`})
})