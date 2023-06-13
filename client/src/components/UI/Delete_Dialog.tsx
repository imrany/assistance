// @flow strict
import { useContext } from "react";
import { dialog, reload } from "../func";
import { GlobalContext } from "../../GlobalContext";

type Props={
    message:{
        text:string,
        index:any
    }
}
function Delete_Dialog(prop:Props) {
    const {db}=useContext(GlobalContext)
    const delete_from_db=()=>{
        const transaction=db.transaction("Chats","readwrite")
        const store=transaction.objectStore("Chats")
        const getAll=store.delete(prop.message.index)
        getAll.onsuccess=()=>{
            dialog.close()
            console.log("deleted")
        }
        getAll.onerror=(event:any)=>{
            console.log(event.target.result)
            reload()
        }
    }
    return (
        <dialog id="d" className="shadow-lg rounded-md justify-center items-center flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] pb-6 h-fit max-sm:scale-[0.9]">
            <button onClick={dialog.close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-blue-500"></i>
            </button>
            <div className="text-center">
                <p className="text-2xl  max-sm:text-base my-2">{prop.message.text}</p>
                <div className="flex justify-center mt-4">
                    <button className="bg-red-500 text-white border-none px-4 py-2 text-xs rounded-md mr-6" onClick={delete_from_db}>Delete</button>
                    <button className="bg-white border text-blue-500 px-4 py-2 text-xs rounded-md ml-6" onClick={dialog.close}>Cancel</button>
                </div>
            </div>
        </dialog>
    );
};

export default Delete_Dialog;