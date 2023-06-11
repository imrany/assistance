import express from "express"
import { modal } from "../natural"
const router=express.Router()

let index=0;
router.post("/chat",async(req:any,res:any)=>{
    ++index
    try {
        const {request}=req.body
        const response=modal(request)
        res.status(200).send({response:response,index:index})
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

export{
    router
}