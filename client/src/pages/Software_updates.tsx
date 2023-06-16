// @flow strict

import PageHeader from "../components/UI/PageHeader";
import Update_Dialog from "../components/UI/Update_Dialog";
import { dialog } from "../components/func";
import { status } from "../components/status";

function Software_updates() {
    let version="1.1.0"
    const val={
        title:"Software updates"
    }

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
                        <p className="text-sm text-gray-500">Updated to {version}</p>
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