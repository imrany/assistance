// @flow strict

import { dialog, reload, update_app } from "../func";

type Props={
    data:{
        version:string
    }
}
function Update_Dialog(prop:Props) {
    const update=()=>{
        // "site-static"
        update_app("site-dynamic")
        localStorage.setItem("version",prop.data.version)
    }
   
    return (
        <dialog id="d" className="shadow-lg rounded-md justify-center items-center flex flex-col lg:w-[35vw] max-md:w-[80vw] max-sm:w-[75vw] pb-6 h-fit max-sm:scale-[0.9]">
            <button onClick={dialog.close} className="ml-[auto]">
                <i className="ri-close-fill ri-lg hover:text-blue-500"></i>
            </button>
           {prop.data.version===""?
                <div className="text-center">
                    <p className="text-2xl  max-sm:text-lg my-2">No internet connection</p>
                    <p className="text-sm max-sm:text-xs text-gray-400 lg:w-[300px]">
                        Turn on mobile data or WIFI to fetch the recent updates
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-500 text-white border-none px-4 py-2 text-xs rounded-md mr-6" onClick={reload}>Reload</button>
                        <button className="bg-white border text-blue-500 px-4 py-2 text-xs rounded-md ml-6" onClick={dialog.close}>Close</button>
                    </div>
                </div>
           :(
            <div className="text-center">
                <p className="text-2xl  max-sm:text-lg my-2">Update to version {prop.data.version}</p>
                <p className="text-sm max-sm:text-xs text-gray-400 lg:w-[300px]">
                    {prop.data.version}
                </p>
                <div className="flex justify-center mt-4">
                    <button className="bg-green-500 text-white font-semibold border-none px-4 py-2 text-sm rounded-lg max-sm:w-[150px] md:w-[200px]" onClick={update}>Update</button>
                </div>
            </div>
           )}
        </dialog>
    );
};

export default Update_Dialog;