// @flow strict

import { useEffect, useState } from "react";
import PageHeader from "../components/UI/PageHeader";
import Update_Dialog from "../components/UI/Update_Dialog";
import { dialog } from "../components/func";
import { status } from "../components/status";

function Software_updates() {
    const [version,setVersion]=useState("")
    const check_version_app=async()=>{
        const version=localStorage.getItem("version")
        if(!version){
            localStorage.setItem("version","1.0.0")
        }else{
            try {
                let url=`https://assistance-server.onrender.com/api/version`
                const response=await fetch(url)
                const parRes=await response.json()
                setVersion(parRes.version)
            } catch (error:any) {
                console.log(error.message)
            }
        }
      }
    const val={
        title:"Software updates"
    }
    useEffect(()=>{
        check_version_app()
    },[version])

    const data={
        version:version
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
                    <p className="text-sm text-gray-500">{localStorage.getItem("version")}</p>
                </div>
                {localStorage.getItem("version")===version?(
                    <div className="px-4 lg:px-14 border-b-[1px] py-3 cursor-pointer hover:bg-gray-200">
                        <p className="text-xl max-sm:text-base">Update</p>
                            <p className="text-sm text-gray-500">No updates.</p>
                    </div>
                ):(
                    <div onClick={dialog.open} className="px-4 lg:px-14 border-b-[1px] py-3 cursor-pointer hover:bg-gray-200">
                        <p className="text-xl max-sm:text-base">Update</p>
                        <p className="text-sm text-gray-500">{version===""?
                        <span>Turn on mobile data or WIFI to fetch the recent updates</span>:(
                            <span>Updated to {version}</span>
                        )}</p>
                    </div>
                )}
                <a href="../../LICENSE" download="MIT License" className="hover:bg-gray-200 px-4 lg:px-14 border-b-[1px] py-3 cursor-pointer">
                    <p className="text-xl max-sm:text-base">Legal information</p>
                    <p className="text-sm text-gray-500">MIT License</p>
                </a>
            </div>
            <Update_Dialog data={data}/>
        </div>
    );
};

export default Software_updates;