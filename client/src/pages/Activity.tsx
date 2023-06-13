// @flow strict
import { useContext, useState } from "react";
import PageHeader from "../components/UI/PageHeader";
import img from "/icons/assistance-72x72.png"
import { dialog } from "../components/func";
import { GlobalContext } from "../GlobalContext";
import Delete_Dialog from "../components/UI/Delete_Dialog";

function Activity() {
    const {db}=useContext(GlobalContext)
    const [history,setHistory]=useState([
        {
            index:0,
            request:"No request",
            response:"Nothing to see here... make a request first",
            time:''
        }
    ])
    const val={
        title:"My activity"
    }

    function fetchFromIDB(){
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        const getAll=store.getAll()
        getAll.onsuccess=()=>{
            setHistory(getAll.result)
        }
        getAll.onerror=(event:any)=>{
            console.log(event.target.result)
            dialog.open()
        }
    }
    window.onclick=()=>{
        fetchFromIDB()
    }
    const [alert, setAlert]=useState({
        text:``,
        index:0
    })
    const delete_history=(index:any)=>{
        dialog.open()
        setAlert({
            text:`You are about to delete this?`,
            index
        })
        return index
    }
    return (
        <div>
            <PageHeader val={val}/>
            <div className="flex flex-col pb-4 pt-20 px-4">
                <div className="lg:px-14">
                    <div className="mb-16">
                        {history&&history.map(i=>(
                            <div className="my-6 border-b-[1px] pb-4" key={i.index}>
                                <div className="flex">
                                    <img src={img} className="w-[40px] h-[40px] rounded-lg"/>
                                    <p className="text-gray-500 text-base ml-4 mt-2">Assistance</p>
                                </div>
                                <p className="text-base my-3"><i className="ri-search-eye-line"></i> <span className="text-blue-500">{i.request}</span></p>
                                <p className="text-sm w-fit text-gray-600">{i.response}</p>
                                <div className="flex mt-6 text-gray-500">
                                    <p className="text-sm">{i.time}</p>
                                    <i className="ri-sm ri-map-pin-fill mx-2"></i>
                                    <i onClick={()=>delete_history(i.index)} className="text-sm mx-2 ri-delete-bin-fill cursor-pointer"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Delete_Dialog message={alert}/>
                </div>
            </div>
        </div>
    );
};

export default Activity;