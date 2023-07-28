// @flow strict
import { dialog, panel, scroll_bottom } from "../components/func";
import { Data, DataAdded } from "../types/types";
import Window from "../components/UI/Window";
import { useEffect, useState } from "react";
import { loader } from "../components/preloader";
import Dialog from "../components/UI/Dialog";
import Nav from "../components/UI/Nav";
import indexedDB from "../components/indexDB";

function Home() {
    const [data,setData]=useState<Data>([])
    const [alert,setAlert]=useState("")

    async function addDataToDB(data:DataAdded){
        const request=await indexedDB()
        const db:any=await request
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        store.add(data)
        store.onerror=(event:any)=>{
            console.log(event.target.result)
        }
    }

    async function fetchFromIDB(){
        const request=await indexedDB()
        const db:any=await request
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        const getAll=store.getAll()
        getAll.onsuccess=()=>{
            setData(getAll.result)
        }
        getAll.onerror=(event:any)=>{
            console.log(event.target.result)
            dialog.open()
        }
    }

    const showInput=()=>{
        let keyboard=document.getElementById("keyboard") as HTMLDivElement
        keyboard.style.display="none"
        let input=document.getElementById("show-input") as HTMLDivElement
        input.style.display="block"
        input.style.bottom="0"
        let footer=document.getElementById("install_indicator") as HTMLElement
        footer.classList.add("close")
    }
    
    let date=new Date()
    let min=date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes()
    let time=date.getHours()>12?`${date.getHours()}:${min} pm`:`${date.getHours()}:${date.getMinutes()} am`

    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        loader.on()
        try {
            const req:string=e.target.request.value
            let url=`https://assistance-server.onrender.com/api/chat`
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
                index:parRes.index,
                request: req,
                response: parRes.response,
                more:parRes.more,
                time:time
            })
            fetchFromIDB();
            scroll_bottom()
            e.target.reset()
            loader.off()
        } catch (error:any) {
            loader.off()
            setAlert(error.message)
            dialog.open()
        }
    }
    useEffect(()=>{
        const input=document.getElementById("show-input") as HTMLDivElement
        const footer=document.querySelector("footer") as HTMLElement
        if (!localStorage.getItem("installed")) {
            if(footer.classList.contains("close")){
                input.style.bottom="0"
            }else{
                input.style.bottom="3.5rem"
            }
        }
        setAlert("There was a problem loading the item. Please refresh the page and try again.")
        fetchFromIDB()
    },[])
    
    return (
        <>
            <Nav/>
            <div className="md:flex md:justify-center" onClick={panel.close}>
                <div className='preload'></div>
                <Window data={data}/>

                <div className="fixed bottom-20 right-14 max-sm:right-8 cursor-pointer bg-slate-100 shadow-lg px-2 rounded-[10px]" id="keyboard" onClick={showInput}>
                    <i className="ri-message-3-fill ri-2x text-gray-700"></i>
                </div>
                <div id="show-input" className="fixed left-0 right-0 border-[1px] bg-white">
                    <form className="flex justify-between" onSubmit={handleSubmit}>
                        <input placeholder="Type a message" name="request" required className="w-full px-4 pb-4 pt-3 text-base focus:outline-none"/>
                        <button><i className="ri-send-plane-2-fill ri-lg px-3 text-gray-600"></i></button>
                    </form>
                </div>
                <Dialog message={alert}/>
                <div id="window-bottom"></div>
            </div>
        </>
    );
};

export default Home;