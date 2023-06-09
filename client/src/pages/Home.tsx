// @flow strict
import { panel } from "../components/panel";
import { Data } from "../types/types";
import Window from "../components/Window";
import { useEffect, useState } from "react";
import { indexDB } from "../components/indexDB";

type DataAdded={
    id:string,
    request:string,
    response:string
}

function Home() {
    let db=indexDB()
    console.log(db)
    const [data,setData]=useState<Data>([])
    function addDataToDB(data:DataAdded){
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        store.put(data)
        store.onerror=(event:any)=>{
            console.log(event.target.result)
        }
        transaction.oncomplete=()=>{
            db.close()
        }
    }

    function fetchFromIDB(){
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        const getAll=store.getAll()
        getAll.onsuccess=()=>{
            setData(getAll.result)
            console.log(getAll.result)
        }
        getAll.onerror=(event:any)=>{
            console.log(event.target.result)
        }
        transaction.oncomplete=()=>{
            db.close()
        }
    }
    useEffect(()=>{
        fetchFromIDB();
    },[])

    const showInput=()=>{
        let keyboard=document.getElementById("keyboard") as HTMLDivElement
        keyboard.style.display="none"
        let input=document.getElementById("show-input") as HTMLDivElement
        input.style.display="block"
    }

    
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try {
            const request:string=e.target.request.value
            let url=`http://localhost:5000/api/chat`
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    request
                })
            })
            const parRes=await response.json()
            addDataToDB({
                id:parRes.encrypted,
                request:request,
                response:parRes.response
            })
            console.log({
                id:parRes.encrypted,
                request:request,
                response:parRes.response
            })
            fetchFromIDB()
            e.target.reset()
        } catch (error:any) {
            console.log(error.message)
        }
    }

    return (
        <div className="md:flex md:justify-center" onClick={panel.close}>
            <Window data={data}/>

            <div className="fixed bottom-16 right-14 max-sm:right-8 cursor-pointer bg-slate-100 shadow-lg px-2 rounded-[10px]" id="keyboard" onClick={showInput}>
                <i className="ri-message-3-fill ri-2x text-gray-700"></i>
            </div>
            <div id="show-input" className="fixed bottom-14 left-0 right-0 border-[1px] bg-white">
                <form className="flex justify-between" onSubmit={handleSubmit}>
                    <input placeholder="Type a message" name="request" required className="w-full px-4 pb-4 pt-3 text-base focus:outline-none"/>
                    <button><i className="ri-send-plane-2-fill ri-lg px-3 text-gray-600"></i></button>
                </form>
            </div>
        </div>
    );
};

export default Home;