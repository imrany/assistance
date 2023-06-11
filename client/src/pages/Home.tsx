// @flow strict
import { dialog, panel } from "../components/func";
import { Data, DataAdded } from "../types/types";
import Window from "../components/Window";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { loader } from "../components/preloader";
import Dialog from "../components/Dialog";

function Home() {
    const {db}=useContext(GlobalContext)
    const [data,setData]=useState<Data>([])
    const [alert,setAlert]=useState("")

    function addDataToDB(data:DataAdded){
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        store.add(data)
        store.onerror=(event:any)=>{
            console.log(event.target.result)
        }
    }

    function fetchFromIDB(){
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        const getAll=store.getAll()
        getAll.onsuccess=()=>{
            setData(getAll.result)
        }
        getAll.onerror=(event:any)=>{
            console.log(event.target.result)
        }
    }
    setTimeout(()=>{
        fetchFromIDB();
        setAlert("what message")
    },10)
    
    const showInput=()=>{
        let keyboard=document.getElementById("keyboard") as HTMLDivElement
        keyboard.style.display="none"
        let input=document.getElementById("show-input") as HTMLDivElement
        input.style.display="block"
    }
    
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        loader.on()
        try {
            const req:string=e.target.request.value
            let url=`http://localhost:5000/api/chat`
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    request:req
                })
            })
            const parRes=await response.json()
            addDataToDB({
                request: req,
                response: parRes.response
            })
            fetchFromIDB();
            e.target.reset()
            loader.off()
        } catch (error:any) {
            loader.off()
            console.log(error.message)
        }
    }
    useEffect(()=>{
        const input=document.getElementById("show-input") as HTMLDivElement
        const footer=document.querySelector("footer") as HTMLElement
        if(footer.classList.contains("close")){
            input.style.bottom="0"
        }else{
            input.style.bottom="3.5rem"
        }
    },[])

   
    return (
        <div className="md:flex md:justify-center" onClick={panel.close}>
            <div className='preload'></div>
            <Window data={data}/>
            <button onClick={dialog.open}>Open dialog</button>

            <div className="fixed bottom-16 right-14 max-sm:right-8 cursor-pointer bg-slate-100 shadow-lg px-2 rounded-[10px]" id="keyboard" onClick={showInput}>
                <i className="ri-message-3-fill ri-2x text-gray-700"></i>
            </div>
            <div id="show-input" className="fixed left-0 right-0 border-[1px] bg-white">
                <form className="flex justify-between" onSubmit={handleSubmit}>
                    <input placeholder="Type a message" name="request" required className="w-full px-4 pb-4 pt-3 text-base focus:outline-none"/>
                    <button><i className="ri-send-plane-2-fill ri-lg px-3 text-gray-600"></i></button>
                </form>
            </div>
            <Dialog message={alert}/>
        </div>
    );
};

export default Home;