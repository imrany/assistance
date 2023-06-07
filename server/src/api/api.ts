import express from "express"
import { modal } from "../natural"
const router=express.Router()


router.post("/chat",async(req:any,res:any)=>{
    const date=new Date
    let id=`${date.getFullYear()}${date.getMonth()}${date.getMinutes()}${date.getSeconds()},${date.getMilliseconds()}`
    let encrypted=Buffer.from(id).toString("base64")
    try {
        const {request}=req.body
        const response=modal(request)
        res.status(200).send({response:response,encrypted:encrypted})
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

export{
    router
}