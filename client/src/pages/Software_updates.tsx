// @flow strict

import PageHeader from "../components/UI/PageHeader";
import { update_app } from "../components/func";
import { status } from "../components/status";

function Software_updates() {
    let version="1.0.0"
    const update=()=>{
        // "site-static"
        update_app("site-dynamic")
        setTimeout(()=>{
            window.location.reload()
        },3000)
    }
   
    const val={
        title:"Software updates"
    }
    return (
        <div>
             <PageHeader val={val}/>
            <div className="flex flex-col pb-4 pt-16">
                <div className="px-4 lg:px-14 border-b-[1px] py-3 cursor-pointer hover:bg-gray-200">
                    <p className="text-xl max-sm:text-base">Status</p>
                    {status().text=="Back online"?
                        <p className="text-sm text-blue-500">{status().text}</p>:
                        <p className="text-sm text-gray-500">{status().text}</p>
                    }
                </div>
                <div className="px-4 lg:px-14 border-b-[1px] py-3 cursor-pointer hover:bg-gray-200">
                    <p className="text-xl max-sm:text-base">Software version</p>
                    <p className="text-sm text-gray-500">{version}</p>
                </div>
                <div onClick={update} className="px-4 lg:px-14 border-b-[1px] py-3 cursor-pointer hover:bg-gray-200">
                    <p className="text-xl max-sm:text-base">Update</p>
                    <p className="text-sm text-gray-500">Updated to 1.1.0</p>
                </div>
                <a href="../../LICENSE" download="MIT License" className="hover:bg-gray-200 px-4 lg:px-14 border-b-[1px] py-3 cursor-pointer">
                    <p className="text-xl max-sm:text-base">Legal information</p>
                    <p className="text-sm text-gray-500">MIT License</p>
                </a>
            </div>
        </div>
    );
};

export default Software_updates;