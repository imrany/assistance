import express from "express"
import { modal } from "../natural"
const router=express.Router()

router.post("/chat",async(req:any,res:any)=>{
    try {
        const {request}=req.body
        const response=modal(request)
        res.status(200).send(response)
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

export{
    router
}