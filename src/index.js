import connectDB from "./db/index.js"
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})


connectDB()



















/*
import express from "express"
const app = express()

;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Express cannot talk to DB !!",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log("App listening on port:"+ process.env.PORT)
        })
    } catch (error) {
        console.log("Error:",error)
        throw error
        
    }
})()
*/