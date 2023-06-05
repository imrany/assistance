// @flow strict
import { useState } from "react"

function Home() {
    const showInput=()=>{
        let keyboard=document.getElementById("keyboard") as HTMLDivElement
        keyboard.style.display="none"
        let input=document.getElementById("show-input") as HTMLDivElement
        input.style.display="block"
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        const request:string=e.target.request.value
        console.log(request)
    }
    return (
        <div>
            <div className="fixed bottom-16 right-14 max-sm:right-8 cursor-pointer" id="keyboard" onClick={showInput}>
                <i className="ri-keyboard-fill ri-2x text-gray-700"></i>
            </div>
            <div id="show-input" className="fixed bottom-14 left-0 right-0 border-[1px]">
                <form className="flex justify-between" onSubmit={handleSubmit}>
                    <input placeholder="Type a message" name="request" className="w-full px-4 pb-4 pt-3 text-base "/>
                    <button><i className="ri-message-fill ri-lg px-3 text-gray-600"></i></button>
                </form>
            </div>
        </div>
    );
};

export default Home;