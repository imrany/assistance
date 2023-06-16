import express from "express"
import { ML } from "../ML";

const router=express.Router()

let index=0;
router.post("/chat",async(req:any,res:any)=>{
    ++index
    try {
        const {request}=req.body
        const model=new ML(request)
        // const response=model.natural_ml()
        const response=model.brain_ml()
        const more_about_it=`https://www.google.com/search?q=${request}`
        res.status(200).send({response:response,index:index, more:more_about_it})
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

router.get("/version",async(req:any,res:any)=>{
    try {
        res.send({version:"1.1.0"})
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})
export{
    router
}