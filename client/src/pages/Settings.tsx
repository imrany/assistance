// @flow strict
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../components/UI/PageHeader";
import { dialog } from "../components/func";
import { useState } from "react";
import Location_Dialog from "../components/UI/Location_Dialog";
import Switch_Dialog from "../components/UI/Switch_Dialog";

function Settings() {
    const [alert,setAlert]=useState("")
    const navigate=useNavigate()
    const val={
        title:"Settings"
    }
    const open=()=>{
        dialog.open()
        setAlert("Turn on your location")
    }
    const switch_account=()=>{
        dialog.switch_open()
    }
    return (
        <div className="flex flex-col py-4 px-4">
            <PageHeader val={val}/>
            <div className="border-b-[1px]">
                <div className="lg:px-14 pt-20 h-[95vh] lg:h-[100vh]">
                    <div className="mb-8 cursor-pointer" onClick={switch_account}>
                        <p className="text-lg text-blue-500">Account</p>
                        <p className="text-xl max-sm:text-base cursor-pointer">Switch account</p>
                        <p className="text-sm text-gray-400">Signed in as person@gmail.com</p>
                    </div>

                    <Link to="/activity" className="mt-8">
                        <div className="text-lg max-sm:text-base"><i className="ri-cactus-line"></i> My Activity</div>
                        <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">View Chat history.</p>
                    </Link>

                    <button className="mt-8" onClick={open}>
                        <p className="text-xl max-sm:text-base"><i className="ri-user-location-line"></i> Location</p>
                    </button>

                    <div className="mt-8">
                        <p className="text-xl max-sm:text-base"><i className="ri-contract-up-down-line"></i> Fine tune</p>
                        <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">80%</p>
                    </div>

                    <div className="mt-8">
                        <Link to="/help">
                            <p className="text-xl max-sm:text-base"><i className="ri-question-line"></i> Help</p>
                            <p className="text-sm text-gray-400 max-md:text-base max-sm:text-sm ml-5">Help center, contact us, privacy policy.</p>
                        </Link>
                    </div>
                </div>
            </div>
            <Location_Dialog message={alert}/>
            <Switch_Dialog/>
            <div className="lg:px-14 py-4">
                <div className="">
                    <p className="text-lg text-blue-500">Legal information</p>
                    <a href="../../LICENSE" download="MIT License" className="max-sm:text-sm">Open source licenses</a>
                </div>
            </div>
        </div>
    );
};

export default Settings;