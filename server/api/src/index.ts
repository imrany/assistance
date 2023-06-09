import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import { router } from "./api/api"
dotenv.config()

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({}))
app.use("/api",router)

const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`server running port ${port}`)
})